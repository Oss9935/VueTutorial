# 49.Moduele Introduction

* no description

# 50. Project Setup & First Methods

<details>
<summary>code</summary>

* index.html

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
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health : {{ monsterHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health : {{ playerHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value"></div>
        </div>
      </section>
      <section id="controls">
        <button @click="attackMonster">ATTACK</button>
        <button>SPECIAL ATTACK</button>
        <button>HEAL</button>
        <button>SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <ul></ul>
      </section>
    </div>
  </body>
</html>

```

* app.js

```js
/*
    Description.    methods for get random integer number between min, max value.
 
    @param  {integer}   min
    @param  {integer}   max

    @return {integer}   randomNum
*/
function getRandomValue(min, max) {
    
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth : 100,
        };
    },
    methods : {
        attackMonster() {
            const minDamage = 5,  maxDamage = 12;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.monsterHealth -= randomDamage;
            this.attackPlayer();
        },
        attackPlayer() {
            const minDamage = 8, maxDamage = 15;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.playerHealth -= randomDamage;
        }
    }
});

app.mount('#game')
```


</details>

# 51. Updating the Health Bars

<details>
<summary>code</summary>

* index.html

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
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health : {{ monsterHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterBarStyles"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health : {{ playerHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="playerBarStyles"></div>
        </div>
      </section>
      <section id="controls">
        <button @click="attackMonster">ATTACK</button>
        <button>SPECIAL ATTACK</button>
        <button>HEAL</button>
        <button>SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <ul></ul>
      </section>
    </div>
  </body>
</html>

```

* app.js

```js
/*
    Description.    methods for get random integer number between min, max value.
 
    @param  {integer}   min
    @param  {integer}   max

    @return {integer}   randomNum
*/
function getRandomValue(min, max) {
    
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth : 100,
        };
    },
    computed: {
        monsterBarStyles() {
            let monsterHealth = this.monsterHealth;

            if(monsterHealth <= 0) {
                monsterHealth = 0;
            }

            return {
                width : monsterHealth + '%'
            };
        },
        playerBarStyles() {
            let playerHealth = this.playerHealth;

            if(playerHealth <= 0) {
                playerHealth = 0;
            }

            return {
                width : playerHealth + '%'
            };
        }
    },
    methods : {
        attackMonster() {
            const minDamage = 5,  maxDamage = 12;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.monsterHealth -= randomDamage;
            this.attackPlayer();
        },
        attackPlayer() {
            const minDamage = 8, maxDamage = 15;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.playerHealth -= randomDamage;
        }
    }
});

app.mount('#game')
```
</details>


# 52. Adding a "Special Attack"

<details>
<summary>code</summary>

* index.html

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
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health : {{ monsterHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterBarStyles"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health : {{ playerHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="playerBarStyles"></div>
        </div>
      </section>
      <section id="controls">
        <button @click="attackMonster">ATTACK</button>
        <button :disabled="isImpossibleToSpecialAttack" @click="specialAttackMonster">SPECIAL ATTACK</button>
        <button>HEAL</button>
        <button>SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log - Round({{currentRound}})</h2>
        <ul></ul>
      </section>
    </div>
  </body>
</html>

```

* app.js

```js
/*
    Description.    methods for get random integer number between min, max value.
 
    @param  {integer}   min
    @param  {integer}   max

    @return {integer}   randomNum
*/
function getRandomValue(min, max) {
    
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 1,
            specialAttackDuration : 3,
            specialAttackCharging : 3,
        };
    },
    computed: {
        monsterBarStyles() {
            let monsterHealth = this.monsterHealth;

            if(monsterHealth <= 0) {
                monsterHealth = 0;
            }

            return {
                width : monsterHealth + '%'
            };
        },
        playerBarStyles() {
            let playerHealth = this.playerHealth;

            if(playerHealth <= 0) {
                playerHealth = 0;
            }

            return {
                width : playerHealth + '%'
            };
        },
        isImpossibleToSpecialAttack() {
            if(this.specialAttackCharging == this.specialAttackDuration) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods : {
        attackMonster() {
            const minDamage = 5,  maxDamage = 12;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.monsterHealth -= randomDamage;
            this.attackPlayer();
            this.currentRound++;
            this.specialAttackCharging++;
        },
        attackPlayer() {
            const minDamage = 8, maxDamage = 15;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.playerHealth -= randomDamage;
        },
        specialAttackMonster() {
            const randomDamage = getRandomValue(10, 25);

            if (this.specialAttackCharging == this.specialAttackDuration){
                this.currentRound++;
                this.specialAttackCharging = 0;
                this.monsterHealth -= randomDamage;
                this.attackPlayer();
            } else {
                alert('Attack Failed!\nCharging Power ('+ 
                this.specialAttackCharging % this.specialAttackDuration + '/' + 
                this.specialAttackDuration +')');
            }
            
        }
    }
});

app.mount('#game')
```
</details>

# 53. Adding a "Heal" Functionality

<details>
<summary>code</summary>

* index.html

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
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health : {{ monsterHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterBarStyles"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health : {{ playerHealth }}</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="playerBarStyles"></div>
        </div>
      </section>
      <section id="controls">
        <button @click="attackMonster">ATTACK</button>
        <button :disabled="isImpossibleToSpecialAttack" @click="specialAttackMonster">SPECIAL ATTACK</button>
        <button :disabled="isFullHealth" @click="healPlayer">HEAL</button>
        <button>SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log - Round({{currentRound}})</h2>
        <ul></ul>
      </section>
    </div>
  </body>
</html>

```

* app.js

```js
/*
    Description.    methods for get random integer number between min, max value.
 
    @param  {integer}   min
    @param  {integer}   max

    @return {integer}   randomNum
*/
function getRandomValue(min, max) {
    
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 1,
            specialAttackDuration : 3,
            specialAttackCharging : 3,
        };
    },
    computed: {
        monsterBarStyles() {
            let monsterHealth = this.monsterHealth;

            if(monsterHealth <= 0) {
                monsterHealth = 0;
            }

            return {
                width : monsterHealth + '%'
            };
        },
        playerBarStyles() {
            let playerHealth = this.playerHealth;

            if(playerHealth <= 0) {
                playerHealth = 0;
            }

            return {
                width : playerHealth + '%'
            };
        },
        isImpossibleToSpecialAttack() {
            if(this.specialAttackCharging >= this.specialAttackDuration) {
                return false;
            } else {
                return true;
            }
        },
        isFullHealth() {
            if(this.playerHealth == 100) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods : {
        attackMonster() {
            const minDamage = 5,  maxDamage = 12;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.monsterHealth -= randomDamage;
            this.attackPlayer();
            this.currentRound++;
            this.specialAttackCharging++;
        },
        attackPlayer() {
            const minDamage = 8, maxDamage = 15;
            const randomDamage = getRandomValue(minDamage, maxDamage);

            this.playerHealth -= randomDamage;
        },
        specialAttackMonster() {
            const randomDamage = getRandomValue(10, 25);

            if (this.specialAttackCharging >= this.specialAttackDuration){
                this.currentRound++;
                this.specialAttackCharging = 0;
                this.monsterHealth -= randomDamage;
                this.attackPlayer();
            } else {
                alert('Attack Failed!\nCharging Power ('+ 
                this.specialAttackCharging % this.specialAttackDuration + '/' + 
                this.specialAttackDuration +')');
            }
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.currentRound++;
            this.specialAttackCharging++;
        }
    }
});

app.mount('#game')
```
</details>

# 54. Adding a "Game Over" Screen

<details>
<summary>code</summary>

* index.html

```html

```

* app.js

```js

```
</details>

# 55. Finishing the Core Functionality

<details>
<summary>code</summary>

* index.html

```html

```

* app.js

```js

```
</details>

# 56. Adding a Battle Log

<details>
<summary>code</summary>

* index.html

```html

```

* app.js

```js

```
</details>

# 57. Module Resources

* no description