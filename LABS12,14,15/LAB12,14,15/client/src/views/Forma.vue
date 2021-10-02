<template>
  <section class="container">
    <div class="form">
      <h2>Payment details</h2>
      <div class="form-group">
        <label for="cardProvider">Select Card Provider</label>
        <select required class="form-control" v-model="transaction.provider">
          <option hidden disabled :value="undefined">Select a provider...</option>
          <option selected value="VISA">VISA</option>
          <option value="Mastercard">Mastercard</option>
          <option value="American Express">American Express</option>
        </select>
      </div>
      <div class="form-group">
        <label for="cardHolder">Card holder (fullname)</label>
        <input
          required
          type="text"
          class="form-control"
          v-model="transaction.cardHolder"
          placeholder="John Smith"
        />
      </div>
      <div class="form-group">
        <label for="cardNumber">Card Number: </label>
        <span>{{ cardNumberPretty }}</span>
        <input
          required
          type="text"
          class="form-control"
          minlength="16"
          maxlength="16"
          v-model="transaction.cardNumber"
          placeholder="0000-0000-0000-0000"
        />
      </div>
      <div class="form-group">
        <label for="expirationDate">Expiration Date</label>
        <input
          required
          type="date"
          class="form-control"
          v-model="transaction.expirationDate"
        />
      </div>
      <div class="form-group">
        <label for="securityNumber">Security Number</label>
        <input
          required
          type="text"
          class="form-control"
          minlength="3"
          maxlength="4"
          v-model="transaction.securityNumber"
          placeholder="0000"
        />
      </div>

      <button class="btn btn-primary" @click="submitTransaction">
        Submit Payment
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Forma",
  props: {},
  data() {
    return {
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
    };
  },
  methods: {
        async submitTransaction() {
            // Part 1 - Create request and send it (done here)
            const body = { transaction: this.transaction };

            // Part 2 - Wait for server response (not done here)
            const url = "http://localhost:8080/form";
            const response = await axios.post(url, body);

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
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  margin: 3%;
}

button {
  background-color: grey !important;
  border-color: grey !important;
}

.form {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  gap: 10px;

  background: linear-gradient(45deg, lightgrey 75%, grey 25%);
  border-radius: 6px;
}

.container {
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>