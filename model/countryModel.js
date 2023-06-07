const db = require('../service/db');
const TABLES = require('../constant/TABLES');
const buildFindQuery = require('../helper/buildFindQuery');

const Country = {
  find: async (reqQuery) => {
    const [queryStr, queryValuesArr, paginationObj] = await buildFindQuery(
      TABLES.COUNTRY,
      reqQuery
    );
    const [countries] = await db.query(queryStr, queryValuesArr);
    return [countries, paginationObj];
  },

  findById: async (id) => {
    const [country] = await db.query('SELECT * FROM country WHERE id = ?', [
      id,
    ]);

    return country;
  },
};

module.exports = Country;
