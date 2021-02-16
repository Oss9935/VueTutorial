const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      fullname: ''
    };
  },
  watch: {
    name(new_value, old_value) {
      console.log('watcher name() called');
      console.log('new_value : ' + new_value);
      console.log('old_value : ' + old_value);

      if(new_value === '') {
        this.fullname = '';
      } else {
        this.fullname = new_value + ' ' + this.lastname;
      }
    },
    lastname(value) {
      if(value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }
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
      this.name = '';
      this.lastname = ''; 
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
