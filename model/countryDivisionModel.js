const db = require('../service/db');
const buildFindQuery = require('../helper/buildFindQuery');
const TABLES = require('../constant/TABLES');

const CountryDivision = {
  find: async (reqQuery) => {
    const [queryStr, queryValuesArr, paginationObj] = await buildFindQuery(
      TABLES.COUNTRY_DIVISION,
      reqQuery
    );

    const [divisions] = await db.query(queryStr, queryValuesArr);

    return [divisions, paginationObj];
  },

  findById: async (id) => {
    const [countryDivision] = await db.query(
      'SELECT * FROM countrydivision WHERE id = ?',
      [id]
    );
    return countryDivision;
  },
};

module.exports = CountryDivision;
