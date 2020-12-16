# Application API
* In Vue 3, APIs that globally mutate Vue's behavior are now moved to application instances created by the new createApp method. 
  * Vue 3 에서는 `createApp` 메서드로 생성된 애플리케이션 인스턴스를 통해 Vue의 동작을 전역적으로 변경함.
  * Vue 2 에서는 `Vue` 함수로 Vue 인스턴스를 만들었었음.
* In addition, their effects are now scoped to that specific application's instance:
  * 스코프가 생김

```js
import { createApp } from 'vue'

const app = createApp({})
```
* Calling `createApp` returns an application instance. 
* This instance provides an application context. 
* The entire component tree mounted by the application instance share the same context, which provides the configurations that were previously "global" in Vue 2.x.

* In addition, since the `createApp` method returns the application instance itself, you can chain other methods after it which can be found in the following sections.
  * 인스턴스 생성 이후 다른 메서드 체이닝이 가능

## component
* Arguments:
  * {string} name
  * {Function | Object} definition (optional)
* Returns:
  * `definition` 인자를 전달하여 생성하였다면, application instance 리턴됨.
  * `definition` 인자 전달없이 생성하였다면, component definition이 리턴됨.
* Usage:
  * global component를 register 하거나 retrive 함.
  * registration은 자동으로 컴포넌트의 name을 name 파라미터의 값으로 셋팅함.
* Example
  ```js
  import { createApp } from 'vue'
  const app = createApp({})

  // register an options object
  app.component('my-component', {
      /*...*/
  })

  // retrieve a registered component
  const MyComponent = app.component('my-component')
  ```

## mount
* Arguments:
  * {Element | string} rootContainer
  * {boolean} isHydrate (optional)
* Returns:
  * The root component instance
* Usage:
  * Mounts a root component of the application instance on the provided DOM element.
* Example:
  ```html
  <body>
    <div id="my-app"></div>
  </body>
  ```

  ```js
    import { createApp } from 'vue'

    const app = createApp({})
    // do some necessary preparations
    app.mount('#my-app')
  ```
