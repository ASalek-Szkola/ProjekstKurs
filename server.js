const PORT = 3000;

import express from "express";
const app = express();

import { db_conn } from "./db.js";

try {
  const [results] = await db_conn.query(
    'select * from users'
  );

  console.log(results);
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})