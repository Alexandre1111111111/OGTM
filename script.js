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
    if(veztxt.textContent == "Escolha o Operador") {
        cn1.style.display = "none";
        cn2.style.display = "none";
        cn3.style.display = "none";
        cn4.style.display = "none";
    }
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
    damage.style.visibility = "hidden";
    mirando = false;
    total.textContent = "---";
    atacar.addEventListener("click", rvmatq);
}

function canhaoadv() {
    canhoneiro = Math.floor(Math.random() * 7) + 1;
    if(chefe > 0 && canhoneiro == 1) {
        canhaoadv();
    }
    switch (horda) {
        case 1:
            if(canhoneiro == 1 || canhoneiro == 2 || canhoneiro == 6 || canhoneiro == 7) {
                canhaoadv();
            }
        break;
    }
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
    for (let i = 0; i < rests.length; i++) {
        if(miras[i].style.display == "block") {
            total.textContent = Math.floor(danototal * rests[i]);
        }
    }
}

btncom.addEventListener("click", () => {
    danttls[0] = danoini[0].textContent * 1;
    danttls[1] = danoini[1].textContent * 1;
    danttls[2] = danoini[2].textContent * 1;
    danttls[3] = danoini[3].textContent * 1;
    danttls[4] = danoini[4].textContent * 1;
    danttls[5] = danoini[5].textContent * 1;
    danttls[6] = danoini[6].textContent * 1;
    switch (horda) {
        case 1:
            cartai1.style.display = "none";
            cartai2.style.display = "none";
            cartai6.style.display = "none";
            cartai7.style.display = "none";
        break;
        case 2:
            cartai1.style.display = "none";
            cartai7.style.display = "none";
        break;
        case 4:
            cartai1.style.display = "none";
            cartai6.style.display = "none";
            cartai7.style.display = "none";
        break;
        case 5:
            cartai1.style.display = "none";
            cartai7.style.display = "none";
        break;
        case 6:
            cartai7.style.display = "none";
        break;
    }
    ctinisel.style.display = "none";
    vez.style.display = "flex";
    escolhendo = false;
    aliado.style.display = "block";
    inimigoc.style.display = "block";
    canhaoadv();
    musicas();
    cta1.style.animationName = "shake";
})

atacar.addEventListener("click", rvmatq);

