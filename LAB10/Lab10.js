const express = require("express");
const path = require('path');
const fs = require("fs");

const port = 8080;

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/instructions", (req, res) => {
    res.status(200).send({
        instructions: "Receives two numbers and adds them",
        params: "Number 1 is a, number 2 is b"
    })
})

app.get("/sum", (req, res) => {
    const { a, b } = req.query;
    const numA = parseInt(a)
    const numB = parseInt(b);

    if (isNaN(numA) || isNaN(numB)) {
        res.status(400).send({
            error: "One of the numbers was invalid"
        })
    }

    res.status(200).send({
        a: numA,
        b: numB,
        sum: numA + numB
    });
})

app.get("/form", (req, res) => {
    const file = path.join(__dirname, "form.html");
    res.status(200).sendFile(file);
})

app.post("/form", (req, res) => {
    const { transaction } = req.body;
    if (transaction) {
        console.log(transaction);

        const data = `${JSON.stringify(transaction)}\n`;

        fs.appendFile("submits", data, (err) => {
            if (err) {
                res.status(202).send({
                    status: "could not store entry",
                    error: err.message,
                    data: transaction
                })
                
                const filepath = path.join(__dirname, "submits");
                console.log(`Could not write to filepath ${filepath}`);
                console.log(`Error: ${err.message}`);
            }
        });

        res.status(201).send({
            status: "success",
            data: transaction
        })
    } else {
        res.status(400).send({
            error: "Payment form is invalid",
            data: req.body
        })
    }

})

app.get("*", (req, res) => {
    if (req.is("application/json")) {
        res.status(404).send({
            route: req.originalUrl,
            method: req.method,
            error: "Route does not exist"
        })
    } else {
        res.status(404).sendFile(path.join(__dirname, "404.html"));
    }
})