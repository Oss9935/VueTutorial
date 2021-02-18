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
    }
  }
});

app.mount('#user-goals');
