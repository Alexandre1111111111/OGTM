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
const danoc1 = document.querySelector("#danoc1");
const danoc2 = document.querySelector("#danoc2");
const danoc3 = document.querySelector("#danoc3");
const danoc4 = document.querySelector("#danoc4");
const danoc5 = document.querySelector("#danoc5");
const danoc6 = document.querySelector("#danoc6");
const danoc7 = document.querySelector("#danoc7");
const atacar = document.querySelector("#atacar");
const ordenar = document.querySelector("#ordenar");
const itens = document.querySelector("#itens");
const roll = document.querySelector("#roll");
const rolln = document.querySelector("#rolln");
const dado = document.querySelector(".dado");
const btns = document.querySelector("#btns");
const veztxt = document.querySelector("#veztxt");
const vez = document.querySelector(".vez");
const damage = document.querySelector(".damage");
const total = document.querySelector("#total");
const ordem = document.querySelector(".ordem");
const btncom = document.querySelector("#btncom");
const inisel = document.querySelector(".inisel");
const cog = document.querySelector("#cog");
const options = document.querySelector(".options");
const resume = document.querySelector("#resume");
const sldm = document.querySelector("#sldm");
const slds = document.querySelector("#slds");
const armasatl = document.querySelector("#armasatl");
const armaatl = document.querySelector(".armaatl");
const num = document.querySelector(".num");

const punhal = 20;
const rapieira = 35;
const sabre = 30;
const mosquete = 40.01;
const perdeneira = 40;
const machado = 35.01;
const besta = 30.01;
const pistola = 40.02;

const granada = 150;
const adaga = 45;
const molotov = 35.02;
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
let rd;
let alvo;
let NV = 6;
let danototal = 0;
let danototalp1 = 0;
let danototalp2 = 0;
let danototalp3 = 0;
let danototalp4 = 0;
let danototalp5 = 0;
let danototalini = danoc1.textContent;
let hpt;
let hpt2;
let hpt3;
let hpt4;
let hpt5;
let hpt6;
let hpt7;
let ress1 = 10;
let ress2 = 15;
let ress3 = 10;
let ress4 = 8;
let ress5 = 5;
let hpp;
let hpp2;
let hpp3;
let hpp4;
let hpp5;
let rest = 0.85;
let numdado;
let per = 1;
let turnoa = true;
let mirando = false;
let audio;
let audio2;
let audio3;
let audio4;
let audio5;
let amving;
let twelve;
let ini;

const bgmusic = new Audio("bgmusic.mp3");

const doze = new Audio("shotgun.mp3");
const lamina = new Audio("lamina.mp3");
const mosqsd = new Audio("mosquete.mp3");
const canhao = new Audio("canhao.mp3");
const gransd = new Audio("granada.mp3");
const molotsd = new Audio("molotov.mp3");
const bstsd = new Audio("besta.mp3");

const sons = [doze, lamina, mosqsd, canhao, gransd, molotsd, bstsd];

bgmusic.volume = 0.3;

for(i = 0; i < sons.length; i++) {
    sons[i].volume = 0.7;
}

bgmusic.loop = true;

const danoini = [danoc1, danoc2, danoc3, danoc4, danoc5, danoc6, danoc7];
const audios = [audio, audio2, audio3, audio4, audio5];
const cartasi = [cartai1, cartai2, cartai3, cartai4, cartai5, cartai6, cartai7];
const miras = [mirac1, mirac2, mirac3, mirac4, mirac5, mirac6, mirac7, mirap1, mirap2, mirap3, mirap4, mirap5];
const vidas = [vidac1a, vidac2a, vidac3a, vidac4a, vidac5a];
const niveis = [nvc1, nvc2, nvc3, nvc4, nvc5];
const danos = [danototalp1, danototalp2, danototalp3, danototalp4, danototalp5];
const dns = [danoc1a, danoc2a, danoc3a, danoc4a, danoc5a];
const armas = [armap1, armap2, armap3, armap4, armap5];
const resistencias = [resc1a, resc2a, resc3a, resc4a, resc5a];
const resps = [resp1, resp2, resp3, resp4, resp5];
const vds = [vidap1, vidap2, vidap3, vidap4, vidap5];
const rss = [ress1, ress2, ress3, ress4, ress5];
const incis = [inci1, inci2, inci3, inci4, inci5, inci6, inci7];
const vidasi = [vidac1, vidac2, vidac3, vidac4, vidac5, vidac6, vidac7];

