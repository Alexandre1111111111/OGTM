const cartai1 = document.querySelector("#cartai1");
const cartai2 = document.querySelector("#cartai2");
const cartai3 = document.querySelector("#cartai3");
const cartai4 = document.querySelector("#cartai4");
const cartai5 = document.querySelector("#cartai5");
const cartai6 = document.querySelector("#cartai6");
const cartai7 = document.querySelector("#cartai7");
const vidac1 = document.querySelector("#vidac1");
const vidac2 = document.querySelector("#vidac2");
const vidac3 = document.querySelector("#vidac3");
const vidac4 = document.querySelector("#vidac4");
const vidac5 = document.querySelector("#vidac5");
const vidac6 = document.querySelector("#vidac6");
const vidac7 = document.querySelector("#vidac7");
const vidac1a = document.querySelector("#vidac1a");
const vidac2a = document.querySelector("#vidac2a");
const vidac3a = document.querySelector("#vidac3a");
const vidac4a = document.querySelector("#vidac4a");
const vidac5a = document.querySelector("#vidac5a");
const danoc1a = document.querySelector("#danoc1a");
const danoc2a = document.querySelector("#danoc2a");
const danoc3a = document.querySelector("#danoc3a");
const danoc4a = document.querySelector("#danoc4a");
const danoc5a = document.querySelector("#danoc5a");
const resc1a = document.querySelector("#resc1a");
const resc2a = document.querySelector("#resc2a");
const resc3a = document.querySelector("#resc3a");
const resc4a = document.querySelector("#resc4a");
const resc5a = document.querySelector("#resc5a");
const cta1 = document.querySelector("#cta1");
const cta2 = document.querySelector("#cta2");
const cta3 = document.querySelector("#cta3");
const cta4 = document.querySelector("#cta4");
const cta5 = document.querySelector("#cta5");
const nvc1 = document.querySelector("#nvc1");
const nvc2 = document.querySelector("#nvc2");
const nvc3 = document.querySelector("#nvc3");
const nvc4 = document.querySelector("#nvc4");
const nvc5 = document.querySelector("#nvc5");
const inc1 = document.querySelector("#inc1");
const inc2 = document.querySelector("#inc2");
const inc3 = document.querySelector("#inc3");
const inc4 = document.querySelector("#inc4");
const inc5 = document.querySelector("#inc5");
const inci1 = document.querySelector("#inci1");
const inci2 = document.querySelector("#inci2");
const inci3 = document.querySelector("#inci3");
const inci4 = document.querySelector("#inci4");
const inci5 = document.querySelector("#inci5");
const inci6 = document.querySelector("#inci6");
const inci7 = document.querySelector("#inci7");
const mirac1 = document.querySelector("#mirac1");
const mirac2 = document.querySelector("#mirac2");
const mirac3 = document.querySelector("#mirac3");
const mirac4 = document.querySelector("#mirac4");
const mirac5 = document.querySelector("#mirac5");
const mirac6 = document.querySelector("#mirac6");
const mirac7 = document.querySelector("#mirac7");
const mirap1 = document.querySelector("#mirap1");
const mirap2 = document.querySelector("#mirap2");
const mirap3 = document.querySelector("#mirap3");
const mirap4 = document.querySelector("#mirap4");
const mirap5 = document.querySelector("#mirap5");
const atacar = document.querySelector("#atacar");
const ordenar = document.querySelector("#ordenar");
const itens = document.querySelector("#itens");
const roll = document.querySelector("#roll");
const rolln = document.querySelector("#rolln");
const dado = document.querySelector(".dado");
const btns = document.querySelector("#btns");

const punhal = 20;
const rapieira = 35;
const sabre = 30;
const mosquete = 40;
const perdeneira = 40;
const machado = 35;
const besta = 30;
const pistola = 40;

const granada = 150;
const adaga = 45;
const molotov = 35;
const nock = 60;

const arpão = 25;
const foice = 90;

const espada = 150;

