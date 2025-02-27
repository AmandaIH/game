window.addEventListener("load", start);

//erklærer variable
let my_points;
let my_lives;
let rndNum;

//erklærer konstanter
const karaage_container = document.querySelector("#karaage_container");
const karaage_sprite = document.querySelector("#karaage_sprite");
const gyoza_container = document.querySelector("#gyoza_container");
const gyoza_sprite = document.querySelector("#gyoza_sprite");
const rice_container = document.querySelector("#rice_container");
const rice_sprite = document.querySelector("#rice_sprite");
const sushi_container = document.querySelector("#sushi_container");
const sushi_sprite = document.querySelector("#sushi_sprite");

const cupcake_container = document.querySelector("#cupcake_container");
const cupcake_sprite = document.querySelector("#cupcake_sprite");
const cake_container = document.querySelector("#cake_container");
const cake_sprite = document.querySelector("#cake_sprite");
const gummibear_container = document.querySelector("#gummibear_container");
const gummibear_sprite = document.querySelector("#gummibear_sprite");
const chocolate_container = document.querySelector("#chocolate_container");
const chocolate_sprite = document.querySelector("#chocolate_sprite");

const soundOn = document.querySelector("#soundOn");
const soundOff = document.querySelector("#soundOff");
const background_sound = document.querySelector("#background_sound");

//lyde
document.querySelector("#karaage_sprite").addEventListener("click", playBite);
document.querySelector("#gyoza_sprite").addEventListener("click", playBite);
document.querySelector("#rice_sprite").addEventListener("click", playBite);
document.querySelector("#sushi_sprite").addEventListener("click", playBite);

document.querySelector("#cupcake_sprite").addEventListener("click", playUgh);
document.querySelector("#cake_sprite").addEventListener("click", playUgh);
document.querySelector("#gummibear_sprite").addEventListener("click", playUgh);
document.querySelector("#chocolate_sprite").addEventListener("click", playUgh);

soundOn.addEventListener("click", play_bgsound);
soundOff.addEventListener("click", stop_bgsound);

document.querySelector("#play").addEventListener("click", startGame);

function start() {
  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#play").addEventListener("click", startGame);
}

function play_bgsound() {
  console.log("play background sound");
  background_sound.play();
  background_sound.volume = 0.2;
  background_sound.addEventListener("ended", restartSound);
}

function stop_bgsound() {
  console.log("stop background sound");
  background_sound.removeEventListener("ended", restartSound);
  background_sound.pause();
  background_sound.currentTime = 0;
}

function restartSound() {
  background_sound.play();
}

function startGame() {
  console.log("startGame");
  //gem alle skærme
  hideAllScreens();

  //nulstil liv og point
  my_points = 0;
  my_lives = 3;
  //opdater liv og point på siden
  document.querySelector("#point").textContent = my_points;
  document.querySelector("#life").textContent = my_lives;

  //starter timer
  document.querySelector("#timeglas_sand").classList.add("timer");
  //går til endGame
  document
    .querySelector("#timeglas_sand")
    .addEventListener("animationend", endGame);

  background_sound.play();

  //lav random pos til elementer
  rndNum = generateRandomNumber(10);
  let rndFallPos = "fallpos" + rndNum;
  karaage_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  gyoza_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  rice_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  sushi_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  cupcake_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  cake_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  gummibear_container.classList.add(rndFallPos);

  rndNum = generateRandomNumber(10);
  rndFallPos = "fallpos" + rndNum;
  chocolate_container.classList.add(rndFallPos);

  //lav random delay til elementer
  rndNum = generateRandomNumber(3);
  let rndDelay = "delay" + rndNum;
  karaage_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  gyoza_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  rice_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  sushi_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  cupcake_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  cake_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  gummibear_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  chocolate_container.classList.add(rndDelay);

  //lav random speed
  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  karaage_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  gyoza_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  rice_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  sushi_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  cupcake_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  cake_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  gummibear_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  chocolate_container.classList.add(rndSpeed);

  //start anim på elementer
  karaage_container.classList.add("fall");
  gyoza_container.classList.add("fall");
  rice_container.classList.add("fall");
  sushi_container.classList.add("fall");
  cupcake_container.classList.add("fall");
  cake_container.classList.add("fall");
  gummibear_container.classList.add("fall");
  chocolate_container.classList.add("fall");

  // EVENTLISTENERS
  karaage_container.addEventListener("mousedown", clickKaraage);
  gyoza_container.addEventListener("mousedown", clickKaraage);
  rice_container.addEventListener("mousedown", clickKaraage);
  sushi_container.addEventListener("mousedown", clickKaraage);
  cupcake_container.addEventListener("mousedown", clickCupcake);
  cake_container.addEventListener("mousedown", clickCupcake);
  gummibear_container.addEventListener("mousedown", clickCupcake);
  chocolate_container.addEventListener("mousedown", clickCupcake);

  karaage_container.addEventListener("animationiteration", resetKaraage);
  gyoza_container.addEventListener("animationiteration", resetKaraage);
  rice_container.addEventListener("animationiteration", resetKaraage);
  sushi_container.addEventListener("animationiteration", resetKaraage);
  cupcake_container.addEventListener("animationiteration", resetCupcake);
  cake_container.addEventListener("animationiteration", resetCupcake);
  gummibear_container.addEventListener("animationiteration", resetCupcake);
  chocolate_container.addEventListener("animationiteration", resetCupcake);
}
function clickKaraage() {
  //fjern eventlistneren så man ikke længere kan klikke
  this.removeEventListener("mousedown", clickKaraage);

  //tæl op på point
  my_points = my_points + 1;
  //opdater point
  document.querySelector("#point").textContent = my_points;

  //put klassen frys på container
  this.classList.add("frys");
  //put klassen forsvind på sprite
  this.firstElementChild.classList.add("forsvind");

  //lytter efter animationen på karaage_sprite, når den er færdig så kaldes funktionen resetKaraage
  this.addEventListener("animationend", resetKaraage);
}

