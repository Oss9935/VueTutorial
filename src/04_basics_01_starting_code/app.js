const app = Vue.createApp({
    data(){
        return {      
            courseGoalA : "Finish the course and learn Vue",
            courseGoalB : "Master Vue and build amazing apps!",
            vueLink: 'https://vuejs.org/',
            htmlTest: "<h2>test</h2>"
        };
    },
    methods: {
        outputGoal(){
            console.log(this)
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');