function limp() {
    for(i = 0; i < miras.length; i++) {
        miras[i].style.display = "none";
    }
    vez.style.top = "2vh";
    vez.style.backgroundColor = "rgba(0, 0, 255, 0.842)";
    damage.style.right = "30vh";
    setTimeout(() => {
        damage.style.visibility = "hidden";
    }, 500)
    mirando = false;
    total.textContent = "---";
    atacar.addEventListener("click", rvmatq);
}

sldm.oninput = () => {
    bgmusic.volume = sldm.value / 100;
}
slds.oninput = () => {
    for(i = 0; i < sons.length; i++) {
        sons[i].volume = sldm.value / 100;
    }
}

function ttl() {
    total.textContent = Math.floor(danototal * rest);
}

btncom.addEventListener("click", () => {
    inisel.style.display = "none";
    bgmusic.play();
})

function trocatxt() {
    switch(true) {
        case mirando:
            veztxt.textContent = "Escolha o Alvo";
        break;
        case cta1.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Vez de Barbarovsk";
        break;
        case cta2.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Vez de Crowly";
        break;
        case cta3.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Vez de Lysa";
        break;
        case cta4.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Vez de Darban";
        break;
        case cta5.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Vez de Gabriele";
        break;
        case !turnoa:
            vez.style.display = "none";
        break;
    }
}

cog.addEventListener("click", () => {
    if(cog.style.rotate != "90deg") {
        cog.style.rotate = "90deg";
        options.style.display = "flex";
    } 
})

function amuletos() {
    twelve = Math.floor(Math.random() * 5) + 1;
    if(twelve == 5) {
    switch(true) {
    case mirac1.style.display == "block" :
        danototalini *= 1.50;
        danoc1.textContent = Math.floor(danoc1.textContent * 1.50);
    break;
    case mirac2.style.display == "block" :
        danototalini *= 1.50;
        danoc2.textContent = Math.floor(danoc2.textContent * 1.50);
    break;
    case mirac3.style.display == "block" :
        danototalini *= 1.50;
        danoc3.textContent = Math.floor(danoc3.textContent * 1.50);
    break;
    case mirac4.style.display == "block" :
        danototalini *= 1.50;
        danoc4.textContent = Math.floor(danoc4.textContent * 1.50);
    break;
    case mirac5.style.display == "block" :
        danototalini *= 1.50;
        danoc5.textContent = Math.floor(danoc5.textContent * 1.50);
    break;
    case mirac6.style.display == "block" :
        danototalini *= 1.50;
        danoc6.textContent = Math.floor(danoc6.textContent * 1.50);
    break;
    case mirac7.style.display == "block" :
        danototalini *= 1.50;
        danoc7.textContent = Math.floor(danoc7.textContent * 1.50);
    break;
    }
}
}

function odm() {
    if(ordem.style.display != "flex") {
        ordem.style.display = "flex";
        setTimeout(() => {
            ordem.style.opacity = "1";
        }, 50)
    }
    else {
        ordem.style.opacity = "0";
        setTimeout(() => {
            ordem.style.display = "none";
        }, 250)
    }
}

ordenar.addEventListener("click", odm);

setInterval(trocatxt, 10);

function nvs() {
    for(let i = 0; i < niveis.length; i++) {
        switch (niveis[i].textContent) {
            case "NV: I":
                danos[i] = armas[i];
                dns[i].textContent = Math.floor(armas[i]);
                vidas[i].textContent = vds[i];
                vds[i] = vidas[i].textContent;
            break;
            case "NV: II":
                danos[i] = 10 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 10);
                vidas[i].textContent = vds[i] + 20;
                resistencias[i].textContent = `${rss[i] + 1}%`;
                resps[i] -= 0.01;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: III":
                danos[i] = 25 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 25);
                vidas[i].textContent = vds[i] + 45;
                resistencias[i].textContent = `${rss[i] + 3}%`;
                resps[i] -= 0.03;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: IV":
                danos[i] = 45 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 45);
                vidas[i].textContent = vds[i] + 75;
                resistencias[i].textContent = `${rss[i] + 6}%`;
                resps[i] -= 0.06;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: V":
                danos[i] = 65 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 65);
                vidas[i].textContent = vds[i] + 120;
                resistencias[i].textContent = `${rss[i] + 9}%`;
                resps[i] -= 0.09;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: VI":
                danos[i] = 95 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 95);
                vidas[i].textContent = vds[i] + 170;
                resistencias[i].textContent = `${rss[i] + 12}%`;
                resps[i] -= 0.12;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: VII":
                danos[i] = 130 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 130);
                vidas[i].textContent = vds[i] + 235;
                resistencias[i].textContent = `${rss[i] + 15}%`;
                resps[i] -= 0.15;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: VIII":
                danos[i] = 170 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 170);
                vidas[i].textContent = vds[i] + 320;
                resistencias[i].textContent = `${rss[i] + 18}%`;
                resps[i] -= 0.18;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: IX":
                danos[i] = 215 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 215);
                vidas[i].textContent = vds[i] + 420;
                resistencias[i].textContent = `${rss[i] + 21}%`;
                resps[i] -= 0.21;
                vds[i] = vidas[i].textContent;
            break;
            case "NV: X":
                danos[i] = 265 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 265);
                vidas[i].textContent = vds[i] + 550;
                resistencias[i].textContent = `${rss[i] + 26}%`;
                resps[i] -= 0.26;
                vds[i] = vidas[i].textContent;
            break;
        }
    }
}

