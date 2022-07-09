// create a class for tamagotchi
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 6;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
  }
}
// instantiate tamagotchi
const tamagotchi = new Tamagotchi("Ange");
console.log(tamagotchi);

// create an object or class for the game itself
const game = {
  // add method to feed tamagotchi, decrement hunger once fed, or increment hunger if not fed for a certain interval of time
  feedMe: () => {
    tamagotchi.hunger -= 2;
    console.log(`Hunger: ${tamagotchi.hunger}`);
    // if hunger reaches 0 alert "I'm too full, please feed later"
    if(tamagotchi.hunger <= 0){
      document.querySelector("#eat").disabled = true
      alert(`${tamagotchi.name} seems to be very full, please feed later.`)
    }
    hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`
  },
  // increase hunger every 15 seconds, if it reaches 10 game is over - tamagotchi dies
  increaseHunger: () => {
    tamagotchi.hunger += 1
    hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`
    if(tamagotchi.hunger === 10){
      clearInterval(timer)
      alert(`Poor ${tamagotchi.name} was starved to death x_x`)
    }
  },

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep: () => {
    tamagotchi.sleepiness -= 1
    sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;
    console.log("zzzzz");
  },

  increaseSleepiness: () => {
    tamagotchi.sleepiness += 1 
    sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`
    if(tamagotchi.sleepiness === 10){
      alert(`Poor ${tamagotchi.name} has fainted from exhaustion x_x`)
      stopTimer()
      
    }
  },

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play: () => {
    tamagotchi.boredom -= 1
    boredomStat.innerHTML = `boredom: ${tamagotchi.boredom}`
    console.log("this is so much fun!");
  },

  increaseBoredom: () => {
    tamagotchi.boredom += 1 
    boredomStat.innerHTML = `boredom: ${tamagotchi.boredom}`
    if(tamagotchi.boredom === 10){
      alert(`Poor ${tamagotchi.name} has died of boredom x_x`)
      stopTimer()
      
    }
  },

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp: () => {
    tamagotchi.age += 1;
    ageStat.innerHTML = `Age: ${tamagotchi.age}`
  },
};

// create function that starts the game - when the game starts the timer will start counting
const startGame = () => {
  timer()
  console.log('the game has begun')
}

// create a global variable for a timer to be running throughout duration of the game
function timer() {
  let sec = 1
  setInterval(()=>{
    if(sec % 5 === 0){
      game.increaseHunger()
      game.increaseSleepiness()
      game.increaseBoredom()
    }
    if(sec % 10 === 0){
      game.ageUp()
      console.log(tamagotchi.age)
    }
    
    document.querySelector("#timer").innerText = `${sec}`
    sec++
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
  console.log("timer has stopped")
}

// create form to enter name for tamagotchi

// create button to submit name

// display stats on the window
let hungerStat = document.querySelector("#hunger");
hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`
let sleepinessStat = document.querySelector("#sleepiness");
sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;
let boredomStat = document.querySelector("#boredom");
boredomStat.innerHTML = `Boredom: ${tamagotchi.boredom}`;
let ageStat = document.querySelector("#age");
ageStat.innerHTML = `Age: ${tamagotchi.age}`;



// add eventListeners to buttons to start, eat, play, and sleep - turn lights off when sleeping
// const startBtn = document.querySelector("#start");
// startBtn.addEventListener("click", startGame());
const eatBtn = document.querySelector("#eat");
eatBtn.addEventListener("click", game.feedMe);
const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", game.play);
const sleepBtn = document.querySelector("#sleep");
sleepBtn.addEventListener("click", game.goToSleep);


startGame()

