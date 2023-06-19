import mysql from 'mysql'

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Takalu2212",
  database: "reactproject"
});