let armap1 = rapieira;
let armap2 = mosquete;
let armap3 = sabre;
let armap4 = machado;
let armap5 = besta;
let resp1 = 0.90;
let resp2 = 0.85;
let resp3 = 0.90;
let resp4 = 0.92;
let resp5 = 0.95;
let vidap1 = 125;
let vidap2 = 200;
let vidap3 = 125;
let vidap4 = 150;
let vidap5 = 175;
let danot = 135;
let rd;
let alvo;
let NV = 6;
let danototal = 0;
let danototalp1 = 0;
let danototalp2 = 0;
let danototalp3 = 0;
let danototalp4 = 0;
let danototalp5 = 0;
let danototalini;
let hpt;
let hpt2;
let hpt3;
let hpt4;
let hpt5;
let hpt6;
let hpt7;
let hpp;
let hpp2;
let hpp3;
let hpp4;
let hpp5;
let rest = 0.85;
let numdado;
let per = 1;
let turnoa = true;

const cartasi = [cartai1, cartai2, cartai3, cartai4, cartai5, cartai6, cartai7];
const miras = [mirac1, mirac2, mirac3, mirac4, mirac5, mirac6, mirac7, mirap1, mirap2, mirap3, mirap4, mirap5];
const vidas = [vidac1a, vidac2a, vidac3a, vidac4a, vidac5a];
const niveis = [nvc1, nvc2, nvc3, nvc4, nvc5];

function limp() {
    for(i = 0; i < miras.length; i++) {
        miras[i].style.display = "none";
    }
}

function nvs() {
        switch (niveis[1].textContent) {
            case "NV: I":
                danototalp2 = armap2;
                danoc2a.textContent = armap2;
                vidac2a.textContent = vidap2;
            break;
            case "NV: II":
                danototalp2 = 10 + armap2;
                danoc2a.textContent = armap2 + 10;
                vidac2a.textContent = vidap2 + 20;
                resc2a.textContent = "16%";
                resp2 -= 0.01;
            break;
            case "NV: III":
                danototalp2 = 25 + armap2;
                danoc2a.textContent = armap2 + 25;
                vidac2a.textContent = vidap2 + 45;
                resc2a.textContent = "18%";
                resp2 -= 0.03;
            break;
            case "NV: IV":
                danototalp2 = 45 + armap2;
                danoc2a.textContent = armap2 + 45;
                vidac2a.textContent = vidap2 + 75;
                resc2a.textContent = "21%";
                resp2 -= 0.06;
            break;
            case "NV: V":
                danototalp2 = 65 + armap2;
                danoc2a.textContent = armap2 + 65;
                vidac2a.textContent = vidap2 + 120;
                resc2a.textContent = "24%";
                resp2 -= 0.09;
            break;
            case "NV: VI":
                danototalp2 = 95 + armap2;
                danoc2a.textContent = armap2 + 95;
                vidac2a.textContent = vidap2 + 170;
                resc2a.textContent = "27%";
                resp2 -= 0.12;
            break;
            case "NV: VII":
                danototalp2 = 130 + armap2;
                danoc2a.textContent = armap2 + 130;
                vidac2a.textContent = vidap2 + 235;
                resc2a.textContent = "30%";
                resp2 -= 0.15;
            break;
            case "NV: VIII":
                danototalp2 = 170 + armap2;
                danoc2a.textContent = armap2 + 170;
                vidac2a.textContent = vidap2 + 320;
                resc2a.textContent = "33%";
                resp2 -= 0.18;
            break;
            case "NV: IX":
                danototalp2 = 215 + armap2;
                danoc2a.textContent = armap2 + 215;
                vidac2a.textContent = vidap2 + 420;
                resc2a.textContent = "36%";
                resp2 -= 0.21;
            break;
            case "NV: X":
                danototalp2 = 265 + armap2;
                danoc2a.textContent = armap2 + 265;
                vidac2a.textContent = vidap2 + 550;
                resc2a.textContent = "41%";
                resp2 -= 0.26;
            break;
        }
        switch (niveis[0].textContent) {
            case "NV: I":
                danototalp1 = armap1;
                danoc1a.textContent = armap1;
                vidac1a.textContent = vidap1;
            break;
            case "NV: II":
                danototalp1 = 10 + armap1;
                danoc1a.textContent = armap1 + 10;
                vidac1a.textContent = vidap1 + 20;
                resc1a.textContent = "11%";
                resp1 -= 0.01;
            break;
            case "NV: III":
                danototalp1 = 25 + armap1;
                danoc1a.textContent = armap1 + 25;
                vidac1a.textContent = vidap1 + 45;
                resc1a.textContent = "13%";
                resp1 -= 0.03;
            break;
            case "NV: IV":
                danototalp1 = 45 + armap1;
                danoc1a.textContent = armap1 + 45;
                vidac1a.textContent = vidap1 + 75;
                resc1a.textContent = "16%";
                resp1 -= 0.06;
            break;
            case "NV: V":
                danototalp1 = 65 + armap1;
                danoc1a.textContent = armap1 + 65;
                vidac1a.textContent = vidap1 + 120;
                resc1a.textContent = "19%";
                resp1 -= 0.09;
            break;
            case "NV: VI":
                danototalp1 = 95 + armap1;
                danoc1a.textContent = armap1 + 95;
                vidac1a.textContent = vidap1 + 170;
                resc1a.textContent = "22%";
                resp1 -= 0.12;
            break;
            case "NV: VII":
                danototalp1 = 130 + armap1;
                danoc1a.textContent = armap1 + 130;
                vidac1a.textContent = vidap1 + 235;
                resc1a.textContent = "25%";
                resp1 -= 0.15;
            break;
            case "NV: VIII":
                danototalp1 = 170 + armap1;
                danoc1a.textContent = armap1 + 170;
                vidac1a.textContent = vidap1 + 320;
                resc1a.textContent = "28%";
                resp1 -= 0.18;
            break;
            case "NV: IX":
                danototalp1 = 215 + armap1;
                danoc1a.textContent = armap1 + 215;
                vidac1a.textContent = vidap1 + 420;
                resc1a.textContent = "31%";
                resp1 -= 0.21;
            break;
            case "NV: X":
                danototalp1 = 265 + armap1;
                danoc1a.textContent = armap1 + 265;
                vidac1a.textContent = vidap1 + 550;
                resc1a.textContent = "36%";
                resp1 -= 0.26;
            break;
    }
}