function playBite() {
  document.querySelector("#bite_sound").currentTime = 0;
  document.querySelector("#bite_sound").play();
}
function playUgh() {
  document.querySelector("#ugh_sound").currentTime = 0;
  document.querySelector("#ugh_sound").play();
}

function clickCupcake() {
  //fjern eventlistneren så man ikke længere kan klikke
  this.removeEventListener("mousedown", clickCupcake);

  //tæller ned på liv
  my_lives = my_lives - 1;
  document.querySelector("#life").textContent = my_lives;

  //put klassen frys på cupcake container
  this.classList.add("frys");
  //put klassen forsvind på cupcake sprite
  this.firstElementChild.classList.add("pulse");

  console.log(my_lives);
  if (my_lives === 0) {
    endGame();
  } else {
    this.addEventListener("animationend", resetCupcake);
  }
}
function resetKaraage() {
  console.log("resetKaraage");
  //fjern alle klasser fra Karaage container
  this.classList = "";
  //fjern alle klasser fra karaage sprite
  this.firstElementChild.classList = "";

  // ny random position
  rndNum = generateRandomNumber(10);
  let rndFallPos = "fallpos" + rndNum;
  this.classList.add(rndFallPos);
  //ny random speed
  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);

  //force reflow og start fall igen
  this.offsetHeight;
  this.classList.add("fall");

  //lyt igen efter klik
  this.addEventListener("mousedown", clickKaraage);
}
function resetCupcake() {
  console.log("resetCupcake");
  //fjern alle klasser fra cupcake container
  this.classList = "";
  this.firstElementChild.classList = "";

  // ny random position
  rndNum = generateRandomNumber(10);
  let rndFallPos = "fallpos" + rndNum;
  this.classList.add(rndFallPos);
  //ny random speed
  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);

  //force reflow og start fall igen
  this.offsetHeight;
  this.classList.add("fall");

  //lyt igen efter klik
  this.addEventListener("mousedown", clickCupcake);
}

//hjælpefunktioner

function endGame() {
  console.log("endGame");
  //fjern alle animationer
  this.classList = "";

  //nulstil timer
  document.querySelector("#timeglas_sand").classList = "";
  document
    .querySelector("#timeglas_sand")
    .removeEventListener("animationend", endGame);
  //går til endGame
  document
    .querySelector("#timeglas_sand")
    .removeEventListener("animationEnd", endGame);

  //tjek om spillet er vundet
  if (my_lives === 0 || my_points < 10) {
    gameOver();
  } else {
    levelComplete();
  }
}

function gameOver() {
  console.log("gameOver");
  //vis game over skærm
  document
    .querySelector("#background_sound")
    .removeEventListener("ended", restartSound);
  document.querySelector("#background_sound").pause();

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#point_gameover").textContent = my_points;

  document.querySelector("#background_sound").currentTime = 0;
  document.querySelector("#spil_igen").addEventListener("click", startGame);
}

function levelComplete() {
  document
    .querySelector("#background_sound")
    .removeEventListener("ended", restartSound);
  document.querySelector("#background_sound").pause();
  //vis level complete skærm
  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#point_win").textContent = my_points;

  document.querySelector("#background_sound").currentTime = 0;
  document.querySelector("#spil_igen2").addEventListener("click", startGame);
}

//hjælpefunctioner

function generateRandomNumber(antal) {
  let number = Math.floor(Math.random() * antal) + 1;
  return number;
}

function restartSound() {
  document.querySelector("#background_sound").play();
}

function hideAllScreens() {
  //skjuler alle skærme ved at tilføje klassen hide
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
