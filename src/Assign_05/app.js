const app = Vue.createApp({
    data() {
        return {
            taskList : [],
            enteredTaskValue : "",
            isHide: false,
        };
    },
    methods : {
        addTask() {
            console.log(this.enteredTaskValue);
            if(this.enteredTaskValue !== ""){
                this.taskList.push(this.enteredTaskValue);
            } else {
                alert('Feed Your Data Plz...');
            }
        },
        changeVisableState() {
            this.isHide = !this.isHide;
        }
    }
});

app.mount('#assignment');