function personagem() {
    switch(per) {
        case 1:
            danototal = danototalp1;
        break;
        case 2:
            danototal = danototalp2;
        break;
        case 3:
            danototal = danototalp3;
        break;
        case 4:
            danototal = danototalp4;
        break;
        case 5:
            danototal = danototalp5;
        break;
    }
}

nvs();

personagem();

function inc() {
        if (vidac1a.textContent <= 0) {
            inc1.style.display = "flex";
        }
        if (vidac2a.textContent <= 0) {
            inc2.style.display = "flex";
        }
        if (vidac3a.textContent <= 0) {
            inc3.style.display = "flex";
        }
        if (vidac4a.textContent <= 0) {
            inc4.style.display = "flex";
        }
        if (vidac5a.textContent <= 0) {
            inc5.style.display = "flex";
        }
}

setInterval(inc, 50);

atacar.addEventListener("click", () => {
    roll.style.visibility = "visible";
    numdado = 0;
    rolln.textContent = numdado;
    mira();
})

function turnoini() {
    turnoa = false;
    cartasi[0].style.animationName = "shake";
    inijog();
    for (let i = 0; i < cartasi.length; i++) {
    if(cartasi[i].style.backgroundImage = "thesauriano.png") {
        danototalini = danot;
    }
}
dado.style.display = "block";
roll.style.display = "none";
    alvos();
    rolar();
    danoinimigo();
}

function alvos() {
    alvo = Math.floor(Math.random() * 5) + 1;
    switch (true) {
        case inc1.style.display == "flex" && alvo == 1 && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            alvo += 4;
        break;
        case inc1.style.display == "flex" && alvo == 1 && inc2.style.display == "flex" && inc3.style.display == "flex":
            alvo += 3;
        break;
        case inc1.style.display == "flex" && alvo == 1 && inc2.style.display == "flex":
            alvo += 2;
        break;
        case inc1.style.display == "flex" && alvo == 1 && inc2.style.display != "flex":
            alvo += 1;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc3.style.display == "flex" && inc4.style.display == "flex":
            alvo += 3;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc2.style.display == "flex":
            alvo += 2;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc1.style.display != "flex":
            alvo += 1;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc2.style.display == "flex":
            alvo -= 2;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc2.style.display != "flex":
            alvo -= 1;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 3;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display == "flex":
            alvo -= 2;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display != "flex":
            alvo -= 1;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc4.style.display == "flex" && inc3.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 4;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc3.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 3;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc2.style.display == "flex":
            alvo -= 2;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc4.style.display != "flex":
            alvo -= 1;
        break;
    }
    switch (alvo) {
        case 1:
            mirap1.style.display = "block";
        break;
        case 2:
            mirap2.style.display = "block";
        break;
        case 3:
            mirap3.style.display = "block";
        break;
        case 4:
            mirap4.style.display = "block";
        break;
        case 5:
            mirap5.style.display = "block";
        break;
    }
}

