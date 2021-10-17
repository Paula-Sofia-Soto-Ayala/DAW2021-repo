function suma() {
    const first = Math.floor(Math.random() * 50)
    const second = Math.floor(Math.random() * 50)
    const result = first + second

    const start = performance.now()
    const input = prompt(`Cuál es la suma de ${first} + ${second}?`)
    const end = performance.now()

    const num = parseInt(input, 10)
    const seconds = (end - start) / 1000

    if (isNaN(num)) {
        alert(`Invalid value`)
        return;
    }

    if (num === result) {
        alert(`Correct!\nYou took ${seconds.toFixed(3)} seconds!`)
    } else {
        alert(`Incorrect! It was ${result}\nYou took ${seconds.toFixed(3)} seconds!`)
    }
}

function contador(arr) {
    let negativos = 0
    let ceros = 0
    let otros = 0

    for (const num of arr) {
        if (num < 0) {
            ++negativos
        } else if (num === 0) {
            ++ceros
        } else {
            ++otros
        }
    }

    const print = arr.join(", ")
    alert(`Array: [${print}]\nNegativos: ${negativos}\nCeros: ${ceros}\nMayores: ${otros}`)

    return {
        negativos,
        ceros,
        otros
    }
}

function promediosMatriz(arr) {
    let promedios = [];

    for (let i = 0; i < arr.length; i++) {
        let promedio = 0
        let calis = arr[i]
        for (let j = 0; j < calis.length; j++) {
            promedio += calis[j]
        }
        promedio = promedio / calis.length;
        promedios.push(promedio.toFixed(2));
    }

    alert(`Promedios: ${promedios.join(", ")}`)
    return (promedios);
}

function inverso() {
    let num = parseInt(prompt("Ingresa un número entero positivo"));
    const copy = num
    let invertido = [];

    while (num !== 0) {
        const residuo = num % 10;
        num = Math.floor(num / 10);
        invertido.push(residuo);
    }

    const inverso = invertido.join("");
    alert(`Número: ${copy} - Inverso: ${inverso}`);
    return inverso;
}

function randomNumber() {
    return Math.round(Math.random() * 1000);
}

function randomArray(max = 10, onlyPositive = false) {
    const count = 6
    const array = []

    for (let i = 0; i < count; i++) {
        const element = Math.floor(Math.random() * max);
        const number = i % 2 == 0 || onlyPositive ? element : -element
        array.push(number)
    }

    return array;
}

/**
 * Funcion auxiliar que genera una matriz random con numeros del 0 al 100
 */
function randomMatrix() {
    const count = 5;
    const matrix = []

    for (let i = 0; i < count; i++) {
        const element = randomArray(100, true)
        matrix.push(element)
    }

    return matrix;
}

/**
 * Dado un arreglo numérico, retorna dos números que sumen el entero target
 */
function twoSum() {
    const target = parseInt(prompt("Dado un arreglo numérico, retorna dos números que sumen el entero target.\nIngresa el target"))
    const array = randomArray(target + 5, true);

    const dic = new Map();
    for (let i = 0; i < array.length; i++) {
        const comp = target - array[i];
        if (dic.has(comp)) {
            alert(`Estos dos numeros en el array: ${array[i]} y ${comp} suman ${target}\nArray: ${array.join(", ")}`);
            return (array[i], comp);
        } else {
            dic.set(array[i], comp);
        }
    }

    alert(`No se encontraron dos números que sumen ${target}\nArray: ${array.join(", ")}`);
    return (undefined, undefined);
}

var app = new Vue({
    el: "#app",
    data: {
        secuencia: [],
        mostrarTabla: false,
        promedios: [],
        mostrarPromedios: false
    },
    methods: {
        generarTabla() {
            const input = prompt("Escribe un número: ")
            const num = Number.parseInt(input, 10)

            if (isNaN(num) || num < 1) {
                alert("Invalid Value")
                return;
            }

            const numbers = []
            for (let i = 1; i <= num; i++) {
                numbers.push({
                    num: i,
                    square: i * i,
                    cube: i * i * i
                })
            }

            this.secuencia = numbers;
            this.mostrarTabla = true
        },
        borrarTabla() {
            this.secuencia = []
            this.mostrarTabla = false
        },
        promediosMatriz() {
            const matrix = randomMatrix();
            for (let i = 0; i < matrix.length; i++) {
                let promedio = 0
                const calis = matrix[i]
                for (let j = 0; j < calis.length; j++) {
                    promedio += calis[j]
                }
                this.promedios.push({
                    calificaciones: calis.join(", "),
                    promedio: (promedio / calis.length).toFixed(2)
                });
            }
            this.mostrarPromedios = true;
        },
        borrarPromedios() {
            this.promedios = []
            this.mostrarPromedios = false
        }
    }
});