function personagem() {
    switch(per) {
        case 1:
            danototal = danos[0];
        break;
        case 2:
            danototal = danos[1];
        break;
        case 3:
            danototal = danos[2];
        break;
        case 4:
            danototal = danos[3];
        break;
        case 5:
            danototal = danos[4];
        break;
    }
}

function inimigo() {
    switch (true) {
        case cartasi[0].style.animationName == "shake":
            ini = 1;
        break;
        case cartasi[1].style.animationName == "shake":
            ini = 2;
        break;
        case cartasi[2].style.animationName == "shake":
            ini = 3;
        break;
        case cartasi[3].style.animationName == "shake":
            ini = 4;
        break;
        case cartasi[4].style.animationName == "shake":
            ini = 5;
        break;
        case cartasi[5].style.animationName == "shake":
            ini = 6;
        break;
        case cartasi[6].style.animationName == "shake":
            ini = 7;
        break;
    }
    switch(ini) {
        case 1:
            danototalini = danoini[0].textContent;
        break;
        case 2:
            danototalini = danoini[1].textContent;
        break;
        case 3:
            danototalini = danoini[2].textContent;
        break;
        case 4:
            danototalini = danoini[3].textContent;
        break;
        case 5:
            danototalini = danoini[4].textContent;
        break;
        case 6:
            danototalini = danoini[5].textContent;
        break;
        case 7:
            danototalini = danoini[6].textContent;
        break;
    }
}

setInterval(inimigo, 10);

nvs();

personagem();

function inc() {
        if (vidac1a.textContent <= 0) {
            inc1.style.display = "flex";
            vidac1a.textContent = 0;
        }
        if (vidac2a.textContent <= 0) {
            inc2.style.display = "flex";
            vidac2a.textContent = 0;
        }
        if (vidac3a.textContent <= 0) {
            inc3.style.display = "flex";
            vidac3a.textContent = 0;
        }
        if (vidac4a.textContent <= 0) {
            inc4.style.display = "flex";
            vidac4a.textContent = 0;
        }
        if (vidac5a.textContent <= 0) {
            inc5.style.display = "flex";
            vidac5a.textContent = 0;
        }
}
function incinimigo() {
    if (vidac1.textContent <= 0) {
        incis[0].style.display = "flex";
        vidac1.textContent = 0;
    }
    if (vidac2.textContent <= 0) {
        incis[1].style.display = "flex";
        vidac2.textContent = 0;
    }
    if (vidac3.textContent <= 0) {
        incis[2].style.display = "flex";
        vidac3.textContent = 0;
    }
    if (vidac4.textContent <= 0) {
        incis[3].style.display = "flex";
        vidac4.textContent = 0;
    }
    if (vidac5.textContent <= 0) {
        incis[4].style.display = "flex";
        vidac5.textContent = 0;
    }
    if (vidac6.textContent <= 0) {
        incis[5].style.display = "flex";
        vidac6.textContent = 0;
    }
    if (vidac7.textContent <= 0) {
        incis[6].style.display = "flex";
        vidac7.textContent = 0;
    }
}

setInterval(inc, 50);
setInterval(incinimigo, 50);
setInterval(() => {
    if(turnoa) {
        btns.style.display = "block";
        armaatl.style.display = "flex";
    }
}, 50)
setInterval(() => {
    for(let i = 0; i < vidasi.length; i++) {
    if(vidasi[i].textContent < 300) {
        vidasi[i].style.color ="#e31212";
    }
}
}, 10)

