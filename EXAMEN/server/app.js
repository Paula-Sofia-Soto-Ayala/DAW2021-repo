import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));
const cliente = "../cliente";
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Started on port ${port}`));

app.get("login.js", (req, res) => {
    res.status(200)
        .sendFile(join(root, cliente, "login.js"));
})

app.get("/styles.css", (req, res) => {
    res.status(200)
        .sendFile(join(root, cliente, "styles.css"));
})

app.get("/login", (req, res) => {
    res.status(200)
        .sendFile(join(root, cliente, "login.html"));
})

app.post("/login", (req, res) => {
    console.log(req.body);
    const { user } = req.body;
    const errors = [];

    if (!user) {
        errors.push({ message: "No user received" })
    }

    if (!user.email) {
        errors.push({ message: "No email received" })
    }

    if (!user.password) {
        errors.push({ message: "No password received" })
    }
    res.status(400).send({ errors })
})

app.get("/app", (req, res) => {
    res.status(200)
        .sendFile(join(root, cliente, "app.html"));
})

app.get("*", (req, res) => {
    if (req.is("application/json")) {
        res.status(404)
            .send({ message: "Not found", url: req.originalUrl });
    }
    res.status(404)
        .sendFile(join(root, cliente, "404.html"));
})