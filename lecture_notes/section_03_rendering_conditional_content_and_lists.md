# 38. Module Introduction
* 조건에 따라 컨텐츠 렌더링 여부를 결정하는 방법

* 리스트 형태로 된 컨텐츠를 출력하는 방법

# 39. Understanding the Problem

<details>
<summary>Goal To achieve (RESULT) </summary>

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
    <section id="user-goals">
    <h2>My course goals</h2>
    <input type="text" />
    <button>Add Goal</button>
    <p>No goals have been added yet - please start adding some!</p>
    <ul>
        <li>Goal</li>
    </ul>
    </section>
</body>
</html>
```
</details>

* To Do
  * 사용자가 `input` 엘리먼트에 문자열을 입력하고 Add Goal 버튼을 누르면, 현재 샘플 코드 내의 `ul` 태그 위치에 사용자가 입력한 문자열을 출력
  * 입력된 컨텐츠가 없다면 `No goals have been added yet - please start adding some!` 출력
  * 입력된 컨텐츠가 있다면 입력된 내용을 `ul` 형태로 모두 출력
  * 사용자가 출력된 컨텐츠를 클릭한다면 해당 컨텐츠 삭제

# 40. Rendering Content Conditionally

<details>
<summary>index.html<summary>

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
    <section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" v-model="enteredGoalValue"/>
      <button @click="addGoal">Add Goal</button>
      <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
      <ul v-else>
        <li>Goal</li>
      </ul>
    </section>
  </body>
</html>

```
</details>

<details>
<summary>app.js<summary>

```js
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

```
</details>

# 41. v-if, v-else and v-else-if

* `v-if`, `v-else`, `v-else-if` statement의 특징은 조건에 따라 해당 엘리먼트를 DOM 내에 포함시킬지 말지에 대한 여부를 결정하는 것!

<details>
<summary>index.html<summary>

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
    <section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" v-model="enteredGoalValue"/>
      <button @click="addGoal">Add Goal</button>
      <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
      <ul v-else-if="goals.length > 0">
        <li>Goal</li>
      </ul>
    </section>
  </body>
</html>

```
</details>

<details>
<summary>app.js<summary>

```js
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

```
</details>
# 42. Using v-show Instead of v-if

# 43. Rendering List of Data

# 44. Diving Deeper into v-for

# 45. Removing List Items

# 46. List & Keys

# Assignment 05 : Conditional Content & Lists

# 47. Module Summary

# 48. Module Resources
* no description