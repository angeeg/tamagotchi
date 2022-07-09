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
    tamagotchi.hunger += 2 
    hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`
    if(tamagotchi.hunger === 10){
      clearInterval(timer)
      console.log("timer has stopped")
      alert(`Poor ${tamagotchi.name} was starved to death x_x`)
    }
  },

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep: () => {

    console.log("zzzzz");
    sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;
  },

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play: () => {
    console.log("this is so much fun!");
  },

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp: () => {
    this.age += 1;
    console.log(`${this.age}`);
  },
};

// create function that starts the game - when the game starts the timer will start counting
const startGame = () => {
  timer()
  game.increaseHunger()
  console.log('the game has begun')
}

// create a global variable for a timer to be running throughout duration of the game
const timer = () => {
  let seconds = 0
  setInterval(()=>{
    document.querySelector("#timer").innerText = `${seconds}`
    seconds++
  }, 1000)
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

