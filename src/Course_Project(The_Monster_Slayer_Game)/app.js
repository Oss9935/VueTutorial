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