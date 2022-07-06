// create a class for tamagotchi
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
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
  },

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep() {
    console.log("zzzzz");
  },

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play() {
    console.log("this is so much fun!");
  },

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp() {
    this.age += 1;
    console.log(`${this.age}`);
  },
};

// create a global variable for a timer to be running throughout duration of the game

// create function that starts the game - when the game starts the timer will start counting

// create form to enter name for tamagotchi

// create button to submit name

// display stats on the window
let hungerStat = document.querySelector("#hunger");
hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`;

let sleepinessStat = document.querySelector("#sleepiness");
sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;

let boredomStat = document.querySelector("#boredom");
boredomStat.innerHTML = `Boredom: ${tamagotchi.boredom}`;

let ageStat = document.querySelector("#age");
ageStat.innerHTML = `Age: ${tamagotchi.age}`;



// add function to buttons to eat, play, and sleep - turn lights off when sleeping
let eatBtn = document.querySelector("#eat");
eatBtn.addEventListener("click", game.feedMe );



