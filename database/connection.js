const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();


const DB = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

DB.connect((err) => {
  if (!err) {
    console.log("db " + DB.state)
    DB.query(`SELECT 1 FROM blogs`, (err, result) => {
      if (err) {
        console.log('creating table')
        DB.query(`CREATE TABLE blogs(
          id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
          title VARCHAR(60) NOT NULL,
          img_url TEXT NOT NULL,
          description VARCHAR(100) NOT NULL,
          created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`)
        console.log('table created')
      } else {
        console.log("table already exits");
      }
    });
  } else {
    console.log("Failed to connect... " + err.message);
  }
});

// DB.connect((err) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("db " + connection.state);
// });

module.exports = DB
