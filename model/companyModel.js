const db = require('../service/db');
const buildFindQuery = require('../helper/buildFindQuery');
const buildPutQuery = require('../helper/buildPutQuery');
const { COMPANY_COLS } = require('../constant/TABLE_COLUMNS');
const TABLES = require('../constant/TABLES');
const getDateTime = require('../helper/getDateTime');

const Company = {
  find: async (reqQuery) => {
    const [queryStr, queryValuesArr, paginationObj] = await buildFindQuery(
      TABLES.COMPANY,
      reqQuery
    );

    const [companies] = await db.query(queryStr, queryValuesArr);

    return [companies, paginationObj];
  },

  findById: async (id) => {
    const [company] = await db.query(`SELECT * FROM company WHERE id = ?`, [
      id,
    ]);

    return company;
  },

  create: async (reqBody) => {
    const [result] = await db.query(
      `
  INSERT INTO company (
    ${COMPANY_COLS.NAME},
    ${COMPANY_COLS.PHONE},
    ${COMPANY_COLS.EMAIL},
    ${COMPANY_COLS.ADDRESS_ID},
    ${COMPANY_COLS.URL})
  VALUES (?, ?, ?, ?, ?)`,
      [
        reqBody.name,
        reqBody.phone,
        reqBody.email,
        reqBody.address_id,
        reqBody.url,
      ]
    );

    const [newCompany] = await db.query(`SELECT * FROM company WHERE id = ?`, [
      result.insertId,
    ]);
    return newCompany;
  },

  findByIdAndUpdate: async (id, reqBody) => {
    const [queryStr, queryValuesArr] = buildPutQuery(
      TABLES.COMPANY,
      COMPANY_COLS,
      id,
      reqBody
    );
    await db.query(queryStr, queryValuesArr);
    const [company] = await db.query(`SELECT * FROM company WHERE ID = ?`, [
      id,
    ]);

    return company;
  },
  deleteById: async (id) => {
    await db.query(`UPDATE company SET deleted_at = ? WHERE ID = ?`, [
      getDateTime(),
      id,
    ]);
  },
};

module.exports = Company;