function rodar() {
    roll.style.visibility = "hidden";
    switch (true) {
        case cartasi[0].style.animationName == "shake":
            cartasi[0].style.animationName = "unset";
            cartasi[1].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake":
            cartasi[1].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[2].style.animationName == "shake":
            cartasi[2].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[3].style.animationName == "shake":
            cartasi[3].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[4].style.animationName == "shake":
            cartasi[4].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[5].style.animationName == "shake":
            cartasi[5].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[6].style.animationName == "shake":
            cartasi[6].style.animationName = "unset";
            if(inc1.style.display != "flex") {
                cta1.style.animationName = "shake";
                per = 1;
            }
            else if (inc1.style.display == "flex" && inc2.style.display != "flex") {
                cta2.style.animationName = "shake";
                per = 2;
            }
            else if (inc2.style.display == "flex" && inc3.style.display != "flex") {
                cta3.style.animationName = "shake";
                per = 3;
            }
            else if (inc3.style.display == "flex" && inc4.style.display != "flex") {
                cta4.style.animationName = "shake";
                per = 4;
            }
            else if (inc4.style.display == "flex" && inc5.style.display != "flex") {
                cta5.style.animationName = "shake";
                per = 5;
            }
            trocar();
            turnoa = true;
            clearInterval(rd);
        break;
    }
}

function inijog() {
    rd = setInterval(rodar, 1500);
}

function c1() {
    mirac1.style.display = "block";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
}

function c2() {
    mirac1.style.display = "none";
    mirac2.style.display = "block";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
}
function c3() {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "block";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
}
function c4() {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "block";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
}
function c5() {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "block";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
}
function c6() {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "block";
    mirac7.style.display = "none";
}
function c7() {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "block";
}

function mira() {
    cartai1.addEventListener("mouseover", c1);
    cartai2.addEventListener("mouseover", c2);
    cartai3.addEventListener("mouseover", c3);
    cartai4.addEventListener("mouseover", c4);
    cartai5.addEventListener("mouseover", c5);
    cartai6.addEventListener("mouseover", c6);
    cartai7.addEventListener("mouseover", c7);
}
for (let i = 0; i < cartasi.length; i++) {
    cartasi[i].addEventListener("click", () => {
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
        if(mirac1.style.display == "block" || mirac2.style.display == "block" || mirac3.style.display == "block" || mirac4.style.display == "block" || mirac5.style.display == "block" || mirac6.style.display == "block" || mirac7.style.display == "block") {
        dado.style.display = "block";
        }
    });  
}

function danoinimigo() {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        hpp = vidas[0].textContent;
        hpp2 = vidas[1].textContent;
        hpp3 = vidas[2].textContent;
        hpp4 = vidas[3].textContent;
        hpp5 = vidas[4].textContent;
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        hpp = Math.floor(vidas[0].textContent - danototalini + 5 * resp1);
        hpp2 = Math.floor(vidas[1].textContent - danototalini + 5 * resp2);
        hpp3 = Math.floor(vidas[2].textContent - danototalini + 5 * resp3);
        hpp4 = Math.floor(vidas[3].textContent - danototalini + 5 * resp4);
        hpp5 = Math.floor(vidas[4].textContent - danototalini + 5 * resp5);
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        hpp = Math.floor(vidas[0].textContent - danototalini + 5 * resp1);
        hpp2 = Math.floor(vidas[1].textContent - danototalini + 5 * resp2);
        hpp3 = Math.floor(vidas[2].textContent - danototalini + 5 * resp3);
        hpp4 = Math.floor(vidas[3].textContent - danototalini + 5 * resp4);
        hpp5 = Math.floor(vidas[4].textContent - danototalini + 5 * resp5);
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        hpp = Math.floor(vidas[0].textContent - danototalini);
        hpp2 = Math.floor(vidas[1].textContent - danototalini);
        hpp3 = Math.floor(vidas[2].textContent - danototalini);
        hpp4 = Math.floor(vidas[3].textContent - danototalini);
        hpp5 = Math.floor(vidas[4].textContent - danototalini);
    }

    else if (numdado == 19 || numdado == 20){
        hpp = Math.floor(vidas[0].textContent - danototalini - 15);
        hpp2 = Math.floor(vidas[1].textContent - danototalini - 15);
        hpp3 = Math.floor(vidas[2].textContent - danototalini - 15);
        hpp4 = Math.floor(vidas[3].textContent - danototalini - 15);
        hpp5 = Math.floor(vidas[4].textContent - danototalini - 15);
    }
}

