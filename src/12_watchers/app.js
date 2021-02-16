const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
    };
  },
  watch: {
    counter(value){
      if(value >= 50) {
        const that = this;
        console.log('timer will run after 2 sec');
        setTimeout(function(){
          that.counter = 0;
          console.log('value exceed boundary(' + value +') -> reset to zero' );
        }, 2000);        
      }
    }
  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastname === '') {
        return '';
      } 
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
      this.lastname = ''; 
    }
  }
});

app.mount('#events');
