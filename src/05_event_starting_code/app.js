const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods : {
        /* event : Working with argument */
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        }
    }
});

app.mount('#events');