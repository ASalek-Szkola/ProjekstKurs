const PORT = 3000;

import express from "express";
const app = express();

import { db_conn } from "./db.js";

app.get("/", async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})