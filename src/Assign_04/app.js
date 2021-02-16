const app = Vue.createApp({
    data() {
        return {
            cssClass : '',
            isVisable : true,
            bgColor : ''
        }
    },
    computed : {
        visableClass() {
            if(this.isVisable == false) {
                return 'hidden';
            } else {
                return 'visable';
            }
        }
    },
    methods : {
        toogleParagraph() {
            this.isVisable = !this.isVisable;
        }
    }
});

app.mount('#assignment');s