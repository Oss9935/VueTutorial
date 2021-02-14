const app = Vue.createApp({
    data() {
        return {
            textData : '',
            confirmedTextData : '',
        };
    },
    methods : {
        btnClickHandler() {
            alert('clicked');
        },
        keyPressedHandler(event) {
            this.textData = event.target.value;
        },
        enterPressedHandler(event) {
            this.confirmedTextData = event.target.value;
        }
    }
});

app.mount("#assignment");