const mysql = require("mysql2")
const winston = require("winston")

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
  connectTimeout: 15000, // Timeout in milliseconds for establishing a connection
  multipleStatements: true, // Allow executing multiple statements in a single query
})

db.connect((err) => {
  if (err) {
    winston.error(err)
  } else {
    winston.info("Database Connected successfully!")
  }
})

module.exports = db
