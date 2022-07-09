// create variables to import html elements

// stats
const hungerStat = document.querySelector("#hunger-col");
const sleepinessStat = document.querySelector("#sleepiness-col");
const boredomStat = document.querySelector("#boredom-col");
const ageStat = document.querySelector("h2");
const heading = document.querySelector("#heading");
const h2 = document.querySelector("#name");
const h4 = document.querySelector("h4");
const inputForm = document.querySelector("#input-name");
const inputValue = inputForm.value;

// buttons
const submitBtn = document.querySelector(".btns ");
const eatBtn = document.querySelector("#eat");
const playBtn = document.querySelector("#play");
const sleepBtn = document.querySelector("#sleep");

// create a class for tamagotchi
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 4;
    this.sleepiness = 2;
    this.boredom = 4;
    this.age = 0;
  }

  // methods to display data
  getHunger() {
    hungerStat.innerHTML = `${tamagotchi.hunger}`;
  }
  getBoredom() {
    boredomStat.innerHTML = `${tamagotchi.boredom}`;
  }
  getSleepiness() {
    sleepinessStat.innerHTML = `${tamagotchi.sleepiness}`;
  }
}
// instantiate tamagotchi


// console.log(tamagotchi.name);

// create an object or class for the game itself
const game = {
  nameTamagotchi: () => {
    console.log(inputValue)
    // // display tamagotchi name on screen
    let tamagotchiName = document.getElementById("input-name").value
    // console.log(tamagotchiName);
    const tamagotchi = new Tamagotchi(tamagotchiName);
  //  console.log(tamagotchi)
  const h2Name = document.createElement("h2")
  h2Name.innerText = tamagotchi.name
    heading.appendChild(h2Name);
    // hide input form once submit button is clicked
    h4.style.display = "none";
    inputForm.style.display = "none";
    submitBtn.style.display = "none";
    console.log(inputValue);
    startGame();
    console.log("game starts here");
  },

  // add method to feed tamagotchi, decrement hunger once fed, or increment hunger if not fed for a certain interval of time
  feedMe: () => {
    tamagotchi.hunger -= 2;
    // console.log(`Hunger: ${tamagotchi.hunger}`);
    // if hunger reaches 0 alert "I'm too full, please feed later"
    if (tamagotchi.hunger <= 0) {
      document.querySelector("#eat").disabled = true;
      alert(`${tamagotchi.name} seems to be very full, please feed later.`);
    }
    hungerStat.innerHTML = `${tamagotchi.hunger}`;
  },
  // increase hunger every 15 seconds, if it reaches 10 game is over - tamagotchi dies
  increaseHunger: () => {
    tamagotchi.hunger += 1;
    hungerStat.innerHTML = `${tamagotchi.hunger}`;
    if (tamagotchi.hunger === 10) {
      alert(`Poor ${tamagotchi.name} was starved to death x_x`);
    }
  },

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep: () => {
    tamagotchi.sleepiness -= 1;
    sleepinessStat.innerHTML = `${tamagotchi.sleepiness}`;
    console.log("zzzzz");
    // let btns = document.querySelector("#submit");
    // btns.classList.toggle("nightModeBtns");
    let img = document.querySelector(".sun-pic");
    img.setAttribute("src", "./css/images/moon-clip.png");
    document.addEventListener("click", (e) => {
      console.log(e.target);
      const btnClicked = sleepBtn.contains(e.target);
      let body = document.querySelector("body");
      body.classList.toggle("nightMode");
      if (!btnClicked) {
        let body = document.querySelector("body");
        body.classList.toggle("dayMode");
        let img = document.querySelector(".sun-pic");
        img.setAttribute("src", "./css/images/sun-clip.png");
      }
    });
  },

  increaseSleepiness: () => {
    tamagotchi.sleepiness += 1;
    sleepinessStat.innerHTML = `${tamagotchi.sleepiness}`;
    if (tamagotchi.sleepiness === 10) {
      // alert(`Poor ${tamagotchi.name} has fainted from exhaustion x_x`);
      stopTimer();
    }
  },

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play: () => {
    tamagotchi.boredom -= 1;
    boredomStat.innerHTML = `${tamagotchi.boredom}`;
    console.log("this is so much fun!");
  },

  increaseBoredom: () => {
    tamagotchi.boredom += 1;
    boredomStat.innerHTML = `${tamagotchi.boredom}`;
    if (tamagotchi.boredom === 10) {
      stopTimer();
      alert(`Poor ${tamagotchi.name} has died of boredom x_x`);
      
    }
  },

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp: () => {
    tamagotchi.age += 1;
    ageStat.innerHTML = `Age ${tamagotchi.age}`;
    if (tamagotchi.age === 3) {
      let sprite = document.querySelector(".sprite-img");
      sprite.classList.toggle(".evolved-sprite-img");
    }
  },
};

// create function that starts the game - when the game starts the timer will start counting
const startGame = () => {
  tamagotchi.getHunger();
  tamagotchi.getBoredom();
  tamagotchi.getSleepiness();
  timer();
  console.log("the game has begun");
};

// create a global variable for a timer to be running throughout duration of the game
const timer = () => {
  let sec = 1;
  setInterval(() => {
    if (sec % 5 === 0) {
      game.increaseHunger();
      game.increaseSleepiness();
      game.increaseBoredom();
    }
    if (sec % 10 === 0) {
      game.ageUp();
      console.log(tamagotchi.age);
    }
    document.querySelector("#timer").innerText = `Time: ${sec} seconds`;
    sec++;
  }, 1000);
  // stop timer not invoking ..
  // if (
  //   tamagotchi.hunger === 10 ||
  //   tamagotchi.sleepiness === 10 ||
  //   tamagotchi.boredom === 10
  // ) {
  //   stopTimer();
  // }
};

const stopTimer = () => {
  clearInterval(timer);
  console.log("timer has stopped - game over");
}

// add eventListeners to buttons to start, eat, play, and sleep - turn lights off when sleeping
submitBtn.addEventListener("click", game.nameTamagotchi);
eatBtn.addEventListener("click", game.feedMe);
playBtn.addEventListener("click", game.play);
sleepBtn.addEventListener("click", game.goToSleep);

// startGame();
