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
const ctinisel = document.querySelector(".ctinisel");
const cog = document.querySelector("#cog");
const options = document.querySelector(".options");
const resume = document.querySelector("#resume");
const sldm = document.querySelector("#sldm");
const slds = document.querySelector("#slds");
const armasatl = document.querySelector("#armasatl");
const armaatl = document.querySelector(".armaatl");
const num = document.querySelector(".num");
const ammo = document.querySelector("#ammo");
const mun = document.querySelector(".mun");
const opcnn = document.querySelector("#opcnn");
const cn1 = document.querySelector("#cn1");
const cn2 = document.querySelector("#cn2");
const cn3 = document.querySelector("#cn3");
const cn4 = document.querySelector("#cn4");
const vidabarcoa = document.querySelector("#vidabarcoa");
const vidabarcoi = document.querySelector("#vidabarcoi");
const nv1i = document.querySelector("#nv1i");
const nv2i = document.querySelector("#nv2i");
const nv3i = document.querySelector("#nv3i");
const nv1 = document.querySelector("#nv1");
const nv2 = document.querySelector("#nv2");
const nv3 = document.querySelector("#nv3");
const cn1i = document.querySelector("#cn1i");
const cn2i = document.querySelector("#cn2i");
const cn3i = document.querySelector("#cn3i");
const cn4i = document.querySelector("#cn4i");
const cn5i = document.querySelector("#cn5i");
const cn6i = document.querySelector("#cn6i");
const cn7i = document.querySelector("#cn7i");
const hab = document.querySelector(".hab");
const ichab = document.querySelector("#ichab");
const estatq = document.querySelector(".estatq");
const est = document.querySelector("#est");

const coronhada = 10;
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
let munp1;
let munp2 = 3;
let munp3;
let munp4;
let munp5 = 3;
let mrcanhao = false;
let usandoc = false;
let canhaodmg = 230;
let canhaoexpdmg = 550;
let nvil = 0;
let vidaa = vidabarcoa.textContent;
let vidai = vidabarcoi.textContent;
let canhoneiro;
let usandoci = false;
let nvila = 0;

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

const cns = [cn1, cn2, cn3, cn4];
const cnis = [cn1i, cn2i, cn3i, cn4i, cn5i, cn6i, cn7i];
const ctas = [cta1, cta2, cta3, cta4, cta5];
const incs = [inc1, inc2, inc3, inc4, inc5];
const muns = [munp1, munp2, munp3, munp4, munp5];
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

function cnf1() {
    if(incs[1].style.display != "flex") {
        cn1.style.display = "flex";
        cn2.style.display = "none";
        cn3.style.display = "none";
        cn4.style.display = "none";
    }
}
function cnf2() {
    if(incs[2].style.display != "flex") {
        cn1.style.display = "none";
        cn2.style.display = "flex";
        cn3.style.display = "none";
        cn4.style.display = "none";
    }
}
function cnf3() {
    if(incs[3].style.display != "flex") {
        cn1.style.display = "none";
        cn2.style.display = "none";
        cn3.style.display = "flex";
        cn4.style.display = "none";
    }
}
function cnf4() {
    if(incs[4].style.display != "flex") {
        cn1.style.display = "none";
        cn2.style.display = "none";
        cn3.style.display = "none";
        cn4.style.display = "flex";
    }
}

function cannon() {
    ctas[1].addEventListener("mouseover", cnf1);
    ctas[2].addEventListener("mouseover", cnf2);
    ctas[3].addEventListener("mouseover", cnf3);
    ctas[4].addEventListener("mouseover", cnf4);
    ctas[1].addEventListener("click", lockcn);
    ctas[2].addEventListener("click", lockcn);
    ctas[3].addEventListener("click", lockcn);
    ctas[4].addEventListener("click", lockcn);
}

function lockcn() {
    ctas[1].removeEventListener("click", lockcn);
    ctas[2].removeEventListener("click", lockcn);
    ctas[3].removeEventListener("click", lockcn);
    ctas[4].removeEventListener("click", lockcn);
    rmvcnmira();
    vez.style.top = "2vh";
    vez.style.backgroundColor = "rgba(0, 0, 255, 0.842)";
    mrcanhao = false;
}