setInterval(() => {
    for(let i = 0; i < vidas.length; i++) {
        if(vidas[i].textContent < vds[i]) {
            vidas[i].style.color ="#e31212";
        }
    }
    if(mirando) {
        cog.style.display = "none";
    }
    else {
        cog.style.display = "block";
    }
    if(!turnoa) {
        dado.style.height = "20vh";
        dado.style.width = "30vh";
        num.style.height = "20vh";
    }
    else {
        dado.style.height = "40vh";
        dado.style.width = "40vh";
        num.style.height = "30vh";
    }
}, 10)

setInterval(() => {
    if(per != 1) {
        ordenar.style.display = "none";
        btns.style.bottom = "5vh";
    }
    else {
        ordenar.style.display = "block";
        btns.style.bottom = "14vh";
    }
    for (let i = 0; i < armas.length; i++) {
    switch(true) {
        case per == i + 1 && armas[i] == punhal:
            armasatl.textContent = "Punhal";
        break;
        case per == i + 1 && armas[i] == rapieira:
            armasatl.textContent = "Rapieira";
        break;
        case per == i + 1 && armas[i] == sabre:
            armasatl.textContent = "Sabre";
        break;
        case per == i + 1 && armas[i] == mosquete:
            armasatl.textContent = "Mosquete";
        break;
        case per == i + 1 && armas[i] == perdeneira:
            armasatl.textContent = "Perdeneira";
        break;
        case per == i + 1 && armas[i] == besta:
            armasatl.textContent = "Besta";
        break;
        case per == i + 1 && armas[i] == machado:
            armasatl.textContent = "Machado";
        break;
        case per == i + 1 && armas[i] == pistola:
            armasatl.textContent = "Pistola";
        break;
        case per == i + 1 && armas[i] == granada:
            armasatl.textContent = "Granada";
        break;
        case per == i + 1 && armas[i] == adaga:
            armasatl.textContent = "Adaga Dupla";
        break;
        case per == i + 1 && armas[i] == molotov:
            armasatl.textContent = "Coquetel Molotov";
        break;
        case per == i + 1 && armas[i] == nock:
            armasatl.textContent = "Espingarda Nock";
        break;
        case per == i + 1 && armas[i] == arpão:
            armasatl.textContent = "Mini-Arpão";
        break;
        case per == i + 1 && armas[i] == foice:
            armasatl.textContent = "Foice Curta";
        break;
        case per == i + 1 && armas[i] == espada:
            armasatl.textContent = "Espada Congelada";
        break;
    }
}
}, 10)

setInterval(() => {
    for (let i = 0; i < armas.length; i++) {
    switch(true) {
        case armas[i] == nock:
            audios[i] = sons[0];
        break;
        case armas[i] == granada:
            audios[i] = sons[4];
        break;
        case armas[i] == molotov:
            audios[i] = sons[5];
        break;
        case armas[i] == punhal || armas[i] == rapieira || armas[i] == sabre || armas[i] == machado || armas[i] == foice || armas[i] == espada || armas[i] == adaga:
            audios[i] = sons[1];
        break;
        case armas[i] == perdeneira || armas[i] == pistola || armas[i] == mosquete:
            audios[i] = sons[2];
        break;
        case armas[i] == besta || armas[i] == arpão:
            audios[i] = sons[6];
        break;
    }
}
}, 10)

function atacando() {
    mirando = true;
    roll.style.visibility = "visible";
    numdado = 0;
    rolln.textContent = numdado;
    vez.style.top = "40vh";
    vez.style.backgroundColor = "rgba(255, 0, 0, 0.842)";
    damage.style.visibility = "visible";
    damage.style.right = "0vh";
    mira();
}

function rvmatq() {
    atacar.removeEventListener("click", rvmatq);
    atacando();
}

resume.addEventListener("click", () => {
    cog.style.rotate = "0deg";
    options.style.display = "none";
})

atacar.addEventListener("click", rvmatq);

