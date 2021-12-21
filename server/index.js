const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
const PORTS = process.env.PORTS || 5000;

app.use(cors());
app.use(express.json());

app.post("/favorite/post", async (req, res) => {
    try {
        const { mal_id, image_url, type, title  } = req.body;
        const newFavorite = await pool.query(
            // "INSERT INTO favorite (mal_id) VALUES($1) RETURNING *", [mal_id]
            "INSERT INTO favorite (mal_id, image_url, type, title) VALUES($1, $2, $3, $4) RETURNING *", [mal_id, image_url, type, title]
        )
        res.json(newFavorite.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

app.delete("/favorite/delete/:mal_id", async (req, res) => {
    try {
        const { mal_id } = req.params;
        const deleteFavorite = await pool.query(
            "DELETE FROM favorite WHERE mal_id = $1", [mal_id]
        )
        res.json("deleted");
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/favorite/getall", async (req, res) => {
    try {
        const allFavorite = await pool.query("SELECT * FROM favorite");
        res.json(allFavorite.rows);
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/favorite/get/:mal_id", async (req, res) => {
    try {
        const { mal_id } = req.params;
        const Favorite = await pool.query("SELECT * FROM favorite WHERE mal_id = $1", [mal_id]);
        res.json(Favorite.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/", async (req, res) => {
    res.send(`port is ${PORTS}`);
})

app.listen(PORTS, () => {
    console.log(`server listening to port`, PORTS)
});