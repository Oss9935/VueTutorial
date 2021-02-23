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
            winner : null,
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
    watch : {
        playerHealth(value) {
            // Draw
            if(value <= 0 && this.mosterHealth <= 0) {
                this.winner = 'none'
            } 
            // Player Lost
            else if (value <=0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            // Draw
            if(value <=0 && this.playerhealth <= 0) {
                this.winner = 'none'
            }

            // Monster Lost
            else if (value <= 0) {
                this.winner = 'player'
            }
        },
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