const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // Hacky~~ : Input 엘리먼트의 value는 지워지지만, 
      // 지워진 값이 Vue app의 name 데이터에 반영이 안됨
      //document.querySelector('input').value = '';

      // To use Vue Feature
      this.name = '';
    }
  }
});

app.mount('#events');