function limpcn() {
    cn1.style.display = "none";
    cn2.style.display = "none";
    cn3.style.display = "none";
    cn4.style.display = "none";
}

function limp() {
    for(i = 0; i < miras.length; i++) {
        miras[i].style.display = "none";
    }
    vez.style.top = "2vh";
    mrcanhao = false;
    vez.style.backgroundColor = "rgba(0, 0, 255, 0.842)";
    damage.style.right = "30vh";
    setTimeout(() => {
        damage.style.visibility = "hidden";
    }, 100)
    mirando = false;
    total.textContent = "---";
    atacar.addEventListener("click", rvmatq);
}

function canhaoadv() {
    canhoneiro = Math.floor(Math.random() * 7) + 1;
    switch(canhoneiro) {
        case 1:
            cn1i.style.display = "flex";
        break;
        case 2:
            cn2i.style.display = "flex";
        break;
        case 3:
            cn3i.style.display = "flex";
        break;
        case 4:
            cn4i.style.display = "flex";
        break;
        case 5:
            cn5i.style.display = "flex";
        break;
        case 6:
            cn6i.style.display = "flex";
        break;
        case 7:
            cn7i.style.display = "flex";
        break;
    }
}

canhaoadv();

sldm.oninput = () => {
    bgmusic.volume = sldm.value / 100;
}
slds.oninput = () => {
    for(i = 0; i < sons.length; i++) {
        sons[i].volume = slds.value / 100;
    }
}

function ttl() {
    total.textContent = Math.floor(danototal * rest);
}

btncom.addEventListener("click", () => {
    ctinisel.style.display = "none";
    bgmusic.play();
})

atacar.addEventListener("click", rvmatq);

function trocatxt() {
    switch(true) {
        case mrcanhao:
            vez.style.backgroundColor = "rgba(0, 50, 155, 0.842)";
            veztxt.textContent = "Escolha o Operador";
        break;
        case mirando:
            veztxt.textContent = "Escolha o Alvo";
        break;
        case cta1.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Turno de Barbarovsk";
        break;
        case cta2.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Turno de Crowly";
        break;
        case cta3.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Turno de Lysa";
        break;
        case cta4.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Turno de Darban";
        break;
        case cta5.style.animationName == "shake":
            vez.style.display = "flex";
            veztxt.textContent = "Turno de Gabriele";
        break;
        case !turnoa:
            vez.style.display = "none";
        break;
    }
}

cog.addEventListener("click", () => {
    if(cog.style.rotate != "90deg") {
        cog.style.rotate = "90deg";
        if(options.style.display != "flex") {
            options.style.display = "flex";
            setTimeout(() => {
                options.style.opacity = "1";
            }, 50)
        }
    } 
})

function amuletos() {
    twelve = Math.floor(Math.random() * 5) + 1;
    if(twelve == 5) {
    switch(true) {
    case mirac1.style.display == "block" :
        danototalini *= 1.50;
        danoc1.textContent = Math.floor(danototalini);
    break;
    case mirac2.style.display == "block" :
        danototalini *= 1.50;
        danoc2.textContent = Math.floor(danototalini);
    break;
    case mirac3.style.display == "block" :
        danototalini *= 1.50;
        danoc3.textContent = Math.floor(danototalini);
    break;
    case mirac4.style.display == "block" :
        danototalini *= 1.50;
        danoc4.textContent = Math.floor(danototalini);
    break;
    case mirac5.style.display == "block" :
        danototalini *= 1.50;
        danoc5.textContent = Math.floor(danototalini);
    break;
    case mirac6.style.display == "block" :
        danototalini *= 1.50;
        danoc6.textContent = Math.floor(danototalini);
    break;
    case mirac7.style.display == "block" :
        danototalini *= 1.50;
        danoc7.textContent = Math.floor(danototalini);
    break;
    }
}
}

opcnn.addEventListener("click", () => {
    mrcanhao = true;
    ordem.style.opacity = "0";
    setTimeout(() => {
        ordem.style.display = "none";
    }, 250)
    vez.style.top = "50vh";
    cannon();
})

