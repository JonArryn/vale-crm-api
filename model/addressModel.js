const buildFindQuery = require('../helper/buildFindQuery');
const db = require('../service/db');
const { ADDRESS_COLS } = require('../constant/TABLE_COLUMNS');
const TABLES = require('../constant/TABLES');
const buildPutQuery = require('../helper/buildPutQuery');
const getDateTime = require('../helper/getDateTime');

const Address = {
  find: async (reqQuery) => {
    const [queryStr, queryValuesArr, paginationObj] = await buildFindQuery(
      TABLES.ADDRESS,
      reqQuery
    );
    const [address] = await db.query(queryStr, queryValuesArr);

    return [address, paginationObj];
  },

  findById: async (id) => {
    const [address] = await db.query('SELECT * FROM address WHERE id = ?', [
      id,
    ]);
    return address;
  },

  create: async (reqBody) => {
    const [result] = await db.query(
      `
      INSERT INTO address (
        ${ADDRESS_COLS.ADDRESS_1},
        ${ADDRESS_COLS.ADDRESS_2},
        ${ADDRESS_COLS.ADDRESS_CITY},
        ${ADDRESS_COLS.COUNTRY_DIV_ID},
        ${ADDRESS_COLS.ADDRESS_ZIP},
        ${ADDRESS_COLS.COUNTRY_ID})
        VALUES(?, ?, ?, ?, ?, ?)`,
      [
        reqBody.address1,
        reqBody.address2,
        reqBody.city,
        reqBody.countryDivisionId,
        reqBody.zip,
        reqBody.countryId,
      ]
    );

    const [newAddress] = await db.query('SELECT * FROM address WHERE id = ?', [
      result.insertId,
    ]);

    return newAddress;
  },

  findByIdAndUpdate: async (id, reqBody) => {
    const [queryStr, queryValuesArr] = buildPutQuery(
      TABLES.ADDRESS,
      ADDRESS_COLS,
      id,
      reqBody
    );
    await db.query(queryStr, queryValuesArr);
    const [address] = await db.query('SELECT * FROM company WHERE ID = ?'[id]);
    return address;
  },

  deleteById: async (id) => {
    await db.query('UPDATE address SET deleted_at ? WHERE ID = ?', [
      getDateTime(),
      id,
    ]);
  },
};

module.exports = Address;