function turnoini() {
    turnoa = false;
    btns.style.display = "none";
    armaatl.style.display = "none";
    switch(true) {
        case incis[0].style.display != "flex":
            cartasi[0].style.animationName = "shake";
        break;
        case incis[6].style.display == "flex" && incis[5].style.display == "flex" && incis[4].style.display == "flex" && incis[3].style.display == "flex" && incis[2].style.display == "flex" && incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[7].style.animationName = "shake";
        break;
        case incis[5].style.display == "flex" && incis[4].style.display == "flex" && incis[3].style.display == "flex" && incis[2].style.display == "flex" && incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[6].style.animationName = "shake";
        break;
        case incis[4].style.display == "flex" && incis[3].style.display == "flex" && incis[2].style.display == "flex" && incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[5].style.animationName = "shake";
        break;
        case incis[3].style.display == "flex" && incis[2].style.display == "flex" && incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[4].style.animationName = "shake";
        break;
        case incis[2].style.display == "flex" && incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[3].style.animationName = "shake";
        break;
        case incis[1].style.display == "flex" && incis[0].style.display == "flex":
            cartasi[2].style.animationName = "shake";
        break;
        case incis[0].style.display == "flex":
            cartasi[1].style.animationName = "shake";
        break;
    }
    inijog();
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
        case inc2.style.display == "flex" && alvo == 2 && inc3.style.display == "flex" && inc4.style.display == "flex" && inc5.style.display == "flex":
            alvo -= 1;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc3.style.display == "flex" && inc4.style.display == "flex":
            alvo += 3;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc3.style.display == "flex":
            alvo += 2;
        break;
        case inc2.style.display == "flex" && alvo == 2 && inc3.style.display != "flex":
            alvo += 1;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc1.style.display == "flex" && inc2.style.display == "flex":
            alvo += 1;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc2.style.display == "flex":
            alvo -= 2;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc4.style.display == "flex":
            alvo += 2;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc2.style.display != "flex":
            alvo -= 1;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display == "flex" && inc2.style.display == "flex" && inc1.style.display == "flex":
            alvo += 1;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 3;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc3.style.display == "flex":
            alvo -= 2;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc5.style.display == "flex":
            alvo -= 1;
        break;
        case inc4.style.display == "flex" && alvo == 4 && inc5.style.display != "flex":
            alvo += 1;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc4.style.display == "flex" && inc3.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 4;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc3.style.display == "flex" && inc4.style.display == "flex":
            alvo -= 3;
        break;
        case inc5.style.display == "flex" && alvo == 5 && inc4.style.display == "flex":
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
        case cartasi[0].style.animationName == "shake" && incis[1].style.display != "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[1].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display != "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display != "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display != "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display == "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display != "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            alvos();
            rolar();
        break;
        case cartasi[5].style.animationName == "shake" && incis[6].style.display != "flex":
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
    if(incis[0].style.display != "flex") {
    mirac1.style.display = "block";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
    ttl();
    }
    else {
        cartasi[0].removeEventListener("click", apcdado);
    }
}

function c2() {
    if(incis[1].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "block";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
    ttl();
}
else {
    cartasi[1].removeEventListener("click", apcdado);
}
}
function c3() {
    if(incis[2].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "block";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
    ttl();
}
else {
    cartasi[2].removeEventListener("click", apcdado);
}
}
function c4() {
    if(incis[3].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "block";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
    ttl();
}
else {
    cartasi[3].removeEventListener("click", apcdado);
}
}
function c5() {
    if(incis[4].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "block";
    mirac6.style.display = "none";
    mirac7.style.display = "none";
    ttl();
}
else {
    cartasi[4].removeEventListener("click", apcdado);
}
}
function c6() {
    if(incis[5].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "block";
    mirac7.style.display = "none";
    ttl();
}
else {
    cartasi[5].removeEventListener("click", apcdado);
}
}
function c7() {
    if(incis[6].style.display != "flex") {
    mirac1.style.display = "none";
    mirac2.style.display = "none";
    mirac3.style.display = "none";
    mirac4.style.display = "none";
    mirac5.style.display = "none";
    mirac6.style.display = "none";
    mirac7.style.display = "block";
    ttl();
}
else {
    cartasi[6].removeEventListener("click", apcdado);
}
}

function btd(e) {
    limp();
    apcdado();
    dado.style.display = "none";
    e.preventDefault(); 
}

function rmvbtd(e) {
    e.preventDefault(); 
}

window.addEventListener("contextmenu", btd, false);

function mira() {
    cartai1.addEventListener("mouseover", c1);
    cartai2.addEventListener("mouseover", c2);
    cartai3.addEventListener("mouseover", c3);
    cartai4.addEventListener("mouseover", c4);
    cartai5.addEventListener("mouseover", c5);
    cartai6.addEventListener("mouseover", c6);
    cartai7.addEventListener("mouseover", c7);
}
function apcdado() {
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
    }

