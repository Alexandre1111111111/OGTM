const bgmusic = new Audio("bgmusic.mp3");
const bgmusic2 = new Audio("bgmusic2.mp3");
const bgmusic3 = new Audio("bgmusic3.mp3");
const bgmusic4 = new Audio("bgmusic4.mp3");
const bgmusic5 = new Audio("bgmusic5.mp3");

const doze = new Audio("shotgun.mp3");
const lamina = new Audio("lamina.mp3");
const mosqsd = new Audio("mosquete.mp3");
const canhao = new Audio("canhao.mp3");
const gransd = new Audio("granada.mp3");
const molotsd = new Audio("molotov.mp3");
const bstsd = new Audio("besta.mp3");

const sons = [doze, lamina, mosqsd, canhao, gransd, molotsd, bstsd];

const musica = [bgmusic, bgmusic2, bgmusic3, bgmusic4, bgmusic5];

let ramm;

for(let i = 0; i < musica.length; i++) {
    musica[i].volume = 0.3;
}

for(i = 0; i < sons.length; i++) {
    sons[i].volume = 0.7;
}

function musicas() {
    for(i = 0; i < musica.length; i++) {
        musica[i].currentTime = 0;
    }
    ramm = Math.floor(Math.random() * 3) + 1;
    switch (ramm) {
        case 1:
            musica[0].play();
        break;
        case 2:
            musica[2].play();
        break;
        case 3:
            musica[3].play();
        break;
    }
}

function replay() {
    switch (true) {
        case musica[0].currentTime == musica[0].duration:
            musicas();
        break;
        case musica[2].currentTime == musica[2].duration:
            musicas();
        break;
        case musica[3].currentTime == musica[3].duration:
            musicas();
        break;
    }
}

setInterval(replay, 500);