const app = Vue.createApp({
    data() {
        return {
            result : 0,
            boundary : 0
        };
    },
    computed: {
        printMsg(){
            if(this.result < this.boundary) {
                return 'Not there yet';
            } else if(this.result > this.boundary) {
                return 'Too Much...';
            } else {
                return 'Exact';
            }
        }
    },
    watch: {
        result(new_value, old_value){
            if(this.boundary == new_value) {
                const that = this;
                console.log('timer triggered. reset result after 5 sec');
                setTimeout(function(){    
                    console.log('reset result to zero...');
                    that.result = 0;
                }, 5000);
            }
        },
    },
    methods: {
        add(num){
            this.result += num;
        },
        resetResult(){
            this.result = 0;
        }
    }
});

app.mount('#assignment');