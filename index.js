//? CODE FOR PLAYER ONE
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let playerOneDice = document.getElementsByClassName("img1")[0];
playerOneDice.src = `images/dice${randomNumber1}.png`;
//! CODE FOR PLAYER TWO
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let playerTwoDice = document.getElementsByClassName("img2")[0];
playerTwoDice.src = `images/dice${randomNumber2}.png`;
//? Accessing h1
let h1 = document.getElementsByTagName("h1")[0];

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩Player One Won!";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "player Two Won!🚩";
} else {
  h1.innerHTML = "Draw!";
}