function odm() {
    if(ordem.style.display != "flex") {
        ordem.style.display = "flex";
        limp();
        apcdado();
        rmvcnmira();
        dado.style.display = "none";
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
            limpcn();
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
        cog.style.opacity = "0";
        setTimeout(() => {
            cog.style.display = "none";
        }, 200)
    }
    else {
        cog.style.opacity = "1";
        setTimeout(() => {
        cog.style.display = "block";
        }, 200)
    }
    if(!turnoa) {
        dado.style.height = "25vh";
        dado.style.width = "35vh";
        num.style.height = "20vh";
    }
    else {
        dado.style.height = "40vh";
        dado.style.width = "40vh";
        num.style.height = "30vh";
    }
    for (let i = 0; i < muns.length; i++) {
        if(muns[i] == 0 && per == i + 1) {
            armas[i] = coronhada;
            for(let i = 0; i < niveis.length; i++) {
                switch (niveis[i].textContent) {
                    case "NV: I":
                        danos[i] = armas[i];
                        dns[i].textContent = Math.floor(armas[i]);
                    break;
                    case "NV: II":
                        danos[i] = 10 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 10);
                    break;
                    case "NV: III":
                        danos[i] = 25 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 25);
                    break;
                    case "NV: IV":
                        danos[i] = 45 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 45);
                    break;
                    case "NV: V":
                        danos[i] = 65 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 65);
                    break;
                    case "NV: VI":
                        danos[i] = 95 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 95);
                    break;
                    case "NV: VII":
                        danos[i] = 130 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 130);
                    break;
                    case "NV: VIII":
                        danos[i] = 170 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 170);
                    break;
                    case "NV: IX":
                        danos[i] = 215 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 215);
                    break;
                    case "NV: X":
                        danos[i] = 265 + armas[i];
                        dns[i].textContent = Math.floor(armas[i] + 265);
                    break;
                }
            }
        }
    }
}, 10)

setInterval(() => {
    if(per != 1) {
        ordenar.style.display = "none";
        hab.style.bottom = "-20vh";
        btns.style.bottom = "11vh";
    }
    else {
        ordenar.style.display = "block";
        hab.style.bottom = "-11vh";
        btns.style.bottom = "20vh";
    }
    for (let i = 0; i < armas.length; i++) {
    switch(true) {
        case per == i + 1 && armas[i] == coronhada:
            armasatl.textContent = "Coronhada";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == punhal:
            armasatl.textContent = "Punhal";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == rapieira:
            armasatl.textContent = "Rapieira";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == sabre:
            armasatl.textContent = "Sabre";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == mosquete:
            armasatl.textContent = "Mosquete";
            mun.style.display = "flex";
            ammo.textContent = `Munição: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == perdeneira:
            armasatl.textContent = "Perdeneira";
            mun.style.display = "flex";
            ammo.textContent = `Munição: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == besta:
            armasatl.textContent = "Besta";
            mun.style.display = "flex";
            ammo.textContent = `Virotes: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == machado:
            armasatl.textContent = "Machado";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == pistola:
            armasatl.textContent = "Pistola";
            mun.style.display = "flex";
            ammo.textContent = `Munição: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == granada:
            armasatl.textContent = "Granada";
            mun.style.display = "flex";
            ammo.textContent = `Quantidade: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == adaga:
            armasatl.textContent = "Adaga Dupla";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == molotov:
            armasatl.textContent = "Coquetel Molotov";
            mun.style.display = "flex";
            ammo.textContent = `Quantidade: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == nock:
            armasatl.textContent = "Espingarda Nock";
            mun.style.display = "flex";
            ammo.textContent = `Munição: x${muns[i]}`;
        break;
        case per == i + 1 && armas[i] == arpão:
            armasatl.textContent = "Mini-Arpão";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == foice:
            armasatl.textContent = "Foice Curta";
            mun.style.display = "none";
        break;
        case per == i + 1 && armas[i] == espada:
            armasatl.textContent = "Espada Congelada";
            mun.style.display = "none";
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
    switch (true) {
        case ctas[1].style.animationName == "shake" && cn1.style.display == "flex":
            usandoc = true;
        break;
        case ctas[2].style.animationName == "shake" && cn2.style.display == "flex":
            usandoc = true;
        break;
        case ctas[3].style.animationName == "shake" && cn3.style.display == "flex":
            usandoc = true;
        break;
        case ctas[4].style.animationName == "shake" && cn4.style.display == "flex":
            usandoc = true;
        break;
        default:
            usandoc = false;
    }
    switch (true) {
        case cn1i.style.display == "flex" && ini == 1:
            usandoci = true;
        break;
        case cn2i.style.display == "flex" && ini == 2:
            usandoci = true;
        break;
        case cn3i.style.display == "flex" && ini == 3:
            usandoci = true;
        break;
        case cn4i.style.display == "flex" && ini == 4:
            usandoci = true;
        break;
        case cn5i.style.display == "flex" && ini == 5:
            usandoci = true;
        break;
        case cn6i.style.display == "flex" && ini == 6:
            usandoci = true;
        break;
        case cn7i.style.display == "flex" && ini == 7:
            usandoci = true;
        break;
        default:
            usandoci = false;
    }
    if(vidabarcoi.textContent <= 0) {
        nv1i.style.backgroundColor = "#fcf003";
    }
    if(vidabarcoa.textContent <= 0) {
        nv1.style.backgroundColor = "#fcf003";
    }
    if(vidabarcoi.textContent < vidai) {
        vidabarcoi.style.color = "#ed9d9d";
    }
    if(vidabarcoa.textContent < vidaa) {
        vidabarcoa.style.color = "#ed9d9d";
    }
    switch(per) {
        case 1:
            hab.style.backgroundColor = "#ffd952";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/855/855059.png";
        break;
        case 2:
            hab.style.backgroundColor = "#3084cf";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/2851/2851844.png";
        break;
        case 3:
            hab.style.backgroundColor = "#cf30ca";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/15532/15532570.png";
        break;
        case 4:
            hab.style.backgroundColor = "#cf303d";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/5246/5246522.png";
        break;
        case 5:
            hab.style.backgroundColor = "#30cf9d";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/139/139776.png";
        break;
    }
}, 10)

setInterval(() => {
    if(vidabarcoi.textContent <= 0) {
        vidabarcoi.textContent = 0;
    }
    if(vidabarcoa.textContent <= 0) {
        vidabarcoa.textContent = 0;
    }
}, 0)

function atqcanhao() {
    if(usandoci == false) {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg + 50);
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg + 20);
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg);
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg - 20);
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }

    else if (numdado == 19 || numdado == 20){
        vidabarcoi.style.color = "#ed9d9d";
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg - 50);
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
    }
}
else {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg + 50);
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg + 20);
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg);
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg - 20);
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }

    else if (numdado == 19 || numdado == 20){
        vidabarcoa.style.color = "#ed9d9d";
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg - 50);
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
    }
}
}