for (let i = 0; i < cartasi.length; i++) {
    cartasi[i].addEventListener("click", apcdado);
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
        hpt = Math.floor(vidac1.textContent - danototal * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal * rest);
        hpt3 = Math.floor(vidac3.textContent - danototal * rest);
        hpt4 = Math.floor(vidac4.textContent - danototal * rest);
        hpt5 = Math.floor(vidac5.textContent - danototal * rest);
        hpt6 = Math.floor(vidac6.textContent - danototal * rest);
        hpt7 = Math.floor(vidac7.textContent - danototal * rest);
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
            incinimigo();
            turnoini();
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta2.style.animationName = "unset";
            incinimigo();
            turnoini();
        break;
        case cta3.style.animationName == "shake" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            incinimigo();
            turnoini();
        break;
        case cta4.style.animationName == "shake" && inc5.style.display == "flex":
            cta4.style.animationName = "unset";
            incinimigo();
            turnoini();
        break;
        case cta1.style.animationName == "shake" && inc2.style.display != "flex":
            cta1.style.animationName = "unset";
            cta2.style.animationName = "shake";
            btns.style.bottom = "5vh";
            per = 2;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta1.style.animationName = "unset";
            cta5.style.animationName = "shake";
            btns.style.bottom = "5vh";
            per = 5;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex":
            cta1.style.animationName = "unset";
            cta4.style.animationName = "shake";
            btns.style.bottom = "5vh";
            per = 4;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display == "flex":
            cta1.style.animationName = "unset";
            cta3.style.animationName = "shake";
            btns.style.bottom = "5vh";
            per = 3;
        break;
        case cta1.style.animationName != "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta1.style.animationName = "shake";
            per = 1;
        break;
        case cta1.style.animationName == "shake" && inc2.style.display != "flex":
            cta1.style.animationName = "unset";
            cta2.style.animationName = "shake";
            per = 2;
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta2.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 5;
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex":
            cta2.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
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
        case cta3.style.animationName == "shake" && inc1.style.display == "flex" && inc2.style.display == "flex" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 5;
        break;
        case cta3.style.animationName == "shake" && inc1.style.display == "flex" && inc2.style.display == "flex":
            cta3.style.animationName = "unset";
            cta4.style.animationName = "shake";
            per = 4;
        break;
        case cta3.style.animationName != "shake" && cta2.style.animationName != "shake" && cta1.style.animationName != "shake" && cta4.style.animationName != "shake" && cta5.style.animationName != "shake":
            cta3.style.animationName = "shake";
            per = 3;
        break;
        case cta3.style.animationName == "shake" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            cta5.style.animationName = "shake";
            per = 5;
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
            per = 5;
        break;
        case cta5.style.animationName != "shake" && inc1.style.display == "flex" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex":
            cta5.style.animationName = "shake";
            per = 5;
            incinimigo();
            turnoini();
        break;
        case cta5.style.animationName == "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta1.style.animationName != "shake":
            cta5.style.animationName = "unset";
            incinimigo();
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
            incinimigo();
            turnoini();
        break;
    }
    personagem();
}
    }
}

function rolar() {
    window.removeEventListener("contextmenu", btd, false);
    window.addEventListener("contextmenu", rmvbtd, false);
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
        amuletos();
        window.addEventListener("contextmenu", btd, false);
        if(!turnoa) {
            sons[2].currentTime = 0.5;
            sons[2].play();
        }
        else {
        switch (per) {
            case 1:
                if(armas[0] == perdeneira || armas[0] == pistola || armas[0] == mosquete) {
                    audios[1].currentTime = 0.5;
                }
                audios[0].play();
            break;
            case 2:
                if(armas[1] == perdeneira || armas[1] == pistola || armas[1] == mosquete) {
                    audios[1].currentTime = 0.5;
                }
                audios[1].play();
            break;
            case 3:
                if(armas[2] == perdeneira || armas[2] == pistola || armas[2] == mosquete) {
                    audios[1].currentTime = 0.5;
                }
                audios[2].play();
            break;
            case 4:
                if(armas[3] == perdeneira || armas[3] == pistola || armas[3] == mosquete) {
                    audios[1].currentTime = 0.5;
                }
                audios[3].play();
            break;
            case 5:
                if(armas[4] == perdeneira || armas[4] == pistola || armas[4] == mosquete) {
                    audios[1].currentTime = 0.5;
                }
                audios[4].play();
            break;
        }
    }
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
        danototalini = 0;
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