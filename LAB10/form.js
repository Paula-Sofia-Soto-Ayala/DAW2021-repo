var app = new Vue({
    el: "#app",
    data: {
        transaction: {
            provider: undefined,
            cardHolder: undefined,
            cardNumber: undefined,
            expirationDate: undefined,
            securityNumber: undefined
        },
        emptyTransaction: {
            provider: undefined,
            cardHolder: undefined,
            cardNumber: undefined,
            expirationDate: undefined,
            securityNumber: undefined
        }
    },
    methods: {
        async submitTransaction() {
            // Part 1 - Create request and send it (done here)
            const body = { transaction: this.transaction };

            // Part 2 - Wait for server response (not done here)
            const response = await axios.post("/form", body);

            // Part 3 - Handle server response (done here)
            if (response.status === 201) {
                this.transaction = { ...this.emptyTransaction };
                alert("Payment was successful")
            } else {
                alert(`Error: ${response.data.error}`)
            }
        }
    },
    computed: {
        cardNumberPretty() {
            const { cardNumber } = this.transaction;
            if(!cardNumber) return "0000-0000-0000-0000";
            
            const numbers = Array
                .from(cardNumber)
                .filter(c => c !== '-')
                .join("");

            const format = []
            for (let i = 0; i < numbers.length; i += 4) {
                format.push(numbers.substring(i, i + 4));
            }

            return format.join("-");
        }
    }
});