function atacando() {
    atacar.addEventListener("click", rvmatq);
    if(mrcanhao == true) {
        limpcn();
    }
    rmvcnmira();
    if(usandoc == false) {
    mirando = true;
    if(ordem.style.display == "flex") {
        ordem.style.opacity = "0";
        setTimeout(() => {
            ordem.style.display = "none";
        }, 250)
    }
    roll.style.visibility = "visible";
    estatq.style.display = "none";
    numdado = 0;
    rolln.textContent = numdado;
    vez.style.top = "40vh";
    mrcanhao = false;
    vez.style.backgroundColor = "rgba(255, 0, 0, 0.842)";
    damage.style.visibility = "visible";
    damage.style.right = "0vh";
    mira();
}
else {
    dado.style.display = "flex";
}
}

function rvmatq() {
    numdado = 0;
    rolln.textContent = numdado;
    atacar.removeEventListener("click", rvmatq);
    atacando();
}

resume.addEventListener("click", () => {
    cog.style.rotate = "0deg";
    if(options.style.display == "flex") {
        options.style.opacity = "0";
        setTimeout(() => {
            options.style.display = "none";
        }, 250)
    }
})

function turnoini() {
    afunali();
    turnoa = false;
    btns.style.display = "none";
    armaatl.style.display = "none";
    switch(true) {
        case incis[0].style.display != "flex":
            cartasi[0].style.animationName = "shake";
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
    dado.style.display = "flex";
    estatq.style.display = "flex";
    rolar();
    if(usandoci == false) {
        setTimeout(() => {
        alvos();
        danoinimigo();
        }, 15)
    }
}

function alvos() {
    if(usandoci == false) {
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
        case inc3.style.display == "flex" && alvo == 3 && inc4.style.display == "flex":
            alvo += 2;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc4.style.display != "flex":
            alvo += 1;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc4.style.display == "flex" && inc5.style.display == "flex" && inc2.style.display == "flex":
            alvo -= 2;
        break;
        case inc3.style.display == "flex" && alvo == 3 && inc4.style.display == "flex" && inc5.style.display == "flex":
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
}

function rodar() {
    roll.style.visibility = "hidden";
    estatq.style.display = "flex";
    switch (true) {
        case cartasi[0].style.animationName == "shake" && inci7.style.display == "flex" && inci6.style.display == "flex" && inci5.style.display == "flex" && inci4.style.display == "flex" && inci3.style.display == "flex" && inci2.style.display == "flex":
            cartasi[0].style.animationName = "unset";
            afunini();
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
        case cartasi[1].style.animationName == "shake" && inci7.style.display == "flex" && inci6.style.display == "flex" && inci5.style.display == "flex" && inci4.style.display == "flex" && inci3.style.display == "flex":
            cartasi[1].style.animationName = "unset";
            afunini();
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
        case cartasi[2].style.animationName == "shake" && inci7.style.display == "flex" && inci6.style.display == "flex" && inci5.style.display == "flex" && inci4.style.display == "flex":
            cartasi[2].style.animationName = "unset";
            afunini();
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
        case cartasi[3].style.animationName == "shake" && inci7.style.display == "flex" && inci6.style.display == "flex" && inci5.style.display == "flex":
            cartasi[3].style.animationName = "unset";
            afunini();
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
        case cartasi[4].style.animationName == "shake" && inci7.style.display == "flex" && inci6.style.display == "flex":
            cartasi[4].style.animationName = "unset";
            afunini();
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
        case cartasi[5].style.animationName == "shake" && inci7.style.display == "flex":
            cartasi[5].style.animationName = "unset";
            afunini();
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
        case cartasi[0].style.animationName == "shake" && incis[1].style.display != "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[1].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display != "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display != "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display != "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display == "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display != "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[5].style.animationName == "shake" && incis[6].style.display != "flex":
            cartasi[5].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            setTimeout(() => {
                alvos();
            }, 15)
            rolar();
        break;
        case cartasi[6].style.animationName == "shake":
            cartasi[6].style.animationName = "unset";
            if(usandoci == true) {
                atqcanhao();
                usandoci = false;
            }
            afunini();
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

function afunali() {
    if(nvila == 3) {
        for (let i = 0; i < incs.length; i++) {
            incs[i].style.display = "flex";
        }
    }
    switch (true) {
        case vidabarcoa.textContent <= 0 && nv2.style.backgroundColor != "unset" && nvila == 2:
            nv3.style.backgroundColor = "#fc0303";
            nvila = 3;
        break;
        case vidabarcoa.textContent <= 0 && nv1.style.backgroundColor != "unset":
            nv2.style.backgroundColor = "#fc6f03";
            nvila = 2;
        break;
    }
}

function afunini() {
    if(nvil == 3) {
        for (let i = 0; i < incis.length; i++) {
            incis[i].style.display = "flex";
        }
    }
    switch (true) {
        case vidabarcoi.textContent <= 0 && nv2.style.backgroundColor != "unset" && nvila == 2:
            nv3.style.backgroundColor = "#fc0303";
            nvila = 3;
        break;
        case vidabarcoi.textContent <= 0 && nv1.style.backgroundColor != "unset":
            nv2.style.backgroundColor = "#fc6f03";
            nvila = 2;
        break;
    }
}

function inijog() {
    rd = setInterval(rodar, 1500);
}

function rmvcnmira() {
    ctas[1].removeEventListener("mouseover", cnf1);
    ctas[2].removeEventListener("mouseover", cnf2);
    ctas[3].removeEventListener("mouseover", cnf3);
    ctas[4].removeEventListener("mouseover", cnf4);
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
    rmvcnmira();
    if(cta1.style.animationName == "shake") {
        limpcn();
    }
    dado.style.display = "none";
    if(ordem.style.display == "flex") {
        ordem.style.opacity = "0";
        setTimeout(() => {
            ordem.style.display = "none";
        }, 250)
    }
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
            dado.style.display = "flex";
        }
    }

for (let i = 0; i < cartasi.length; i++) {
    cartasi[i].addEventListener("click", apcdado);
}

function danoinimigo() {
    if(usandoci == false) {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        hpp = vidas[0].textContent;
        hpp2 = vidas[1].textContent;
        hpp3 = vidas[2].textContent;
        hpp4 = vidas[3].textContent;
        hpp5 = vidas[4].textContent;
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        hpp = Math.floor(vidas[0].textContent - danototalini + 5 * resp1);
        hpp2 = Math.floor(vidas[1].textContent - danototalini + 5 * resp2);
        hpp3 = Math.floor(vidas[2].textContent - danototalini + 5 * resp3);
        hpp4 = Math.floor(vidas[3].textContent - danototalini + 5 * resp4);
        hpp5 = Math.floor(vidas[4].textContent - danototalini + 5 * resp5);
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        hpp = Math.floor(vidas[0].textContent - danototalini + 5 * resp1);
        hpp2 = Math.floor(vidas[1].textContent - danototalini + 5 * resp2);
        hpp3 = Math.floor(vidas[2].textContent - danototalini + 5 * resp3);
        hpp4 = Math.floor(vidas[3].textContent - danototalini + 5 * resp4);
        hpp5 = Math.floor(vidas[4].textContent - danototalini + 5 * resp5);
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        hpp = Math.floor(vidas[0].textContent - danototalini);
        hpp2 = Math.floor(vidas[1].textContent - danototalini);
        hpp3 = Math.floor(vidas[2].textContent - danototalini);
        hpp4 = Math.floor(vidas[3].textContent - danototalini);
        hpp5 = Math.floor(vidas[4].textContent - danototalini);
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }

    else if (numdado == 19 || numdado == 20){
        hpp = Math.floor(vidas[0].textContent - danototalini - 15);
        hpp2 = Math.floor(vidas[1].textContent - danototalini - 15);
        hpp3 = Math.floor(vidas[2].textContent - danototalini - 15);
        hpp4 = Math.floor(vidas[3].textContent - danototalini - 15);
        hpp5 = Math.floor(vidas[4].textContent - danototalini - 15);
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
    }
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
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if( numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        hpt = Math.floor(vidac1.textContent - danototal + 5 * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal + 5 * rest);
        hpt3 = Math.floor(vidac3.textContent - danototal + 5 * rest);
        hpt4 = Math.floor(vidac4.textContent - danototal + 5 * rest);
        hpt5 = Math.floor(vidac5.textContent - danototal + 5 * rest);
        hpt6 = Math.floor(vidac6.textContent - danototal + 5 * rest);
        hpt7 = Math.floor(vidac7.textContent - danototal + 5 * rest);
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        hpt = Math.floor(vidac1.textContent - danototal * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal * rest);
        hpt3 = Math.floor(vidac3.textContent - danototal * rest);
        hpt4 = Math.floor(vidac4.textContent - danototal * rest);
        hpt5 = Math.floor(vidac5.textContent - danototal * rest);
        hpt6 = Math.floor(vidac6.textContent - danototal * rest);
        hpt7 = Math.floor(vidac7.textContent - danototal * rest);
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        hpt = Math.floor(vidac1.textContent - danototal);
        hpt2 = Math.floor(vidac2.textContent - danototal);
        hpt3 = Math.floor(vidac3.textContent - danototal);
        hpt4 = Math.floor(vidac4.textContent - danototal);
        hpt5 = Math.floor(vidac5.textContent - danototal);
        hpt6 = Math.floor(vidac6.textContent - danototal);
        hpt7 = Math.floor(vidac7.textContent - danototal);
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }

    else if (numdado == 19 || numdado == 20){
        hpt = Math.floor(vidac1.textContent - danototal - 15);
        hpt2 = Math.floor(vidac2.textContent - danototal - 15);
        hpt3 = Math.floor(vidac3.textContent - danototal - 15);
        hpt4 = Math.floor(vidac4.textContent - danototal - 15);
        hpt5 = Math.floor(vidac5.textContent - danototal - 15);
        hpt6 = Math.floor(vidac6.textContent - danototal - 15);
        hpt7 = Math.floor(vidac7.textContent - danototal - 15);
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
    }
}

cta1.style.animationName = "shake";

function trocar() {
    ini = 0;
    danototal = 0;
    personagem();
    roll.style.visibility = "visible";
    estatq.style.display = "none";
    if(roll.style.display == "none") {
        roll.style.display = "block";
        estatq.style.display = "none";
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
    estatq.style.display = "flex";
    numdado = Math.floor(Math.random() * 20) + 1;
    rolln.textContent = numdado;
    if(turnoa && usandoc == false) {
        dano();
    }
    else if(usandoc == true) {
        setTimeout(() => {
            atqcanhao();
        }, 1000);
    }
    else if(usandoci == true) {
        atqcanhao();
    }
    else if(usandoci == false) {
        danoinimigo();
    }
    dado.style.display = "flex";
    setTimeout(() => {
        dado.style.display = "none";
        for (let i = 0; i < cartasi.length; i++) {
            if(danototalini > 135 && ini == i + 1) {
                danototalini = 135;
                danoini[i].textContent = danototalini;
            } 
        }
        amuletos();
        window.addEventListener("contextmenu", btd, false);
        if(!turnoa) {
            if(usandoci == false) {
                sons[2].currentTime = 0.5;
                sons[2].play();
            }
            else {
                sons[3].play();
            }
        }
        else {
            if(usandoc == false) {
        switch (per) {
            case 1:
                if(armas[0] == perdeneira || armas[0] == pistola || armas[0] == mosquete) {
                    audios[1].currentTime = 0.5;
                    muns[0]--;
                }
                if(armas[0] == besta || armas[0] == molotov || armas[0] == granada || armas[0] == nock) {
                    muns[0]--;
                }
                audios[0].play();
            break;
            case 2:
                if(armas[1] == perdeneira || armas[1] == pistola || armas[1] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp1 != 0) {
                        muns[1]--;
                    }
                }
                if(armas[1] == besta || armas[1] == molotov || armas[1] == granada || armas[1] == nock) {
                    if(munp1 != 0) {
                        muns[1]--;
                    }
                }
                audios[1].play();
            break;
            case 3:
                if(armas[2] == perdeneira || armas[2] == pistola || armas[2] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp2 != 0) {
                        muns[2]--;
                    }
                }
                if(armas[2] == besta || armas[2] == molotov || armas[2] == granada || armas[2] == nock) {
                    if(munp2 != 0) {
                        muns[2]--;
                    }
                }
                audios[2].play();
            break;
            case 4:
                if(armas[3] == perdeneira || armas[3] == pistola || armas[3] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp3 != 0) {
                        muns[3]--;
                    }
                }
                if(armas[3] == besta || armas[3] == molotov || armas[3] == granada || armas[3] == nock) {
                    if(munp3 != 0) {
                        muns[3]--;
                    }
                }
                audios[3].play();
            break;
            case 5:
                if(armas[4] == perdeneira || armas[4] == pistola || armas[4] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp4 != 0) {
                        muns[4]--;
                    }
                }
                if(armas[4] == besta || armas[4] == molotov || armas[4] == granada || armas[4] == nock) {
                    if(munp4 != 0) {
                        muns[4]--;
                    }
                }
                audios[4].play();
            break;
        }
    }
    else {
        sons[3].play();
    }
    }
        if(turnoa) {
            roll.style.display = "block";
            estatq.style.display = "none";
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
    else if(usandoci == false) {
        danototalini = 0;
        switch (alvo) {
            case 1:
                roll.style.visibility = "hidden";
                estatq.style.display = "flex";
                    vidac1a.textContent = hpp;
                    limp();
            break;
            case 2:
                roll.style.visibility = "hidden";
                estatq.style.display = "flex";
                    vidac2a.textContent = hpp2;
                    limp();
            break;
            case 3:
                roll.style.visibility = "hidden";
                estatq.style.display = "flex";
                    vidac3a.textContent = hpp3;
                    limp();
            break;
            case 4:
                roll.style.visibility = "hidden";
                estatq.style.display = "flex";
                    vidac4a.textContent = hpp4;
                    limp();
            break;
            case 5:
                roll.style.visibility = "hidden";
                estatq.style.display = "flex";
                    vidac5a.textContent = hpp5;
                    limp();
            break;
        }
    }
        trocar();
    }, 1000)
}

roll.addEventListener("click", rolar);