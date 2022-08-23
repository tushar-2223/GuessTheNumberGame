let computerGuess;
let userGuess = [];
let updateline = document.getElementById("updateline");
let userNumberupdate = document.getElementById("inputBox");
// onload
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newgamebutton").style.display = "none";
    document.getElementById("gamearea").style.display = "none";
};

// gamearea
const startGame = () => {
    document.getElementById("welcomescreen").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
    document.getElementById("newgamebutton").style.display = "none";
}

//start new game
const startNewGame = () => {
    document.getElementById("newgamebutton").style.display = "block";
    userNumberupdate.setAttribute("disabled", true);
};
//reload the page after click newgame (startNewGame())

const newGameBegin = () => {
    window.location.reload();
}

//main logic
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber]   /*...first enter value,after enter value*/
    document.getElementById("guesses").innerHTML = userGuess;
    

    // check the value is high or low
    if(userGuess.length < maxGuess)
    {
        if (userNumber > computerGuess) {
            updateline.innerHTML = "Your guess is High😲"
            userNumberupdate.value = "";
        } else if (userNumber < computerGuess) {
            updateline.innerHTML = "Your guess is low😑"
            userNumberupdate.value = "";
        } else {
            updateline.innerHTML = "IT's Correct😃"
            userNumberupdate.value = "";
            startNewGame();
        }
    }
    else
    {
        if (userNumber > computerGuess) {
            updateline.innerHTML = `You Loose!! correct no was ${computerGuess}`;
            userNumberupdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            updateline.innerHTML = `You Loose!! correct no was ${computerGuess}`;
            userNumberupdate.value = "";
            startNewGame();
        } else {
            updateline.innerHTML = "IT's Correct😃"
            userNumberupdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};


const easyMode = () => {
    maxGuess = 10;
    startGame();
};
const hardMode = () => {
    maxGuess = 5;
    startGame();
};

