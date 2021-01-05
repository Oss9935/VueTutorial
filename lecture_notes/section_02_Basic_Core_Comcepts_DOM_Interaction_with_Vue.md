# 12. Module Introduction

* What we will learn:
  * How exactly Vue interact with HTML
    * Vue + HTML = Templates
  * Outputting Dynamic Content
  * Reacting to User Input 

# 13. Creating and Connecting Vue App Instance

- Vue를 html 코드에 연결하는 방법에 대해 배워보자!

1. `Vue.createApp()`으로 Vue 앱 인스턴스 만들고

2. HTML에서 어느 부분이 Vue에 의해 제어될지 `app.mount('css-selector')`를 통해 알려줌

3. `Vue.createApp()`에 자바스크립트 객체를 넣어줌으로서 HTML을 어떻게 제어할지 설정함

  * 한가지 주요 옵션은 `data` 설정
  * `data` 키에는 함수를 넣어줘야함(function as a value)
    * `data : function(){}`
    * `data() {}`
  * `data` 키에 등록된 함수는 "반드시" object를 리턴해야 함
    * 리턴되는 object를 통해 Vue 앱이 html을 어떻게 제어할지 결정

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p></p>
    </section>
  </body>
</html>
```


# 14. Interpolation and Data Binding

* Vue 앱이 컨트롤하는 HTML에서 데이터를 출력하기 위한 특별한 syntax가 있음.
  * Vue가 내부적으로 하는 일?
    * HTML 코드를 스캔
    * Vue에서 쓰는 syntax가 있는지 확인

* Interpolation 이란? : 뇌피셜로 짐작해보면 단어 뜻 그 자체 대로 두 pole(점)을 이어 주는 느낌. 여기서 pole이 데이터가 될 듯
  * `{{ }}` 형태로 쓰면 됨


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
    </section>
  </body>
</html>
```

```js
const app = Vue.createApp({
  data(){
    return {
      courseGoal : "Finish the course and learn Vue!"
    };
  }
});

app.mount('#user-goal')
```

# 15. Binding Attributes with the "v-bind" Directive
* v-bind 디렉티브의 필요성
  * HTML 콘텐츠에 대한 data bind는 data interpolation `{{...}}`을 활용하면 간단하게 처리할 수 있음.
  * 하지만, Vue 앱에서 관리하는 데이터를 통해 HTML 태그의 attribute를 동적으로 제어하고 싶다면 어떻게 해야할까?

  ![html_format](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

  * Vue에서는 HTML attribute를 제어하기 위한 syntax로 v-bind 디렉티브를 제공함
  * v-bine 디렉티브는 HTML 엘리먼트 중 태그의 attribte를 Vue 앱에서 관리하는 데이터와 bind 하기 위한 명령어

* v-bind 디렉티브의 활용 방법
  * HTML
    ```html
    <p>Learn More <a href="https://vuejs.org/">about Vue</a>.</p>
    ```
  * Vue
    ```html
    <p>Learn More <a v-bind:href="vueLink">about Vue</a>.</p>
    ```

# 16. Understanding "methods" in Vue Apps
* Vue 앱이 HTML 제어를 위해 활용하는 data 프로퍼티는 key as function의 형태인 반면
* methods는 object를 key로 함.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ outputGoal() }}</p>
    </section>
  </body>
</html>
```

```js
const app = Vue.createApp({
  data(){
    return {
      courseGoal : "Finish the course and learn Vue!"
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});

app.mount('#user-goal')
```

# 17. Working with Data inside of a Vue App
* Vue 앱은 HTML을 제어하기 위한 설정 object를 `createApp()` 메소드의 전달인자로 전달한다.
* 이 때, 해당 object의 설정에는 대표적으로 data property(function as a value), methods property 등이 있다.
* 근데 method에서 data의 property에 접근하려면 어떻게 해야할까?
  * 답은 바로 `this` 키워드를 사용하는 것이다.
  * Vue는 `Vue.createApp({...})`에서 전달된 object 내의 함수 형태인 data property의 리턴 값인 object를 Vue 앱 생성 시, Vue의 내부적인 동작을 통해 아래 그림처럼 프록시 object 형태로 만드는 듯! 
  * 이에 따라 data property의 리턴 값인 object, 그리고 methods property에 등록된 object 들이 Vue 앱 생성 시 만들어 진 프록시 object에 등록되기 때문에 `this` 키워드로 접근이 가능한 듯!
    * 이부분은 내가 아직 ECMAScript 문법이나 용례에 대하여 잘 몰라서 확실하지는 않기 때문에, 나중에 공부 더 해보고 다시 한번 생각해봐야겠다.
  
![data_method_this](../img/data_method_this.png)


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ outputGoal() }}</p>
    </section>
  </body>
</html>
```

```js
const app = Vue.createApp({
  data(){
    return {
      courseGoalA : "Finish the course and learn Vue",
      courseGoalB : "Master Vue and build amazing apps!",
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal')
```

# 18. Outputting Raw HTML Content with v-html
* 필요성
  * 말 그대로 Vue 앱에서 관리하는 data를 HTML에서 출력함에 있어서, html 태그가 데이터 내에 포함되어 있으면
  * XSS 등의 보안 문제 등이 발생 가능할 수 있기 때문에, 이러한 html 출력과 관련된 directive를 별개의 syntax로 제공함 

* 사용법
  ```html
  <p v-html="outputGoal()"></p>
  ```

# 19. A - First Summary

# Assign1 : Time to Pratice : Data Binding
* [link_assign1]("../src/Assign01")

# 20. Understanding Event Binding
* 모던 웹을 구성하는데 있어 필수 요소인 사용자의 입력과 이벤트를 Vue 앱에서 처리하는 방법에 대해 배움

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button>Add</button>
      <button>Remove</button>
      <p>Result: {{ counter }}</p>
    </section>
  </body>
</html>
```

```js
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');
```

# 21. Events & Methods

# 22. Working with Event Arguments

# 23. Using the Native Event Object

# 24. Exploring Event Modifiers

# 25. Locking Content with v-once

# Assign2 : Time to Practice : Event Binding

# 26. Data Binding + Event Binding = Two-Way Binding

# 27. Methods used for Data Binding: How It Works

# 28. Introducing Computed Properties

# 29. Working with Watchers

# 30. Methods vs Computed Properties vs Watchers

# 31. v-bind and v-on Shorthands

# Assigin 3 : Time to Practice: Reactivity

# 32. Dynamic Styling with inline Styles

# 33. Adding CSS Classes Dynamically

# 34. Classes & Computed Properties

# 35. Dynamic Classes: Array Syntax

# Assign 4 : Time to Practice : Dynamic Styling

# 36. Module Summary

# Module Resources