function trocatxt() {
    switch(true) {
        case vt == true:
            vez.style.display = "none";
        break;
        case mrcanhao:
            vez.style.backgroundColor = "rgba(0, 50, 155, 0.842)";
            veztxt.textContent = "Escolha o Operador";
        break;
        case mirando && habatv == 0 || numhab == 3 || per == 1 && mirando:
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
    if(twelve == 5 && horda == 9) {
    switch(true) {
    case mirac1.style.display == "block" && danoc1.textContent == danttls[0]:
        danototalini *= 1.50;
        danoc1.textContent = Math.floor(danototalini);
    break;
    case mirac2.style.display == "block" && danoc2.textContent == danttls[1]:
        danototalini *= 1.50;
        danoc2.textContent = Math.floor(danototalini);
    break;
    case mirac3.style.display == "block" && danoc3.textContent == danttls[2]:
        danototalini *= 1.50;
        danoc3.textContent = Math.floor(danototalini);
    break;
    case mirac4.style.display == "block" && danoc4.textContent == danttls[3]:
        danototalini *= 1.50;
        danoc4.textContent = Math.floor(danototalini);
    break;
    case mirac5.style.display == "block" && danoc5.textContent == danttls[4]:
        danototalini *= 1.50;
        danoc5.textContent = Math.floor(danototalini);
    break;
    case mirac6.style.display == "block" && danoc6.textContent == danttls[5]:
        danototalini *= 1.50;
        danoc6.textContent = Math.floor(danototalini);
    break;
    case mirac7.style.display == "block" && danoc7.textContent == danttls[6]:
        danototalini *= 1.50;
        danoc7.textContent = Math.floor(danototalini);
    break;
    }
}
if(twelve == 5 && chefe == 2) {
    if(mirac1.style.display == "block" && danoc1.textContent == danttls[0]) {
        danototalini = danoc1.textContent * 1;
        danototalini *= 1.50;
        danoc1.textContent = Math.floor(danototalini);
    }
}
ten = Math.floor(Math.random() * 10) + 1;
if(ten == 10 && chefe == 2 && numdado > 3 || ten == 10 && chefe == 1 && numdado > 3) {
    switch (true) {
        case mirap1.style.display == "block" && ini == 1 && vidas[0].textContent != 0:
            inc1.style.visibility = "hidden";
            inc1.style.display = "flex";
            atordoas[0].style.display = "flex";
            duraats[0] = 1;
        break;
        case mirap2.style.display == "block" && ini == 1 && vidas[1].textContent != 0:
            inc2.style.visibility = "hidden";
            inc2.style.display = "flex";
            atordoas[1].style.display = "flex";
            duraats[1] = 1;
        break;
        case mirap3.style.display == "block" && ini == 1 && vidas[2].textContent != 0:
            inc3.style.visibility = "hidden";
            inc3.style.display = "flex";
            atordoas[2].style.display = "flex";
            duraats[2] = 1;
        break;
        case mirap4.style.display == "block" && ini == 1 && vidas[3].textContent != 0:
            inc4.style.visibility = "hidden";
            inc4.style.display = "flex";
            atordoas[3].style.display = "flex";
            duraats[3] = 1;
        break;
        case mirap5.style.display == "block" && ini == 1 && vidas[4].textContent != 0:
            inc5.style.visibility = "hidden";
            inc5.style.display = "flex";
            atordoas[4].style.display = "flex";
            duraats[4] = 1;
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
    if(cool1 == 5 && per == 1) {
        cool1 = 0;
    }
    if(cool2 == 5 && per == 2 && quantmira == 1) {
        cool2 = 0;
    }
    if(cool3 == 5 && per == 3) {
        cool3 = 0;
    }
    if(per == 1) {
        for (let i = 0; i < cartasi.length; i++) {
            miras[i].style.display = "none";
        }
        habatv = 0;
    }
    if(miraspr == true) {
        miraspr = false;
        limp();
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
        rmvcnmira();
    if(itembarco == true) {
        quants.textContent++;
    }
    else {
        quantsp.textContent++;
        switch(per) {
            case 1:
                defsp1++;
            break;
            case 2:
                defsp2++;
            break;
            case 3:
                defsp3++;
            break;
            case 4:
                defsp4++;
            break;
            case 5:
                defsp5++;
            break;
        }
    }
}
    if(ordem.style.display != "flex") {
        ordem.style.display = "flex";
        limp();
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
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
            if(gelo == false && mirac1.style.display == "block" || gelop2 == false && mirac2.style.display == "block" || gelop3 == false && mirac3.style.display == "block" || gelop4 == false && mirac4.style.display == "block" || gelop5 == false && mirac5.style.display == "block" || gelop6 == false && mirac6.style.display == "block" || gelop7 == false && mirac7.style.display == "block") {
            if(habatv == 0) {
                danototal = dans1;
            }
            else {
                danototal = dans1 * 1.50;
            }
        }
        else {
            danototal = dans1 * 1.30;
        }
        break;
        case 2:
        if(gelo == false && mirac1.style.display == "block" || gelop2 == false && mirac2.style.display == "block" || gelop3 == false && mirac3.style.display == "block" || gelop4 == false && mirac4.style.display == "block" || gelop5 == false && mirac5.style.display == "block" || gelop6 == false && mirac6.style.display == "block" || gelop7 == false && mirac7.style.display == "block") {
            if(habatv == 0) {
                danototal = dans2;
            }
            else {
                danototal = danototalp2;
            }
        }
        else {
            danototal = dans2 * 1.30;
        }
        break;
        case 3:
            if(gelo == false && mirac1.style.display == "block" || gelop2 == false && mirac2.style.display == "block" || gelop3 == false && mirac3.style.display == "block" || gelop4 == false && mirac4.style.display == "block" || gelop5 == false && mirac5.style.display == "block" || gelop6 == false && mirac6.style.display == "block" || gelop7 == false && mirac7.style.display == "block") {
            if(habatv == 0) {
                danototal = dans3;
            }
            else {
                danototal = danototalp3;
            }
        }
        else {
            danototal = dans3 * 1.30;
        }
        break;
        case 4:
            if(gelo == false && mirac1.style.display == "block" || gelop2 == false && mirac2.style.display == "block" || gelop3 == false && mirac3.style.display == "block" || gelop4 == false && mirac4.style.display == "block" || gelop5 == false && mirac5.style.display == "block" || gelop6 == false && mirac6.style.display == "block" || gelop7 == false && mirac7.style.display == "block") {
            if(habatv == 0) {
                danototal = dans4;
            }
            else {
                danototal = danototalp4;
            }
        }
        else {
            danototal = dans4 * 1.30;
        }
        break;
        case 5:
            if(gelo == false && mirac1.style.display == "block" || gelop2 == false && mirac2.style.display == "block" || gelop3 == false && mirac3.style.display == "block" || gelop4 == false && mirac4.style.display == "block" || gelop5 == false && mirac5.style.display == "block" || gelop6 == false && mirac6.style.display == "block" || gelop7 == false && mirac7.style.display == "block") {
            if(habatv == 0) {
                danototal = dans5;
            }
            else {
                danototal = danototalp5;
            }
        }
        else {
            danototal = dans5 * 1.30;
        }
        break;
    }
}

function inimigo() {
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
    rmvcrs();
    numhab = 0;
    if(cool1 == 5 && per == 1) {
        cool1 = 0;
    }
    if(cool2 == 5 && per == 2 && quantmira == 1) {
        cool2 = 0;
    }
    if(cool3 == 5 && per == 3 && hab3 == true) {
        cool3 = 0;
    }
    if(per == 1) {
        for (let i = 0; i < cartasi.length; i++) {
            miras[i].style.display = "none";
        }
        habatv = 0;
    }
    if(per == 2 && quantmira == 1) {
        dado.style.display = "none";
        numhab = 0;
        quantmira = 0;
    }
    if(miraspr == true) {
        miraspr = false;
        limp();
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
        rmvcnmira();
    if(itembarco == true) {
        quants.textContent++;
    }
    else {
        quantsp.textContent++;
        switch(per) {
            case 1:
                defsp1++;
            break;
            case 2:
                defsp2++;
            break;
            case 3:
                defsp3++;
            break;
            case 4:
                defsp4++;
            break;
            case 5:
                defsp5++;
            break;
        }
    }
}
    limp();
    utitensct.style.display = "flex";
    setTimeout(() => {
        utitensct.style.opacity = "1";
    }, 50)
    ordem.style.opacity = "0";
    setTimeout(() => {
        ordem.style.display = "none";
    }, 250)
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
    if(atacar.textContent == "Atacar" || miraspr == true) {
    area = false;
    if(miraspr == true) {
        miraspr = false;
        limp();
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
        rmvcnmira();
    if(itembarco == true) {
        quants.textContent++;
    }
    else {
        quantsp.textContent++;
        switch(per) {
            case 1:
                defsp1++;
            break;
            case 2:
                defsp2++;
            break;
            case 3:
                defsp3++;
            break;
            case 4:
                defsp4++;
            break;
            case 5:
                defsp5++;
            break;
        }
    }
}
    if(expl == true) {
        area = true;
    }
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
    roll.style.visibility = "visible";
    dado.style.display = "flex";
}
}
else {
    atacar.addEventListener("click", rvmatq);
    cog.style.opacity = "0";
    mirando = true;
    roll.style.visibility = "visible";
    ttl();
    dado.style.display = "flex";
    damage.style.visibility = "visible";
    damage.style.right = "0vh";
}
    }
    else {
        atacar.addEventListener("click", rvmatq);
        mirando = true;
        vez.style.top = "40vh";
        vez.style.backgroundColor = "rgba(255, 0, 0, 0.842)";
        mira();
    }
}

function rvmatq() {
    if(atacar.textContent == "Atacar") {
    rmvcrs();
    if(cool1 == 5 && per == 1) {
        cool1 = 0;
        habatv = 0;
    }
    if(cool2 == 5 && per == 2 && quantmira == 1) {
        cool2 = 0;
        numhab = 0;
        quantmira = 0;
    }
    if(cool3 == 5 && per == 3 && hab3 == true) {
        cool3 = 0;
        numhab = 0;
    }
    numdado = 0;
    rolln.textContent = numdado;
    atacar.removeEventListener("click", rvmatq);
    atacando();
}
else {
    atacar.textContent = "Atacar";
    prancha = true;
    tb.style.display = "flex";
    trocar();
}
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
    turnoa = false;
    habatv = 0;
    setInterval(() => {
        for (let i = 0; i < miras.length; i++) {
        switch (true) {
            case cn1i.style.display == "flex" && ini == 1:
                   miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn2i.style.display == "flex" && ini == 2:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn3i.style.display == "flex" && ini == 3:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn4i.style.display == "flex" && ini == 4:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn5i.style.display == "flex" && ini == 5:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn6i.style.display == "flex" && ini == 6:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            case cn7i.style.display == "flex" && ini == 7:
                    miras[i].style.display = "none"; 
                usandoci = true;
                armai = "canhoes";
            break;
            default:
                usandoci = false;
                armai = "mosquete";
        }
    }
    }, 0)
    afunali();
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
        if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
            prancha = true;
            tb.style.display = "flex";
            dado.style.display = "none";
        }
        else {
        setTimeout(() => {
        alvos();
        danoinimigo();
        }, 50)
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
            mnscool();
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
            mnscool();
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
            mnscool();
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
            mnscool();
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
            mnscool();
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
            mnscool();
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
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex" && incis[2].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[0].style.animationName == "shake" && incis[1].style.display == "flex":
            cartasi[0].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex" && incis[3].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display == "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[1].style.animationName == "shake" && incis[2].style.display != "flex":
            cartasi[1].style.animationName = "unset";
            cartasi[2].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex" && incis[4].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display == "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[2].style.animationName == "shake" && incis[3].style.display != "flex":
            cartasi[2].style.animationName = "unset";
            cartasi[3].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex" && incis[5].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display == "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[3].style.animationName == "shake" && incis[4].style.display != "flex":
            cartasi[3].style.animationName = "unset";
            cartasi[4].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display == "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[4].style.animationName == "shake" && incis[5].style.display != "flex":
            cartasi[4].style.animationName = "unset";
            cartasi[5].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[5].style.animationName == "shake" && incis[6].style.display != "flex":
            cartasi[5].style.animationName = "unset";
            cartasi[6].style.animationName = "shake";
            if(horda == 1 && prancha == false || horda == 2 && prancha == false || horda == 3 && prancha == false || horda == 4 && prancha == false || horda == 25 && prancha == false || horda == 6 && prancha == false || horda == 7 && prancha == false || horda == 8 && prancha == false || chefe == 1 && prancha == false || chefe == 2 && prancha == false) {
                prancha = true;
                tb.style.display = "flex";
                dado.style.display = "none";
            }
            else {
            setTimeout(() => {
                alvos();
                rolar();
            }, 100)
        }
        break;
        case cartasi[6].style.animationName == "shake":
            cartasi[6].style.animationName = "unset";
            afunini();
            mnscool();
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
    cartai1.removeEventListener("mouseover", c1);
    cartai2.removeEventListener("mouseover", c2);
    cartai3.removeEventListener("mouseover", c3);
    cartai4.removeEventListener("mouseover", c4);
    cartai5.removeEventListener("mouseover", c5);
    cartai6.removeEventListener("mouseover", c6);
    cartai7.removeEventListener("mouseover", c7);
    rmvcnmira();
    rmvcrs();
    numhab = 0;
    if(miraspr == true) {
    if(itembarco == true) {
        quants.textContent++;
    }
    else {
        quantsp.textContent++;
        switch(per) {
            case 1:
                defsp1++;
            break;
            case 2:
                defsp2++;
            break;
            case 3:
                defsp3++;
            break;
            case 4:
                defsp4++;
            break;
            case 5:
                defsp5++;
            break;
        }
    }
}
    if(escolhendo) {
        ctinisel.style.display = "flex";
        inis.style.bottom = "-55vh";
        setTimeout(() => {
            inis.style.display = "none";
        }, 300)
    }
    if(cool1 == 5 && per == 1) {
        cool1 = 0;
    }
    if(cool2 == 5 && per == 2 && quantmira == 1) {
        cool2 = 0;
    }
    if(cool3 == 5 && per == 3 && hab3 == true) {
        cool3 = 0;
    }
    if(cool4 == 7 && per == 4) {
        cool4 = 0;
    }
    if(cool5 == 6 && per == 5) {
        cool5 = 0;
    }
    if(per == 1) {
        for (let i = 0; i < cartasi.length; i++) {
            miras[i].style.display = "none";
        }
        habatv = 0;
    }
    if(per == 2 && quantmira == 1) {
        numhab = 0;
        quantmira = 0;
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

function frio() {
    for(let i = 0; i < db1s.length; i++) {
        if(miras[i].style.display == "block") {
            duraqmds[i] = -1;
            queimando[i] = false;
            db1s[i].style.display = "block";
            imgdbs[i].src = "https://cdn-icons-png.flaticon.com/512/1553/1553283.png";
            db1s[i].style.backgroundColor = "#0f191a";
            confogos[i].style.animationName = "congelado";
            gelos[i] = true;
            durafrios[i] = 3;
        }
    }
    mirando = false;
    area = false;
    limp();
}

for (let i = 0; i < cartasi.length; i++) {
    cartasi[i].addEventListener("click", apcdado);
}

function apcdado() {
        cartai1.removeEventListener("mouseover", c1);
        cartai2.removeEventListener("mouseover", c2);
        cartai3.removeEventListener("mouseover", c3);
        cartai4.removeEventListener("mouseover", c4);
        cartai5.removeEventListener("mouseover", c5);
        cartai6.removeEventListener("mouseover", c6);
        cartai7.removeEventListener("mouseover", c7);
        if(atacar.textContent == "Atacar" || miraspr == true) {
        if(area == false || expl == true) {
        if(mirac1.style.display == "block" || mirac2.style.display == "block" || mirac3.style.display == "block" || mirac4.style.display == "block" || mirac5.style.display == "block" || mirac6.style.display == "block" || mirac7.style.display == "block") {
            dado.style.display = "flex";
        }
    }
    else if(expl == false) {
        frio();
    }
}
else {
    mirando = false;
    vez.style.top = "2vh";
    vez.style.backgroundColor = "rgba(0, 0, 255, 0.842)";
    trocar();
}
}

function mnscool() {
    if(essencia == true) {
        duracri--;
    }
    if(duracri == 0 && essencia == true) {
        for (let i = 0; i < imgdbsa.length; i++) {
        if(imgdbsa[i].src == "https://cdn-icons-png.flaticon.com/512/912/912791.png") {
            db1sa[i].style.display = "none";
        }
        if(imgdbs2a[i].src == "https://cdn-icons-png.flaticon.com/512/912/912791.png") {
            db2sa[i].style.display = "none";
        }
        if(imgdbs3a[i].src == "https://cdn-icons-png.flaticon.com/512/912/912791.png") {
            db3sa[i].style.display = "none";
        }
        }
        essencia = false;
        numbuffsp1--;
        numbuffsp2--;
        numbuffsp3--;
        numbuffsp4--;
        numbuffsp5--;
    }
    if(auriano == true) {
        duraaur--;
    }
    if(aurianop2 == true) {
        duraaurp2--;
    }
    if(aurianop3 == true) {
        duraaurp3--;
    }
    if(aurianop4 == true) {
        duraaurp4--;
    }
    if(aurianop5 == true) {
        duraaurp5--;
    }
    switch (true) {
        case duraaur == 0 && imgdb.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db1.style.display == "flex":
            db1.style.display = "none";
            auriano = false;
            dans1 = Math.floor(dans1 - danoextaur);
            numbuffsp1--;
        break;
        case duraaur == 0 && imgdb2.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db2.style.display == "flex":
            db2.style.display = "none";
            auriano = false;
            dans1 = Math.floor(dans1 - danoextaur);
            numbuffsp1--;
        break;
        case duraaur == 0 && imgdb3.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db3.style.display == "flex":
            db3.style.display = "none";
            auriano = false;
            dans1 = Math.floor(dans1 - danoextaur);
            numbuffsp1--;
        break;
    }
    switch (true) {
        case duraaurp2 == 0 && imgdbp2.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db1p2.style.display == "flex":
            db1p2.style.display = "none";
            aurianop2 = false;
            dans2 = Math.floor(dans2 - danoextaur);
            numbuffsp2--;
        break;
        case duraaurp2 == 0 && imgdb2p2.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db2p2.style.display == "flex":
            db2p2.style.display = "none";
            aurianop2 = false;
            dans2 = Math.floor(dans2 - danoextaur);
            numbuffsp2--;
        break;
        case duraaurp2 == 0 && imgdb3p2.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db3p2.style.display == "flex":
            db3p2.style.display = "none";
            aurianop2 = false;
            dans2 = Math.floor(dans2 - danoextaur);
            numbuffsp2--;
        break;
    }
    switch (true) {
        case duraaurp3 == 0 && imgdbp3.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db1p3.style.display == "flex":
            db1p3.style.display = "none";
            aurianop3 = false;
            dans3 = Math.floor(dans3 - danoextaur);
            numbuffsp3--;
        break;
        case duraaurp3 == 0 && imgdb2p3.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db2p3.style.display == "flex":
            db2p3.style.display = "none";
            aurianop3 = false;
            dans3 = Math.floor(dans3 - danoextaur);
            numbuffsp3--;
        break;
        case duraaurp3 == 0 && imgdb3p3.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db3p3.style.display == "flex":
            db3p3.style.display = "none";
            aurianop3 = false;
            dans3 = Math.floor(dans3 - danoextaur);
            numbuffsp3--;
        break;
    }
    switch (true) {
        case duraaurp4 == 0 && imgdbp4.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db1p4.style.display == "flex":
            db1p4.style.display = "none";
            aurianop4 = false;
            dans4 = Math.floor(dans4 - danoextaur);
            numbuffsp4--;
        break;
        case duraaurp4 == 0 && imgdb2p4.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db2p4.style.display == "flex":
            db2p4.style.display = "none";
            aurianop4 = false;
            dans4 = Math.floor(dans4 - danoextaur);
            numbuffsp4--;
        break;
        case duraaurp4 == 0 && imgdb3p4.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db3p4.style.display == "flex":
            db3p4.style.display = "none";
            aurianop4 = false;
            dans4 = Math.floor(dans4 - danoextaur);
            numbuffsp4--;
        break;
    }
    switch (true) {
        case duraaurp5 == 0 && imgdbp5.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db1p5.style.display == "flex":
            db1p5.style.display = "none";
            aurianop5 = false;
            dans5 = Math.floor(dans5 - danoextaur);
            numbuffsp5--;
        break;
        case duraaurp5 == 0 && imgdb2p5.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db2p5.style.display == "flex":
            db2p5.style.display = "none";
            aurianop5 = false;
            dans5 = Math.floor(dans5 - danoextaur);
            numbuffsp5--;
        break;
        case duraaurp5 == 0 && imgdb3p5.src == "https://cdn-icons-png.flaticon.com/512/10570/10570191.png" && db3p5.style.display == "flex":
            db3p5.style.display = "none";
            aurianop5 = false;
            dans5 = Math.floor(dans5 - danoextaur);
            numbuffsp5--;
        break;
    }
    if(aquecida == true) {
        duraaquece--;
    }
    if(aquecidap2 == true) {
        duraaquecep2--;
    }
    if(aquecidap3 == true) {
        duraaquecep3--;
    }
    if(aquecidap4 == true) {
        duraaquecep4--;
    }
    if(aquecidap5 == true) {
        duraaquecep5--;
    }
    switch (true) {
        case duraaquece == 0 && db == 1 && db1.style.display == "flex":
            numbuffsp1--;
            db1.style.display = "none";
            aquecida = false;
            switch (true) {
                case armap1 == punhal:
                    dans1 = Math.floor(danoc1a.textContent * 1 - punhal);
                break;
                case armap1 == rapieira || armap1 == machado:
                    dans1 = Math.floor(danoc1a.textContent * 1 - rapieira);
                break;
                case armap1 == sabre:
                    dans1 = Math.floor(danoc1a.textContent * 1 - sabre);
                break;
                case armap1 == adaga:
                    dans1 = Math.floor(danoc1a.textContent * 1 - adaga);
                break;
                case armap1 == foice:
                    dans1 = Math.floor(danoc1a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquece == 0 && db == 2 && db2.style.display == "flex":
            numbuffsp1--;
            db2.style.display = "none";
            aquecida = false;
            switch (true) {
                case armap1 == punhal:
                    dans1 = Math.floor(danoc1a.textContent * 1 - punhal);
                break;
                case armap1 == rapieira || armap1 == machado:
                    dans1 = Math.floor(danoc1a.textContent * 1 - rapieira);
                break;
                case armap1 == sabre:
                    dans1 = Math.floor(danoc1a.textContent * 1 - sabre);
                break;
                case armap1 == adaga:
                    dans1 = Math.floor(danoc1a.textContent * 1 - adaga);
                break;
                case armap1 == foice:
                    dans1 = Math.floor(danoc1a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquece == 0 && db == 3 && db3.style.display == "flex":
            numbuffsp1--;
            db3.style.display = "none";
            aquecida = false;
            switch (true) {
                case armap1 == punhal:
                    dans1 = Math.floor(danoc1a.textContent * 1 - punhal);
                break;
                case armap1 == rapieira || armap1 == machado:
                    dans1 = Math.floor(danoc1a.textContent * 1 - rapieira);
                break;
                case armap1 == sabre:
                    dans1 = Math.floor(danoc1a.textContent * 1 - sabre);
                break;
                case armap1 == adaga:
                    dans1 = Math.floor(danoc1a.textContent * 1 - adaga);
                break;
                case armap1 == foice:
                    dans1 = Math.floor(danoc1a.textContent * 1 - foice);
                break;
            }
        break;
    }
    switch (true) {
        case duraaquecep2 == 0 && dbp2 == 1 && db1p2.style.display == "flex":
            numbuffsp2--;
            db1p2.style.display = "none";
            aquecidap2 = false;
            switch (true) {
                case armap2 == punhal:
                    dans2 = Math.floor(danoc2a.textContent * 1 - punhal);
                break;
                case armap2 == rapieira || armap2 == machado:
                    dans2 = Math.floor(danoc2a.textContent * 1 - rapieira);
                break;
                case armap2 == sabre:
                    dans2 = Math.floor(danoc2a.textContent * 1 - sabre);
                break;
                case armap2 == adaga:
                    dans2 = Math.floor(danoc2a.textContent * 1 - adaga);
                break;
                case armap2 == foice:
                    dans2 = Math.floor(danoc2a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep2 == 0 && dbp2 == 2 && db2p2.style.display == "flex":
            numbuffsp2--;
            db2p2.style.display = "none";
            aquecidap2 = false;
            switch (true) {
                case armap2 == punhal:
                    dans2 = Math.floor(danoc2a.textContent * 1 - punhal);
                break;
                case armap2 == rapieira || armap2 == machado:
                    dans2 = Math.floor(danoc2a.textContent * 1 - rapieira);
                break;
                case armap2 == sabre:
                    dans2 = Math.floor(danoc2a.textContent * 1 - sabre);
                break;
                case armap2 == adaga:
                    dans2 = Math.floor(danoc2a.textContent * 1 - adaga);
                break;
                case armap2 == foice:
                    dans2 = Math.floor(danoc2a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep2 == 0 && dbp2 == 3 && db3p2.style.display == "flex":
            numbuffsp2--;
            db3p2.style.display = "none";
            aquecidap2 = false;
            switch (true) {
                case armap2 == punhal:
                    dans2 = Math.floor(danoc2a.textContent * 1 - punhal);
                break;
                case armap2 == rapieira || armap2 == machado:
                    dans2 = Math.floor(danoc2a.textContent * 1 - rapieira);
                break;
                case armap2 == sabre:
                    dans2 = Math.floor(danoc2a.textContent * 1 - sabre);
                break;
                case armap2 == adaga:
                    dans2 = Math.floor(danoc2a.textContent * 1 - adaga);
                break;
                case armap2 == foice:
                    dans2 = Math.floor(danoc2a.textContent * 1 - foice);
                break;
            }
        break;
    }
    switch (true) {
        case duraaquecep3 == 0 && dbp3 == 1 && db1p3.style.display == "flex":
            numbuffsp3--;
            db1p3.style.display = "none";
            aquecidap3 = false;
            switch (true) {
                case armap3 == punhal:
                    dans3 = Math.floor(danoc3a.textContent * 1 - punhal);
                break;
                case armap3 == rapieira || armap3 == machado:
                    dans3 = Math.floor(danoc3a.textContent * 1 - rapieira);
                break;
                case armap3 == sabre:
                    dans3 = Math.floor(danoc3a.textContent * 1 - sabre);
                break;
                case armap3 == adaga:
                    dans3 = Math.floor(danoc3a.textContent * 1 - adaga);
                break;
                case armap3 == foice:
                    dans3 = Math.floor(danoc3a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep3 == 0 && dbp3 == 2 && db2p3.style.display == "flex":
            numbuffsp3--;
            db2p3.style.display = "none";
            aquecidap3 = false;
            switch (true) {
                case armap3 == punhal:
                    dans3 = Math.floor(danoc3a.textContent * 1 - punhal);
                break;
                case armap3 == rapieira || armap3 == machado:
                    dans3 = Math.floor(danoc3a.textContent * 1 - rapieira);
                break;
                case armap3 == sabre:
                    dans3 = Math.floor(danoc3a.textContent * 1 - sabre);
                break;
                case armap3 == adaga:
                    dans3 = Math.floor(danoc3a.textContent * 1 - adaga);
                break;
                case armap3 == foice:
                    dans3 = Math.floor(danoc3a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep3 == 0 && dbp3 == 3 && db3p3.style.display == "flex":
            numbuffsp3--;
            db3p3.style.display = "none";
            aquecidap3 = false;
            switch (true) {
                case armap3 == punhal:
                    dans3 = Math.floor(danoc3a.textContent * 1 - punhal);
                break;
                case armap3 == rapieira || armap3 == machado:
                    dans3 = Math.floor(danoc3a.textContent * 1 - rapieira);
                break;
                case armap3 == sabre:
                    dans3 = Math.floor(danoc3a.textContent * 1 - sabre);
                break;
                case armap3 == adaga:
                    dans3 = Math.floor(danoc3a.textContent * 1 - adaga);
                break;
                case armap3 == foice:
                    dans3 = Math.floor(danoc3a.textContent * 1 - foice);
                break;
            }
        break;
    }
    switch (true) {
        case duraaquecep4 == 0 && dbp4 == 1 && db1p4.style.display == "flex":
            numbuffsp4--;
            db1p4.style.display = "none";
            aquecidap4 = false;
            switch (true) {
                case armap4 == punhal:
                    dans4 = Math.floor(danoc4a.textContent * 1 - punhal);
                break;
                case armap4 == rapieira || armap4 == machado:
                    dans4 = Math.floor(danoc4a.textContent * 1 - rapieira);
                break;
                case armap4 == sabre:
                    dans4 = Math.floor(danoc4a.textContent * 1 - sabre);
                break;
                case armap4 == adaga:
                    dans4 = Math.floor(danoc4a.textContent * 1 - adaga);
                break;
                case armap4 == foice:
                    dans4 = Math.floor(danoc4a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep4 == 0 && dbp4 == 2 && db2p4.style.display == "flex":
            numbuffsp4--;
            db2p4.style.display = "none";
            aquecidap4 = false;
            switch (true) {
                case armap4 == punhal:
                    dans4 = Math.floor(danoc4a.textContent * 1 - punhal);
                break;
                case armap4 == rapieira || armap4 == machado:
                    dans4 = Math.floor(danoc4a.textContent * 1 - rapieira);
                break;
                case armap4 == sabre:
                    dans4 = Math.floor(danoc4a.textContent * 1 - sabre);
                break;
                case armap4 == adaga:
                    dans4 = Math.floor(danoc4a.textContent * 1 - adaga);
                break;
                case armap4 == foice:
                    dans4 = Math.floor(danoc4a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep4 == 0 && dbp4 == 3 && db3p4.style.display == "flex":
            numbuffsp4--;
            db3p4.style.display = "none";
            aquecidap4 = false;
            switch (true) {
                case armap4 == punhal:
                    dans4 = Math.floor(danoc4a.textContent * 1 - punhal);
                break;
                case armap4 == rapieira || armap4 == machado:
                    dans4 = Math.floor(danoc4a.textContent * 1 - rapieira);
                break;
                case armap4 == sabre:
                    dans4 = Math.floor(danoc4a.textContent * 1 - sabre);
                break;
                case armap4 == adaga:
                    dans4 = Math.floor(danoc4a.textContent * 1 - adaga);
                break;
                case armap4 == foice:
                    dans4 = Math.floor(danoc4a.textContent * 1 - foice);
                break;
            }
        break;
    }
    switch (true) {
        case duraaquecep5 == 0 && dbp5 == 1 && db1p5.style.display == "flex":
            numbuffsp5--;
            db1p5.style.display = "none";
            aquecidap5 = false;
            switch (true) {
                case armap5 == punhal:
                    dans5 = Math.floor(danoc5a.textContent * 1 - punhal);
                break;
                case armap5 == rapieira || armap5 == machado:
                    dans5 = Math.floor(danoc5a.textContent * 1 - rapieira);
                break;
                case armap5 == sabre:
                    dans5 = Math.floor(danoc5a.textContent * 1 - sabre);
                break;
                case armap5 == adaga:
                    dans5 = Math.floor(danoc5a.textContent * 1 - adaga);
                break;
                case armap5 == foice:
                    dans5 = Math.floor(danoc5a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep5 == 0 && dbp5 == 2 && db2p5.style.display == "flex":
            numbuffsp5--;
            db2p5.style.display = "none";
            aquecidap5 = false;
            switch (true) {
                case armap5 == punhal:
                    dans5 = Math.floor(danoc5a.textContent * 1 - punhal);
                break;
                case armap5 == rapieira || armap5 == machado:
                    dans5 = Math.floor(danoc5a.textContent * 1 - rapieira);
                break;
                case armap5 == sabre:
                    dans5 = Math.floor(danoc5a.textContent * 1 - sabre);
                break;
                case armap5 == adaga:
                    dans5 = Math.floor(danoc5a.textContent * 1 - adaga);
                break;
                case armap5 == foice:
                    dans5 = Math.floor(danoc5a.textContent * 1 - foice);
                break;
            }
        break;
        case duraaquecep5 == 0 && dbp5 == 3 && db3p5.style.display == "flex":
            numbuffsp5--;
            db3p5.style.display = "none";
            aquecidap5 = false;
            switch (true) {
                case armap5 == punhal:
                    dans5 = Math.floor(danoc5a.textContent * 1 - punhal);
                break;
                case armap5 == rapieira || armap5 == machado:
                    dans5 = Math.floor(danoc5a.textContent * 1 - rapieira);
                break;
                case armap5 == sabre:
                    dans5 = Math.floor(danoc5a.textContent * 1 - sabre);
                break;
                case armap5 == adaga:
                    dans5 = Math.floor(danoc5a.textContent * 1 - adaga);
                break;
                case armap5 == foice:
                    dans5 = Math.floor(danoc5a.textContent * 1 - foice);
                break;
            }
        break;
    }
    for (let i = 0; i < duraqmds.length; i++) {
        duraqmds[i]--;
        durafrios[i]--;
    }
    if(queimando[0] == true) {
        hpt = Math.floor(vidac1.textContent - 25);
        vidac1.textContent = hpt;
    }
    if(queimando[1] == true) {
        hpt2 = Math.floor(vidac2.textContent - 25);
        vidac2.textContent = hpt2;
    }
    if(queimando[2] == true) {
        hpt3 = Math.floor(vidac3.textContent - 25);
        vidac3.textContent = hpt3;
    }
    if(queimando[3] == true) {
        hpt4 = Math.floor(vidac4.textContent - 25);
        vidac4.textContent = hpt4;
    }
    if(queimando[4] == true) {
        hpt5 = Math.floor(vidac5.textContent - 25);
        vidac5.textContent = hpt5;
    }
    if(queimando[5] == true) {
        hpt6 = Math.floor(vidac6.textContent - 25);
        vidac6.textContent = hpt6;
    }
    if(queimando[6] == true) {
        hpt7 = Math.floor(vidac7.textContent - 25);
        vidac7.textContent = hpt7;
    }
    for (let i = 0; i < atordoas.length; i++) {
        if(atordoas[i].style.display == "flex" && incs[i].style.visibility == "hidden" && duraats[i] == 0) {
            incs[i].style.visibility = "visible";
            incs[i].style.display = "none";
            atordoas[i].style.display = "none";
        }
    }
    for (let i = 0; i < duraats.length; i++) {
        if(duraats[i] == 1) {
            duraats[i]--;
        }
    }
    if(durarg > 0) {
        durarg--;
    }
    if(durarg == 0 && rg == true) {
        dans1 -= danorg;
        dans2 -= danorg;
        dans3 -= danorg;
        dans4 -= danorg;
        dans5 -= danorg;
        rg = false;
    }
    if(durares > 0) {
        durares--;
    }
    if(durares == 0 && reshab == true) {
        resps[0] += 0.20;
        resps[1] += 0.20;
        resps[2] += 0.20;
        resps[3] += 0.20;
        resps[4] += 0.20;
        rss[0] -= 20;
        rss[1] -= 20;
        rss[2] -= 20;
        rss[3] -= 20;
        rss[4] -= 20;
        reshab = false;
        for(let i = 0; i < niveis.length; i++) {
            switch (niveis[i].textContent) {
                case "NV: I":
                    resistencias[i].textContent = `${rss[i]}%`;
                break;
                case "NV: II":
                    resistencias[i].textContent = `${rss[i] + 1}%`;
                break;
                case "NV: III":
                    resistencias[i].textContent = `${rss[i] + 3}%`;
                break;
                case "NV: IV":
                    resistencias[i].textContent = `${rss[i] + 6}%`;
                break;
                case "NV: V":
                    resistencias[i].textContent = `${rss[i] + 9}%`;
                break;
                case "NV: VI":
                    resistencias[i].textContent = `${rss[i] + 12}%`;
                break;
                case "NV: VII":
                    resistencias[i].textContent = `${rss[i] + 15}%`;
                break;
                case "NV: VIII":
                    resistencias[i].textContent = `${rss[i] + 18}%`;
                break;
                case "NV: IX":
                    resistencias[i].textContent = `${rss[i] + 21}%`;
                break;
                case "NV: X":
                    resistencias[i].textContent = `${rss[i] + 26}%`;
                break;
            }
        }
    }
}

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
        if(ctas[1].style.animationName == "shake" && cool.style.display == "flex" && per == 2) {
            cool2--;
        }
        if(ctas[2].style.animationName == "shake" && cool.style.display == "flex" && per == 3) {
            cool3--;
        }
        if(ctas[3].style.animationName == "shake" && cool.style.display == "flex" && per == 4) {
            cool4--;
        }
        if(ctas[4].style.animationName == "shake" && cool.style.display == "flex" && per == 5) {
            cool5--;
        }
    if(inc1.style.display == "flex" || inc2.style.display == "flex" || inc3.style.display == "flex" || inc4.style.display == "flex" || inc5.style.display == "flex") {
    switch(true) {
        case cta1.style.animationName == "shake" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta1.style.animationName = "unset";
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
            incinimigo();
            turnoini();
        break;
        case cta2.style.animationName == "shake" && inc3.style.display == "flex" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta2.style.animationName = "unset";
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
            incinimigo();
            turnoini();
        break;
        case cta3.style.animationName == "shake" && inc5.style.display == "flex" && inc4.style.display == "flex":
            cta3.style.animationName = "unset";
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
            incinimigo();
            turnoini();
        break;
        case cta4.style.animationName == "shake" && inc5.style.display == "flex":
            cta4.style.animationName = "unset";
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
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
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
            incinimigo();
            turnoini();
        break;
        case cta5.style.animationName == "shake" && cta2.style.animationName != "shake" && cta3.style.animationName != "shake" && cta4.style.animationName != "shake" && cta1.style.animationName != "shake":
            cta5.style.animationName = "unset";
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
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
            switch (true) {
                case cn1i.style.display == "flex" && inci1.style.display != "flex":
                    usandoci = true;
                    armai = "canhoes";
                break;
                case cn7i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn6i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn5i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn4i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn3i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
                case cn2i.style.display == "flex" && inci1.style.display == "flex" && inci2.style.display != "flex":
                    usandoci = true; 
                    armai = "canhoes";
                break;
            }
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
    else if(usandoci == true) {
        atqcanhao();
    }
    else if(!turnoa) {
        danoinimigo();
    }
    else if(turnoa && usandoc == true) {
        atqcanhao();
    }
    if(expl == false) {
    if(usandoc == false) {
    if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
        }
    }
    else {
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    }
}
    else {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        est.textContent = "Ataque Leve";
        est.style.color = "#f7847c";
        }
    }
    if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
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
}
else {
    if (numdado > 3){
        est.textContent = "Ataque Arcetivo";
        est.style.color = "#a0ff08";
    }
    else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }
    else if(numdado <= 3){
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
}
if(usandoci == true) {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        est.textContent = "Ataque Leve";
        est.style.color = "#f7847c";
        }
}
    dado.style.display = "flex";
    setTimeout(() => {
        if(aquecida == true && per == 1 || aquecidap2 == true && per == 2 || aquecidap3 == true && per == 3 || aquecidap4 == true && per == 4 || aquecidap5 == true && per == 5) {
        for(let i = 0; i < db1s.length; i++) {
            if(numdado > 3 || aurianos[i] == true) {
            if(miras[i].style.display == "block") {
                durafrios[i] = -1;
                gelos[i] = false;
                db1s[i].style.display = "block";
                imgdbs[i].src = "https://cdn-icons-png.flaticon.com/512/785/785116.png";
                db1s[i].style.backgroundColor = "#ba0909";
                confogos[i].style.animationName = "fogo";
                queimando[i] = true;
                duraqmds[i] = 3;
                    }
                }
            }
        }
        balaset.style.display = "none";
        balaset.style.left = "70%";
        balaset.style.opacity = "0";
        dado.style.display = "none";
        for (let i = 0; i < cartasi.length; i++) {
            if(danototalini > danttls[i] && ini == i + 1) {
                danototalini = danttls[i];
                danoini[i].textContent = danototalini;
            } 
        }
        amuletos();
        window.addEventListener("contextmenu", btd, false);
        if(!turnoa) {
            if(armai == "mosquete") {
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
                    if(munp1 != 0 && expl == false) {
                        muns[0]--;
                    }
                }
                if(armas[0] == besta || armas[0] == molotov || armas[0] == granada || armas[0] == nock) {
                    if(munp1 != 0 && viroin == false) {
                    muns[0]--;
                    }
                }
                if(expl == true) {
                    setTimeout(() => {
                        sons[4].play();
                    }, 500)
                }
                audios[0].play();
            break;
            case 2:
                if(armas[1] == perdeneira || armas[1] == pistola || armas[1] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp2 != 0 && expl == false) {
                        muns[1]--;
                    }
                }
                if(armas[1] == besta || armas[1] == molotov || armas[1] == granada || armas[1] == nock) {
                    if(munp2 != 0 && viroin == false) {
                        muns[1]--;
                    }
                }
                if(expl == true) {
                    setTimeout(() => {
                        sons[4].play();
                    }, 500)
                }
                audios[1].play();
            break;
            case 3:
                if(armas[2] == perdeneira || armas[2] == pistola || armas[2] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp3 != 0 && expl == false) {
                        muns[2]--;
                    }
                }
                if(armas[2] == besta || armas[2] == molotov || armas[2] == granada || armas[2] == nock) {
                    if(munp3 != 0 && viroin == false) {
                        muns[2]--;
                    }
                }
                if(expl == true) {
                    setTimeout(() => {
                        sons[4].play();
                    }, 500)
                }
                audios[2].play();
            break;
            case 4:
                if(armas[3] == perdeneira || armas[3] == pistola || armas[3] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp4 != 0 && expl == false) {
                        muns[3]--;
                    }
                }
                if(armas[3] == besta || armas[3] == molotov || armas[3] == granada || armas[3] == nock) {
                    if(munp4 != 0 && viroin == false) {
                        muns[3]--;
                    }
                }
                if(expl == true) {
                    setTimeout(() => {
                        sons[4].play();
                    }, 500)
                }
                audios[3].play();
            break;
            case 5:
                if(armas[4] == perdeneira || armas[4] == pistola || armas[4] == mosquete) {
                    audios[1].currentTime = 0.5;
                    if(munp5 != 0 && expl == false) {
                        muns[4]--;
                    }
                }
                if(armas[4] == besta || armas[4] == molotov || armas[4] == granada || armas[4] == nock) {
                    if(munp5 != 0 && viroin == false) {
                        muns[4]--;
                    }
                }
                if(expl == true) {
                    setTimeout(() => {
                        sons[4].play();
                    }, 500)
                }
                audios[4].play();
            break;
        }
    }
    else {
        sons[3].play();
    }
    }
    if(expl == false) {
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
}
else {
    roll.style.display = "block";
    estatq.style.display = "none";
    switch (true) {
        case mirac6.style.display == "block" && mirac7.style.display == "block" && mirac5.style.display == "block":
            vidac5.textContent = hpt5;
            vidac6.textContent = hpt6;
            vidac7.textContent = hpt7;
            limp();
    break;
        case mirac5.style.display == "block" && mirac6.style.display == "block" && mirac4.style.display == "block":
            vidac4.textContent = hpt4;
            vidac5.textContent = hpt5;
            vidac6.textContent = hpt6;
            limp();
    break;
        case mirac4.style.display == "block" && mirac5.style.display == "block" && mirac3.style.display == "block":
            vidac3.textContent = hpt3;
            vidac4.textContent = hpt4;
            vidac5.textContent = hpt5;
            limp();
    break;
        case mirac3.style.display == "block" && mirac2.style.display == "block" && mirac4.style.display == "block":
            vidac2.textContent = hpt2;
            vidac3.textContent = hpt3;
            vidac4.textContent = hpt4;
            limp();
    break;
        case mirac2.style.display == "block" && mirac1.style.display == "block" && mirac3.style.display == "block":
            vidac1.textContent = hpt;
            vidac2.textContent = hpt2;
            vidac3.textContent = hpt3;
            limp();
    break;
        case mirac1.style.display == "block" && mirac2.style.display == "block":
            vidac1.textContent = hpt;
            vidac2.textContent = hpt2;
            limp();
    break;
    case mirac7.style.display == "block" && mirac6.style.display == "block":
            vidac6.textContent = hpt6;
            vidac7.textContent = hpt7;
            limp();
    break;
    case mirac2.style.display == "block" && mirac3.style.display == "block":
        vidac2.textContent = hpt2;
        vidac3.textContent = hpt3;
        limp();
    break;
    case mirac3.style.display == "block" && mirac4.style.display == "block":
        vidac3.textContent = hpt3;
        vidac4.textContent = hpt4;
        limp();
    break;
    case mirac4.style.display == "block" && mirac5.style.display == "block":
        vidac4.textContent = hpt4;
        vidac5.textContent = hpt5;
        limp();
    break;
    case mirac5.style.display == "block" && mirac6.style.display == "block":
        vidac5.textContent = hpt5;
        vidac6.textContent = hpt6;
        limp();
    break;
    case mirac1.style.display == "block":
        vidac1.textContent = hpt1;
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
if(area == true && habatv == 1) {
    switch (miraatl) {
        case 1:
            miras[0].style.display = "block";
            miras[1].style.display = "none";
        break;
        case 2:
            miras[0].style.display = "none";
            miras[1].style.display = "block";
            miras[2].style.display = "none";
        break;
        case 3:
            miras[1].style.display = "none";
            miras[2].style.display = "block";
            miras[3].style.display = "none";
        break;
        case 4:
            miras[2].style.display = "none";
            miras[3].style.display = "block";
            miras[4].style.display = "none";
        break;
        case 5:
            miras[3].style.display = "none";
            miras[4].style.display = "block";
            miras[5].style.display = "none";
        break;
        case 6:
            miras[4].style.display = "none";
            miras[5].style.display = "block";
            miras[6].style.display = "none";
        break;
        case 7:
            miras[5].style.display = "none";
            miras[6].style.display = "block";
        break;
    }
}
if(viroin == true) {
    switch (per) {
        case 1:
            aquecida = false;
        break;
        case 2:
            aquecidap2 = false;
        break;
        case 3:
            aquecidap3 = false;
        break;
        case 4:
            aquecidap4 = false;
        break;
        case 5:
            aquecidap5 = false;
        break;
    }
}
    viroin == false;
    expl = false;
    if(quantmira == 0) {
        numhab = 0;
        trocar();
    }
    if(numhab == 2) {
        quantmira--;
    }
}, 1000)
}
roll.addEventListener("click", rolar);