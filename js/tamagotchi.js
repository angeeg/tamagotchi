// create a class for tamagotchi 
class Tamagotchi{
    constructor(name){
        this.name = name 
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
    // add method to feed tamagotchi, decrement hunger once fed, or increment hunger if not fed for a certain interval of time 
    feedMe(){
        console.log('Yummy thanks!')
    }

    // add method to put tamagotchi to sleep, decrement sleepiness once it goes to sleep, or increment sleepiness if awake for too long 
    goToSleep(){
        console.log('zzzzz')
    }

    // add method to play with tamagotchi, decrement boredom once played with, increment boredom if neglected for 
    play(){ 
        console.log('this is so much fun!')
    }

    // add method to increase age
    ageUp(){
        this.age += 1
    }
}

// create a class for the game itself 

// create a global variable for a timer to be running throughout duration of the game 
