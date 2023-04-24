// Definerer elementer 
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Defininere hoppefuntion og bruger timout til at stoppe funktion
// "jump" er defineret i CSS og er keyframe animation
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}



// Mange nye begraber bliver brugt her, så der vil jeg anbefale man ser videoen 
//For en forklaring at begreberne eller søger på google


// Definerer hvordan dino løber mod cactus når den er i live 
let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


  // Definerer cactus position 
  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // Definerer hvis(if) man rammer cactus er kommer der alert med død 
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);






// tilføjer addEventListner så man kan trykke på en key for at den hopper 
document.addEventListener("keydown", function (event) {
  jump();
});