const PORT = 3000;

import express from "express";
const app = express();

import 'dotenv/config'

app.use(express.json());

import { db_conn } from "./db.js";

app.get("/", async (req, res) => {
    try {
        const [results] = await db_conn.query(
            'SELECT * FROM users'
        );

        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post("/add-user", async (req, res) => {
    console.log(req.body);
    try {
        const body = req.body;
        const name = body.name;

        const [results] = await db_conn.execute(
            `INSERT INTO users (name) VALUES (?)`,
            [name]
        );
        res.status(200).json({ insertId: results.insertId });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.delete("/delete-user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const [results] = await db_conn.execute(
            `DELETE FROM users WHERE id = ?`,
            [id]
        );
        res.status(200).json({ affectedRows: results.affectedRows });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.put("/update-user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const [results] = await db_conn.execute(
            `UPDATE users SET name = ? WHERE id = ?`,
            [name, id]
        );
        res.status(200).json({ affectedRows: results.affectedRows });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})