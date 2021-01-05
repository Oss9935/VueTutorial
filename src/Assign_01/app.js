const app = Vue.createApp({
    data() {
        return {
            name : "bbkim",
            age : 30,
            imgUrl : "https://v3.vuejs.org/logo.png",
        };
    },
    methods: {
        genRandNum(min=0, max=1) {
            return Math.random(min, max);
        }
    }
});

app.mount('#assignment');