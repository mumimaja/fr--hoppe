// Definerer elementer 
const ræv = document.getElementById("ræv");
const svamp = document.getElementById("svamp");

// Defininere hoppefuntion og bruger timout til at stoppe funktion
// "jump" er defineret i CSS og er keyframe animation
function jump() {
  if (ræv.classList != "jump") {
    ræv.classList.add("jump");

    setTimeout(function () {
      ræv.classList.remove("jump");
    }, 300);
  }
}



// Mange nye begraber bliver brugt her, så der vil jeg anbefale man ser videoen 
//For en forklaring at begreberne eller søger på google


// Definerer hvordan dino løber mod cactus når den er i live 
let isAlive = setInterval(function () {
  // get current dino Y position
  let rævTop = parseInt(window.getComputedStyle(ræv).getPropertyValue("top"));


  // Definerer cactus position 
  // get current cactus X position
  let svampLeft = parseInt(
    window.getComputedStyle(svamp).getPropertyValue("left")
  );

  // Definerer hvis(if) man rammer cactus er kommer der alert med død 
  if (svampLeft < 50 && svampLeft > 0 && rævTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);






// tilføjer addEventListner så man kan trykke på en key for at den hopper 
document.addEventListener("keydown", function (event) {
  jump();
});