const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods : {
    addGoal() {
      if (this.enteredGoalValue !== "") {
        this.goals.push(this.enteredGoalValue);
      }
    },
    removeGoal(idx) {
      console.log(idx);
      if(idx >= 0) {
        this.goals.splice(idx, 1);
      }
    }
  }
});

app.mount('#user-goals');
