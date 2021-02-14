const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        submitFormHandler1(event) {
            event.preventDefault();
            alert('Submitted 1');
        },
        submitFormHandler2() {
            alert('Submitted 2')
        },
        setConfirmedName() {
            this.confirmedName = this.name;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        }
    }
});

app.mount('#events');