function dano() {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        hpt = vidac1.textContent;
        hpt2 = vidac2.textContent;
        hpt3 = vidac3.textContent;
        hpt4 = vidac4.textContent;
        hpt5 = vidac5.textContent;
        hpt6 = vidac6.textContent;
        hpt7 = vidac7.textContent;
    }
    else if( numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        hpt = Math.floor(vidac1.textContent - danototal + 5 * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal + 5 * rest);
        hpt3 = Math.floor(vidac3.textContent - danototal + 5 * rest);
        hpt4 = Math.floor(vidac4.textContent - danototal + 5 * rest);
        hpt5 = Math.floor(vidac5.textContent - danototal + 5 * rest);
        hpt6 = Math.floor(vidac6.textContent - danototal + 5 * rest);
        hpt7 = Math.floor(vidac7.textContent - danototal + 5 * rest);
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        hpt = Math.floor(vidac1.textContent - danototal + 5 * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal + 5 * rest);
        hpt3 = Math.floor(vidac3.textContent - danototal + 5 * rest);
        hpt4 = Math.floor(vidac4.textContent - danototal + 5 * rest);
        hpt5 = Math.floor(vidac5.textContent - danototal + 5 * rest);
        hpt6 = Math.floor(vidac6.textContent - danototal + 5 * rest);
        hpt7 = Math.floor(vidac7.textContent - danototal + 5 * rest);
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        hpt = Math.floor(vidac1.textContent - danototal);
        hpt2 = Math.floor(vidac2.textContent - danototal);
        hpt3 = Math.floor(vidac3.textContent - danototal);
        hpt4 = Math.floor(vidac4.textContent - danototal);
        hpt5 = Math.floor(vidac5.textContent - danototal);
        hpt6 = Math.floor(vidac6.textContent - danototal);
        hpt7 = Math.floor(vidac7.textContent - danototal);
    }

    else if (numdado == 19 || numdado == 20){
        hpt = Math.floor(vidac1.textContent - danototal - 15);
        hpt2 = Math.floor(vidac2.textContent - danototal - 15);
        hpt3 = Math.floor(vidac3.textContent - danototal - 15);
        hpt4 = Math.floor(vidac4.textContent - danototal - 15);
        hpt5 = Math.floor(vidac5.textContent - danototal - 15);
        hpt6 = Math.floor(vidac6.textContent - danototal - 15);
        hpt7 = Math.floor(vidac7.textContent - danototal - 15);
    }
}

cta1.style.animationName = "shake";

