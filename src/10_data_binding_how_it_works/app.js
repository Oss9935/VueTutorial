const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    },
    outputFullName() {
      if(this.name === '') { 
        return '';
      }
      return this.name + ' Kim';
    }
  }
});

app.mount('#events');
