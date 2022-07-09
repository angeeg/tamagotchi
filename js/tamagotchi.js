// create variables to import html elements

// stats
const hungerStat = document.querySelector("#hunger");
const sleepinessStat = document.querySelector("#sleepiness");
const boredomStat = document.querySelector("#boredom");
const ageStat = document.querySelector("#age");

//
const heading = document.querySelector("#heading");
const h5 = document.querySelector("h5");
const inputForm = document.querySelector(".name");
const inputValue = inputForm.value;

// buttons
const submitBtn = document.querySelector(".btns ");
const eatBtn = document.querySelector("#eat");
const playBtn = document.querySelector("#play");
const sleepBtn = document.querySelector("#sleep");

// create a class for tamagotchi
class Tamagotchi {
  constructor() {
    this.name = "";
    this.hunger = 9;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
  }

  // methods to display data
}
// instantiate tamagotchi
// let tamagotchiName = document.querySelector(".name").value
const tamagotchi = new Tamagotchi(inputValue);
console.log(inputValue);

// create an object or class for the game itself
const game = {
  nameTamagotchi: () => {
    // // display tamagotchi name on screen
    tamagotchi.name = inputValue;
    console.log(inputValue);
    let nameHeader = document.createElement("h1");
    nameHeader.innerText = inputValue;
    heading.appendChild(nameHeader);
    // hide input form once submit button is clicked
    h5.style.display = "none";
    inputForm.style.display = "none";
    submitBtn.style.display = "none";
    startGame();
  },

  // add method to feed tamagotchi, decrement hunger once fed, or increment hunger if not fed for a certain interval of time
  feedMe: () => {
    tamagotchi.hunger -= 2;
    console.log(`Hunger: ${tamagotchi.hunger}`);
    // if hunger reaches 0 alert "I'm too full, please feed later"
    if (tamagotchi.hunger <= 0) {
      document.querySelector("#eat").disabled = true;
      // alert(`${tamagotchi.name} seems to be very full, please feed later.`);
    }
    hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`;
  },
  // increase hunger every 15 seconds, if it reaches 10 game is over - tamagotchi dies
  increaseHunger: () => {
    tamagotchi.hunger += 1;
    hungerStat.innerHTML = `Hunger: ${tamagotchi.hunger}`;
    if (tamagotchi.hunger === 10) {
      // alert(`Poor ${tamagotchi.name} was starved to death x_x`);
    }
  },

  // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long
  goToSleep: () => {
    tamagotchi.sleepiness -= 1;
    sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;
    console.log("zzzzz");
    // let btns = document.querySelector("#submit");
    // btns.classList.toggle("nightModeBtns");
    let img = document.querySelector(".sun-pic");
    img.setAttribute("src", "./css/images/moon-clip.png");
    document.addEventListener("click", (e) => {
      console.log(e.target)
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
    sleepinessStat.innerHTML = `Sleepiness: ${tamagotchi.sleepiness}`;
    if (tamagotchi.sleepiness === 10) {
      // alert(`Poor ${tamagotchi.name} has fainted from exhaustion x_x`);
      stopTimer();
    }
  },

  // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for
  play: () => {
    tamagotchi.boredom -= 1;
    boredomStat.innerHTML = `boredom: ${tamagotchi.boredom}`;
    console.log("this is so much fun!");
  },

  increaseBoredom: () => {
    tamagotchi.boredom += 1;
    boredomStat.innerHTML = `boredom: ${tamagotchi.boredom}`;
    if (tamagotchi.boredom === 10) {
      // alert(`Poor ${tamagotchi.name} has died of boredom x_x`);
      stopTimer();
    }
  },

  // add method to increase age, have tamagotchi morph once reaching certain ages
  // evolve at 10 and 20
  ageUp: () => {
    tamagotchi.age += 1;
    ageStat.innerHTML = `Age: ${tamagotchi.age}`;
  },
};

// function to toggle page back to day time after turning to night time when clicking on sleep
const nightToDay = () => {
  document.addEventListener("click", (e) => {
    const btnClicked = sleepBtn.contains(e.target);
    if (!btnClicked) {
      let body = document.querySelector("body");
      body.classList.toggle("dayMode");
      let img = document.querySelector(".sun-pic");
      img.setAttribute("src", "./css/images/sun-clip.png");
    }
  });
};

// create function that starts the game - when the game starts the timer will start counting
const startGame = () => {
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
    document.querySelector("#timer").innerText = `${sec}`;
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

function stopTimer() {
  clearInterval(timer);
  console.log("timer has stopped");
}

// add eventListeners to buttons to start, eat, play, and sleep - turn lights off when sleeping

submitBtn.addEventListener("click", game.nameTamagotchi);
eatBtn.addEventListener("click", game.feedMe);
playBtn.addEventListener("click", game.play);
sleepBtn.addEventListener("click", game.goToSleep);

// startGame();