function trocar() {
    danototal = 0;
    personagem();
    roll.style.visibility = "visible";
    if(roll.style.display == "none") {
    roll.style.display = "block";
    }
    if(turnoa) {
    if(inc1.style.display == "flex" || inc2.style.display == "flex" || inc3.style.display == "flex" || inc4.style.display == "flex" || inc5.style.display == "flex") {
    switch(true) {
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta1.style.animationName = "unset";
            turnoini();
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta2.style.animationName = "unset";
            turnoini();
        break;
        case cta3.style.animationName == "shake" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            turnoini();
        break;
        case cta4.style.animationName == "shake" && inc5.style.display == "flex":
            cta4.style.animationName = "unset";
            turnoini();
        break;
        case cta1.style.animationName == "shake" && inc2.style.display != "flex":
            cta1.style.animationName = "unset";
            cta2.style.animationName = "shake";
            ordenar.style.display = "none";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta1.style.animationName = "unset";
            cta5.style.animationName = "shake";
            ordenar.style.display = "none";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex":
            cta1.style.animationName = "unset";
            cta4.style.animationName = "shake";
            ordenar.style.display = "none";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex":
            cta1.style.animationName = "unset";
            cta3.style.animationName = "shake";
            ordenar.style.display = "none";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta1.style.animationName != "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta1.style.animationName = "shake";
            per = 1;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display != "flex":
            cta1.style.animationName = "unset";
            cta2.style.animationName = "shake";
            per = 3;
        break;
        case cta2.style.animationName == "shake" && inc1.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta2.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 3;
        break;
        case cta2.style.animationName == "shake" && inc1.style.display == "flex" && inc3.style.display == "flex":
            cta2.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 3;
        break;
        case cta2.style.animationName == "shake" && inc1.style.display == "flex":
            cta2.style.animationName = "unset";
            cta3.style.animationName = "shake";
            per = 3;
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex":
            cta2.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta2.style.animationName != "shake" && cta1.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta2.style.animationName = "shake";
            per = 2;
        break;
        case cta2.style.animationName == "shake" && inc3.style.display != "flex":
            cta2.style.animationName = "unset";
            cta3.style.animationName = "shake";
            per = 3;
        break;
        case cta3.style.animationName == "shake" && inc1.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 4;
        break;
        case cta3.style.animationName == "shake" && inc1.style.display == "flex" && inc3.style.display == "flex":
            cta3.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta3.style.animationName != "shake" && cta2.style.animationName != "shake" && cta1.style.animationName != "shake" && cta4.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta3.style.animationName = "shake";
            per = 3;
        break;
        case cta3.style.animationName == "shake" && inc4.style.display != "flex":
            cta3.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta4.style.animationName == "shake" && inc1.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta4.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 5;
        break;
        case cta4.style.animationName != "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta1.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta4.style.animationName == "shake" && inc5.style.display != "flex":
            cta4.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 3;
        break;
        case cta5.style.animationName != "shake" && inc1.style.display == "flex" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta5.style.animationName = "shake";
            turnoini();
        break;
        case cta5.style.animationName == "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta1.style.animationName != "shake":
            cta5.style.animationName = "unset";
            turnoini();
        break;
    }
}
else {
    switch (true) {
        case cta1.style.animationName == "shake":
            cta1.style.animationName = "unset";
            cta2.style.animationName = "shake";
            ordenar.style.display = "none";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta2.style.animationName == "shake":
            cta2.style.animationName = "unset";
            cta3.style.animationName = "shake";
            per = 3;
        break;
        case cta3.style.animationName == "shake":
            cta3.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta4.style.animationName == "shake":
            cta4.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 5;
        break;
        case cta5.style.animationName == "shake":
            cta5.style.animationName = "unset";
            ordenar.style.display = "block";
            btns.style.bottom = "14vh";
            per = 1;
            turnoini();
        break;
    }
}
    }
}

function rolar() {
    roll.style.visibility = "hidden";
    numdado = Math.floor(Math.random() * 20) + 1;
    rolln.textContent = numdado;
    if(turnoa) {
        dano();
    }
    else {
        danoinimigo();
    }
    dado.style.display = "block";
    setTimeout(() => {
        dado.style.display = "none";
        if(turnoa) {
            roll.style.display = "block";
        switch (true) {
            case mirac1.style.display == "block":
                    vidac1.textContent = hpt;
                    limp();
            break;
            case mirac2.style.display == "block":
                    vidac2.textContent = hpt2;
                    limp();
            break;
            case mirac3.style.display == "block":
                    vidac3.textContent = hpt3;
                    limp();
            break;
            case mirac4.style.display == "block":
                    vidac4.textContent = hpt4;
                    limp();
            break;
            case mirac5.style.display == "block":
                    vidac5.textContent = hpt5;
                    limp();
            break;
            case mirac6.style.display == "block":
                    vidac6.textContent = hpt6;
                    limp();
            break;
            case mirac7.style.display == "block":
                    vidac7.textContent = hpt7;
                    limp();
            break;
        }
    }
    else {
        switch (alvo) {
            case 1:
                roll.style.visibility = "hidden";
                    vidac1a.textContent = hpp;
                    limp();
            break;
            case 2:
                roll.style.visibility = "hidden";
                    hpt = Math.floor(vidac2.textContent - 35 * rest);
                    vidac2a.textContent = hpp2;
                    limp();
            break;
            case 3:
                roll.style.visibility = "hidden";
                    hpt = Math.floor(vidac3.textContent - 35 * rest);
                    vidac3a.textContent = hpp3;
                    limp();
            break;
            case 4:
                roll.style.visibility = "hidden";
                    hpt = Math.floor(vidac4.textContent - 35 * rest);
                    vidac4a.textContent = hpp4;
                    limp();
            break;
            case 5:
                roll.style.visibility = "hidden";
                    hpt = Math.floor(vidac5.textContent - 35 * rest);
                    vidac5a.textContent = hpp5;
                    limp();
            break;
        }
    }
        trocar();
    }, 1000)
}

roll.addEventListener("click", rolar);