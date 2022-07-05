// create a class for tamagotchi
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
  }
  // add method to feed tamagotchi, decrement hunger once fed, or increment hunger if not fed for a certain interval of time
  feedMe() {
    console.log("Yummy thanks!");
  }

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep() {
    console.log("zzzzz");
  }

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play() {
    console.log("this is so much fun!");
  }

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp() {
    this.age += 1;
  }
}

// create an object or class for the game itself
const game = {
  // instantiate tamagotchi
  createTamagotchi: (name) => {
    const tamagotchi = new Tamagotchi(name);
    console.log(tamagotchi);
  },
};
// create a global variable for a timer to be running throughout duration of the game

// create function that starts the game - when the game starts the timer will start counting

// create form to enter name for tamagotchi
// create button to submit name

// create buttons to eat, play, and sleep - turn lights off when sleeping

game.createTamagotchi("ange");
