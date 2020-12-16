# 1. Welcome to the Course

* no details

# 2. What is Vue.js?

* What is Vue.js (or just "Vue")

    > Vue.js(vue)는 interactive, reactive web frontend를 보다 쉽게 ​​구축 할 수 있는 JavasScript 프레임워크.

    * reactive ?
      * 사용자 입력에 반응(react)하고 화면을 동적으로 업데이트 할 수 있는 앱. (예 : show overlays, input validation errors)


# 3. Different Ways of Using Vue

1. Vue can be used to control parts of HTML pages or entire pages.
   * Widget approach on a multi-page application.
   * (Some) pages are still rendered on and served by a backend server.


2. Vue can also be used to control the entire fronted of a web application
   * Single-Page-Application(SPA) approach.
   * Server only sends one HTML page, thereafter, Vue takes over and controls the UI.


# 4. Exploring Vue Alternatives

* React.js

* Angular.js

# 5. Building A First App With Just Javascript

* Goal : html 내 text 타입 input 태그에 내용을 입력하고 `Add Goal` 버튼을 누르면 해당 텍스트가 하단의 li 태그 리스트에 추가됨.

* project skeleton file : `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A First App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="app">
      <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" />
        <button>Add Goal</button>
      </div>
      <ul>
        <li>Test</li>
      </ul>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

* app.js
```js
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);
```

# 6. Re-building the App with Vue

* How to Import Vue?

1. CDN
    ```js
    <script src="https://unpkg.com/vue@next"></script>
    ```

* `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A First App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="app">
      <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" v-model="enteredValue" />
        <button v-on:click="addGoal">Add Goal</button>
      </div>
      <ul>
        <li v-for="goal in goals">{{ goal }}</li>
      </ul>
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

* Vue.createApp()
  * `const app = Vue.createApp({})`
  
  * Returns an application instance which provides an application context. 
  
  * The entire component tree mounted by the application instance share the same context.

  * createApp()은 Vue 앱을 configure 하기 위한 javascript object를 인자로 받음

    * configure? : 해당 Vue 앱에서 어떤 데이터를 사용할지 등등에 대한 설정

    * data
      * Vue 인스턴스가 생성될 때 `data` 객체에 있는 모든 속성이 Vue의 반응형 시스템에 추가됩니다. 각 속성값이 변경될 때 뷰가 “반응”하여 새로운 값과 일치하도록 업데이트됩니다.

      * `data: function( ) { }`
    
      * `data( ){ }`

* app.js
```js
Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');
```


# 7. Vue vs "Vanilla Javascript"

* no details


# 8. Setting Up the Course Development Environment

* no details

# 9. Course Outline & What's in The Course

* Basics
  * Core Syntax, Templates, Directives, Data, Methods, Computed Properties, Watchers

* Intermediate
  * Components, Componen Communication, Behind the Scenes, Forms, Http, Routing, Animations

* Advanced
  * Vuex, Authentication, Deployment & Optimizations, Composition API, Re-using Code

# 10. How To Get The Most Out Of This Course

* no details

# 11. Module Resources

* no details