//carga con la funcion iniciar juego  todos lo elementos del juego
window.addEventListener("load", initGame);

let atackPayer;
let atackEnemy;
let livesPlayer = 3;
let livesEnemy = 3;

function initGame() {
  //oculta la seccion de elegir ataque al iniciar el juego
  let sectionChooseAtack = document.querySelector("#choose-atack");
  sectionChooseAtack.style.display = "none";

  let sectionRestart = document.querySelector("#restart");
  sectionRestart.style.display = "none";

  let buttonPetPlayer = document.querySelector("#button-pet");
  buttonPetPlayer.addEventListener("click", choosePetPlayer);

  let buttonFire = document.querySelector("#button-fire");
  buttonFire.addEventListener("click", atackFire);

  let buttonEarth = document.querySelector("#button-earth");
  buttonEarth.addEventListener("click", atackEarth);

  let buttonWater = document.querySelector("#button-water");
  buttonWater.addEventListener("click", atackWater);

  let buttonRestart = document.querySelector("#button-restart");
  buttonRestart.addEventListener("click", restartGame);
}

function choosePetPlayer() {
  // oculta la seccion de elegir mascota

  let sectionChoosePet = document.querySelector("#choose-pet");
  sectionChoosePet.style.display = "none";

  // muestra la seccion de elegir mascota
  let sectionChooseAtack = document.querySelector("#choose-atack");
  sectionChooseAtack.style.display = "flex";
  // alert("You have chosen a pet player!");
  let inputHipodoge = document.querySelector("#hipodoge");
  let inputCapipepo = document.querySelector("#capipepo");
  let inputRatigueya = document.querySelector("#ratigueya");
  let spanPetPlayer = document.querySelector("#pet-player");
  if (inputHipodoge.checked) {
    // alert("You have chosen a hipodoge!");

    spanPetPlayer.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    //alert("You have chosen a capipepo!");

    spanPetPlayer.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    //alert("You have chosen a ratigueya!");
    spanPetPlayer.innerHTML = "Ratigueya";
  } else {
    alert("You have not chosen a pet player!");
  }
  choosePetEnemy();
}
function choosePetEnemy() {
  let petEnemyRandom = aleatorio(1, 3);
  let spanPetEnemy = document.querySelector("#pet-enemy");

  if (petEnemyRandom == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
  } else if (petEnemyRandom == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
  } else if (petEnemyRandom == 3) {
    spanPetEnemy.innerHTML = "Ratigueya";
  }
}
function atackFire() {
  atackPayer = "Fire";
  atackRamdonEnemy();
}
function atackEarth() {
  atackPayer = "Earth";
  atackRamdonEnemy();
}
function atackWater() {
  atackPayer = "Water";
  atackRamdonEnemy();
}

function atackRamdonEnemy() {
  let atackEnemyRandom = aleatorio(1, 3);
  if (atackEnemyRandom == 1) {
    atackEnemy = "Fire";
  } else if (atackEnemyRandom == 2) {
    atackEnemy = "Earth";
  } else if (atackEnemyRandom == 3) {
    atackEnemy = "Water";
  }
  atack();
}
// funcion para el combate

function atack() {
  let spanLivesPlayer = document.querySelector("#lives-player");
  let spanLivesEnemy = document.querySelector("#lives-enemy");
  if (atackEnemy == atackPayer) {
    createMessage("Empate");
  } else if (atackPayer == "Fire" && atackEnemy == "Earth") {
    createMessage("Win");
    livesEnemy--;
    spanLivesEnemy.innerHTML = livesEnemy;
  } else if (atackPayer == "Water" && atackEnemy == "Fire") {
    createMessage("Win");
    livesEnemy--;
    spanLivesEnemy.innerHTML = livesEnemy;
  } else if (atackPayer == "Earth" && atackEnemy == "Water") {
    createMessage("Win");
    livesEnemy--;
    spanLivesEnemy.innerHTML = livesEnemy;
  } else {
    createMessage("Loser");
    livesPlayer--;
    spanLivesPlayer.innerHTML = livesPlayer;
  }
  //revisar el contador de vidas para saber si gana o pierde
  checkLives();
}

//funcion para revisar el contador de vidas

function checkLives() {
  if (livesEnemy == 0) {
    //alert("You win!");
    createMessageEnd("You win! 🎉");
  } else if (livesPlayer == 0) {
    //alert("You lose!");
    createMessageEnd("You lose! 😭");
  }
}


//muestra el mensaje de ataque y defensa de las mascotas
function createMessage(result) {
  let sectionResultAtack = document.querySelector("#result-atack");
  let sectionAtackPlayer = document.querySelector("#atack-player");
  let sectionAtackEnemy = document.querySelector("#atack-enemy");
  

  let newAtackPlayer = document.createElement("p");
  let newAtackEnemy = document.createElement("p");

  sectionResultAtack.innerHTML = result;
  sectionAtackPlayer.innerHTML = atackPayer;
  sectionAtackEnemy.innerHTML = atackEnemy;


  sectionResultAtack.appendChild(newAtackPlayer);
  sectionResultAtack.appendChild(newAtackEnemy);

}
//funcion para el mensaje de fin del juego
//desabilita los botones de ataque y muestra y habilita el boton de reiniciar

function createMessageEnd(resultEnd) {
  let sectionResultAtack = document.querySelector("#result-atack");
  
  
  sectionResultAtack.innerHTML = resultEnd;


  let buttonFire = document.querySelector("#button-fire");
  buttonFire.disabled = true;

  let buttonEarth = document.querySelector("#button-earth");
  buttonEarth.disabled = true;

  let buttonWater = document.querySelector("#button-water");
  buttonWater.disabled = true;

  let sectionRestart = document.querySelector("#restart");
  sectionRestart.style.display = "block";
}

//funcion para restart el juego
function restartGame() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
