const PORT = 3000;

import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json())

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
    res.send("Hello World");
})

app.get("/test", async (req, res) => {
    try {
    const [results] = await db_conn.query(
      'select * from users'
    );
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
    
})

app.post("/add", async (req, res) => {
  if(!req.body.userName) return res.sendStatus(400)
  try {
  const [results] = await db_conn.query(
    'INSERT INTO users (name) VALUES (?)',
    [req.body.userName]
  );

  res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

app.delete("/delete/:text", async (req, res) => {
  const text = req.params.text
  if(text != process.env.CONFIRM_DELETE_TEXT) return res.sendStatus(403)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})