const jogar = document.querySelector("#jogar");
const Campanha = document.querySelector("#Campanha");
const Personalizado = document.querySelector("#Personalizado");
const com = document.querySelector(".com");

const click = new Audio("click.mp3");

jogar.addEventListener("click", () => {
    jogar.style.animationName = "unset";
    click.currentTime = 0;
    click.play();
    setTimeout(() => {
        jogar.style.opacity = "0";
        com.style.opacity = "0";
    }, 50)
    setTimeout(() => {
        jogar.style.display = "none";
        Personalizado.style.display = "flex";
        Campanha.style.display = "flex";
    }, 300)
    setTimeout(() => {
        com.style.opacity = "1";
    }, 500)
})

Personalizado.addEventListener("click", () => {
    click.currentTime = 0;
    click.play();
    Personalizado.style.opacity = "0";
    Campanha.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "ogtm.html";
    }, 1000)
})

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

window.addEventListener("keydown", (event) => {
const keyPressed = event.keyCode;
const F5 = 116;

if(keyPressed === F5) {
    event.preventDefault();
}
})