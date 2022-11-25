const db_office = require("knex")({
  client: "mysql2",
  connection: {
    
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "aranhosbook",
  },
});
module.exports = db_office
