// const express = require("express");
// const { Client } = require("pg");
// const Query = require("pg").Query;

// const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

// class UserRepository {
//   constructor() {
//     this.client = new Client({
//       // user: USER,
//       user: DB_USER,
//       host: DB_HOST,
//       database: DB_NAME, // dbname 환경변수 에러 ? Why?
//       password: DB_PASSWORD,
//       port: DB_PORT,
//     });

//     client.connect();
//   }

//   async getUsers() {
//     const query = new Query("SELECT * FROM users");
//     this.client.query(query);
//     const rows = [];

//     query.on("row", (row) => {
//         rows.push(row);
//       });

//       query.on("end", () => {
//         console.log("query done");
//         res.send(rows);
//         res.status(200).end();
//       });

//       query.on("error", (err) => {
//         console.error(err.stack);
//         res.send({ success: false, error: err.message });
//         res.status(404);
//       });
//   }
// }
