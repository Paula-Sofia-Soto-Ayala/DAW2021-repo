const { createApp } = Vue;
const { post } = axios;
const app = createApp({
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            errors: [],
            placeholderEmail: "sofia.soto@email.com",
            placeholderPass: "**********"
        }
    },
    methods: {
        validate(email, password) {
            const errors = [];
            if (!email) {
                errors.push({ message: "Input your email" })
            };

            if (!password) {
                errors.push({ message: "Input your password" })
            }

            return errors;
        },
        async login() {
            const { email, password } = this;
            const errors = this.validate(email, password);
            if (errors?.length > 0) {
                this.errors = errors;
                return;
            }

            try {
                const response = post("/login", {
                    user: { email, password }
                });

                if (response.status != 204) {
                    this.errors = response.data.errors;
                }
            } catch (error) {
                this.errors.push({ message: "Could not call server login" });
            }
        }
    }
});
app.mount('#app')