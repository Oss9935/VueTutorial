let clickHandler = function(event) {
  console.log("click handler called : ", event);
}


const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');

/* Vanilla JS - queryselector*/
let btns_1 = document.getElementsByTagName('button');
for (let btn of btns_1) {
  btn.addEventListener('click', clickHandler);
}

/* Vanilla JS - queryselector*/
let btns_2 = document.querySelectorAll('button');
for (let btn of btns_2) {
  btn.addEventListener('click', clickHandler);
}

/* JQuery */
let $btns_3 = document.querySelectorAll('button');
$btns_3.forEach($btn => $btn.addEventListener('click', clickHandler));

