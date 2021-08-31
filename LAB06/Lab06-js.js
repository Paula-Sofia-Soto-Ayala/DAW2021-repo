function validateMatchingPass() {
    const password = document.getElementById("pass").value;
    const validate = document.getElementById("valPass").value;

    if (password !== validate) {
        alert("Las contraseñas no son iguales");
    } else {
        alert("Las contraseñas son iguales");
    }

    const letters = password.split('');
    const arrayErrores = [];

    const capital = letters.filter(c => c >= 'A' && c <= 'Z').length;

    if (capital < 1) {
        arrayErrores.push("Debe contener al menos una letra mayúscula");
    }

    const isNumber = letter => isNaN(parseInt(letter)) == false;

    const number = letters.filter(n => isNumber(n)).length;

    if (number < 1) {
        arrayErrores.push("Debe contener al menos un número");
    }

    if (arrayErrores.length > 0) {
        for (let i = 0; i < arrayErrores.length; i++) {
            alert(arrayErrores[i]);
        }
    } else {
        alert("Contraseña correcta");
    }
}

var app = new Vue({
    el: "#app",
    data: {
        /* image: 'https://images.unsplash.com/photo-1574755537274-af70a43065ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80', */
        product: 'Iphone X',
        selectedVariant: 0,
        precioTotal: 0,
        details: ["Gold", "Made in France", "Free Shipping"],
        variants: [
            {
                variantColor: "Purple",
                variantImg: 'https://images.unsplash.com/photo-1574755537274-af70a43065ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80',
                quantity: 20,
                variantPrice: 16999.0,
            },
            {
                variantColor: "Yellow",
                variantImg: 'https://images.unsplash.com/photo-1574755393849-623942496936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                quantity: 10,
                variantPrice: 15999.0,
            },
            {
                variantColor: "Red",
                variantImg: 'https://images.unsplash.com/photo-1574719128057-ed41a7b06ce5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80',
                quantity: 5,
                variantPrice: 20999.0,
            }
        ],
        cart: {
            "Purple": 0,
            "Yellow": 0,
            "Red": 0,
            total: 0.0,
            subtotal: 0.0,
            iva: 0.0
        }
    },
    methods: {
        addToCart(variant) {
            const carrito = this.cart;
            const color = variant.variantColor;
            if(variant.quantity > 0) {
                carrito[color]++;
                variant.quantity--;

                carrito.subtotal += variant.variantPrice;
                carrito.total = carrito.subtotal * 1.16;
                carrito.iva = carrito.total * 0.16;
            }
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart(variant) {
            const carrito = this.cart;
            const color = variant.variantColor;
            if (carrito[color] > 0) {
                carrito[color]--;
                variant.quantity++;

                carrito.subtotal -= variant.variantPrice;
                carrito.total = carrito.subtotal * 1.16;
                carrito.iva = carrito.total * 0.16;
            }
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].variantImg;
        },
        inStock() {
            return this.variants.some(variant => variant.quantity > 0);
        }
    }
});