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
    if(habatv == 0) {
    for(i = 0; i < miras.length; i++) {
        miras[i].style.display = "none";
    }
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
    for(i = 0; i < sons.length; i++) {
        musica[i].volume = sldm.value / 100;
    }
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
    musicas();
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
    case mirac1.style.display == "block" && danototalini == danttl1:
        danototalini *= 1.50;
        danoc1.textContent = Math.floor(danototalini);
    break;
    case mirac2.style.display == "block" && danototalini == danttl2:
        danototalini *= 1.50;
        danoc2.textContent = Math.floor(danototalini);
    break;
    case mirac3.style.display == "block" && danototalini == danttl3:
        danototalini *= 1.50;
        danoc3.textContent = Math.floor(danototalini);
    break;
    case mirac4.style.display == "block" && danototalini == danttl4:
        danototalini *= 1.50;
        danoc4.textContent = Math.floor(danototalini);
    break;
    case mirac5.style.display == "block" && danototalini == danttl5:
        danototalini *= 1.50;
        danoc5.textContent = Math.floor(danototalini);
    break;
    case mirac6.style.display == "block" && danototalini == danttl6:
        danototalini *= 1.50;
        danoc6.textContent = Math.floor(danototalini);
    break;
    case mirac7.style.display == "block" && danototalini == danttl7:
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

function personagem() {
    switch(per) {
        case 1:
            if(habatv == 0) {
                danototal = dans1;
            }
            else {
                danototal = dans1 * 1.50;
            }
        break;
        case 2:
            if(habatv == 0) {
                danototal = dans2;
            }
            else {
                danototal = danototalp2;
            }
        break;
        case 3:
            if(habatv == 0) {
                danototal = dans3;
            }
            else {
                danototal = danototalp3;
            }
        break;
        case 4:
            if(habatv == 0) {
                danototal = dans4;
            }
            else {
                danototal = danototalp4;
            }
        break;
        case 5:
            if(habatv == 0) {
                danototal = dans5;
            }
            else {
                danototal = danototalp5;
            }
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

function ulitens() {
    utitensct.style.display = "flex";
    setTimeout(() => {
        utitensct.style.opacity = "1";
    }, 50)
}

fechar.addEventListener("click", () => {
    utitensct.style.opacity = "0";
    utitensct.style.display = "flex";
    setTimeout(() => {
        utitensct.style.display = "none";
    }, 500)
})

itens.addEventListener("click", ulitens);

function atacando() {
    if(habatv == 0 || per == 1) {
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
else {
    atacar.addEventListener("click", rvmatq);
    cog.style.opacity = "0";
    mirando = true;
    ttl();
    dado.style.display = "flex";
    damage.style.visibility = "visible";
    damage.style.right = "0vh";
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
    habatv = 0;
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
        }, 50)
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

function inijog() {
    rd = setInterval(rodar, 2000);
}

function rmvcnmira() {
    ctas[1].removeEventListener("mouseover", cnf1);
    ctas[2].removeEventListener("mouseover", cnf2);
    ctas[3].removeEventListener("mouseover", cnf3);
    ctas[4].removeEventListener("mouseover", cnf4);
}

function btd(e) {
    limp();
    apcdado();
    rmvcnmira();
    if(cool1 == 5 && per == 1) {
        cool1 = 0;
    }
    if(per == 1) {
        for (let i = 0; i < cartasi.length; i++) {
            miras[i].style.display = "none";
        }
        habatv = 0;
    }
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
    dado.style.display = "none";
    e.preventDefault(); 
}

window.addEventListener("contextmenu", btd, false);

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
        if(ctas[0].style.animationName == "shake" && cool.style.display == "flex" && per == 1) {
            cool1--;
        }
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
    if(turnoa && usandoc == false && habatv == 0) {
        dano();
    }
    else if(turnoa && usandoc == false && habatv == 1) {
        Comm();
    }
    else if(usandoc == true) {
        setTimeout(() => {
            atqcanhao();
        }, 1000);
    }
    else if(usandoci == true) {
        atqcanhao();
    }
    else if(usandoci == false && !turnoa) {
        danoinimigo();
    }
    if(numdado == 1 || numdado == 2 || numdado == 3){
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }

    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }

    else if (numdado == 16 || numdado == 17 || numdado == 18){
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }

    else if (numdado == 19 || numdado == 20){
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
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