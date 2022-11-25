const db_office = require("knex")({
  client: "mysql2",
  connection: {
    // host: "192.168.2.7",
    // port: 3306,
    // user: "aranhos",
    // password: "aranzjkowfh",
    // database: "hosofficedb",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "aranhosbook",
  },
});
module.exports = db_office