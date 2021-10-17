const express = require("express");
const fs = require("fs");
const port = 8080;

const app = express();
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/hello", (req, res) => {
    const name = req.query["name"];
    console.log(req);
    res.status(200).send(`Hello ${name || "world"}!`);
})

app.post("/hello", (req, res) => {
    const data = req.body;
    res.status(201).send(data);
})

const nums = [1,2,3,4,5,6]
function promedio(numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }

    return total / numeros.length;
}
console.log(promedio(nums))

const testString = "Hola :)"
function escribir(str) {
    const path = "out.txt";
    fs.writeFile(path, str, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Escribí al archivo: " + str);
        }
    });
}
escribir(testString);

const palabra = "Sofiringa";
const palindromo = "anitalavalatina";
function esPalindromo(palabra) {
    let start = 0;
    let end = palabra.length - 1;
    while (start < end) {
        if(palabra[start] != palabra[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

console.log(`Es palindromo ${palabra}? - ${esPalindromo(palabra)}`);
console.log(`Es palindromo ${palindromo}? - ${esPalindromo(palindromo)}`);

const lab7root = "/Users/sofiasotoayala/Documents/DAW2021-repo-local/DAW2021-repo/LAB07";
app.get("/", (req, res) => {
    const path = "/Lab07-html.html"
    res.status(200).sendFile(lab7root + path, err => {
        console.log(err);
    })
})

app.get("/Lab07-css.css", (req, res) => {
    const path = "/Lab07-css.css"
    res.status(200).sendFile(lab7root + path, err => {
        console.log(err);
    })
})

app.get("/Lab07-js.js", (req, res) => {
    const path = "/Lab07-js.js"
    res.status(200).sendFile(lab7root + path, err => {
        console.log(err);
    })
})