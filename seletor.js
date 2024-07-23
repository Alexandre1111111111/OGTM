function selectini() {
    ctinisel.style.display = "none";
    inis.style.display = "flex";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
}

marmp.style.borderColor = "#ffd971";

marmp.addEventListener("click", () => {
    mapa = "Mar";
    document.body.style.backgroundImage = "url(campo.gif)";
    prancha = false;
    marmp.style.borderColor = "#ffd971";
    marchmp.style.borderColor = "";
    cosmp.style.borderColor = "";
    termp.style.borderColor = "";
    hpbarcoini.style.display = "flex";
    hpbarco.style.display = "flex";
    ch.style.display = "none";
    raio.style.display = "none";
})

marchmp.addEventListener("click", () => {
    mapa = "March";
    document.body.style.backgroundImage = "url(march.gif)";
    prancha = false;
    marmp.style.borderColor = "";
    marchmp.style.borderColor = "#ffd971";
    cosmp.style.borderColor = "";
    termp.style.borderColor = "";
    hpbarcoini.style.display = "flex";
    hpbarco.style.display = "flex";
    ch.style.display = "block";
    raio.style.display = "block";
})

cosmp.addEventListener("click", () => {
    mapa = "Costa";
    document.body.style.backgroundImage = "url(costa.gif)";
    prancha = true;
    marmp.style.borderColor = "";
    marchmp.style.borderColor = "";
    cosmp.style.borderColor = "#ffd971";
    termp.style.borderColor = "";
    hpbarcoini.style.display = "none";
    hpbarco.style.display = "flex";
    ch.style.display = "none";
    raio.style.display = "none";
})

termp.addEventListener("click", () => {
    mapa = "Terra";
    document.body.style.backgroundImage = "url(terra.png)";
    prancha = true;
    marmp.style.borderColor = "";
    marchmp.style.borderColor = "";
    cosmp.style.borderColor = "";
    termp.style.borderColor = "#ffd971";
    hpbarcoini.style.display = "none";
    hpbarco.style.display = "none";
    ch.style.display = "none";
    raio.style.display = "none";
})

function limpct() {
    for (let i = 0; i < 7; i++) {
        cartasi[i].style.backgroundImage = "unset";
        vidasi[i].textContent = "";
        danoini[i].textContent = "";
        rescs[i].textContent = "";
        ouros[i].textContent = "";
        vidast[i] = 0;
        danost[i] = 0;
        rests[i] = 0;
        horda = 0;
        chefe = 0;
    }
}

horda1n.addEventListener("click", () => {
    limpct();
    for (let i = 2; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 9;
        chefe = 0;
    }
})

horda2n.addEventListener("click", () => {
    limpct();
    for (let i = 2; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 10;
        chefe = 0;
    }
    cartasi[5].style.backgroundImage = "url(Osio.png)";
    vidasi[5].textContent = "255";
    danoini[5].textContent = "75";
    rescs[5].textContent = "8%";
    ouros[5].textContent = "300";
    vidast[5] = 255;
    danost[5] = 75;
    rests[5] = 0.92;
})

horda3n.addEventListener("click", () => {
    limpct();
    for (let i = 2; i < 4; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 11;
        chefe = 0;
    }
    for (let i = 4; i < 6; i++) {
    cartasi[i].style.backgroundImage = "url(Osio.png)";
    vidasi[i].textContent = "255";
    danoini[i].textContent = "75";
    rescs[i].textContent = "8%";
    ouros[i].textContent = "300";
    vidast[i] = 255;
    danost[i] = 75;
    rests[i] = 0.92;
    }
})

horda4n.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 12;
        chefe = 0;
    }
    cartasi[5].style.backgroundImage = "url(Osio.png)";
    vidasi[5].textContent = "255";
    danoini[5].textContent = "75";
    rescs[5].textContent = "8%";
    ouros[5].textContent = "300";
    vidast[5] = 255;
    danost[5] = 75;
    rests[5] = 0.92;
})

horda5n.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 4; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 13;
        chefe = 0;
    }
    for (let i = 4; i < 7; i++) {
    cartasi[i].style.backgroundImage = "url(Osio.png)";
    vidasi[i].textContent = "255";
    danoini[i].textContent = "75";
    rescs[i].textContent = "8%";
    ouros[i].textContent = "300";
    vidast[i] = 255;
    danost[i] = 75;
    rests[i] = 0.92;
    }
})

horda1t.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(thesauriano.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 14;
        chefe = 0;
    }
    for (let i = 5; i < 7; i++) {
    cartasi[i].style.backgroundImage = "url(Granadeiro.png)";
    vidasi[i].textContent = "250";
    danoini[i].textContent = "245";
    rescs[i].textContent = "12%";
    ouros[i].textContent = "550";
    vidast[i] = 250;
    danost[i] = 245;
    rests[i] = 0.88;
    }
})

horda2t.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 6; i++) {
        cartasi[i].style.backgroundImage = "url(thesauriano.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 15;
        chefe = 0;
    }
})

horda3t.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 3; i++) {
        cartasi[i].style.backgroundImage = "url(thesauriano.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 16;
        chefe = 0;
    }
    for (let i = 3; i < 6; i++) {
    cartasi[i].style.backgroundImage = "url(Granadeiro.png)";
    vidasi[i].textContent = "250";
    danoini[i].textContent = "245";
    rescs[i].textContent = "12%";
    ouros[i].textContent = "550";
    vidast[i] = 250;
    danost[i] = 245;
    rests[i] = 0.88;
    }
})

horda4t.addEventListener("click", () => {
    limpct();
    for (let i = 1; i < 5; i++) {
    cartasi[i].style.backgroundImage = "url(Granadeiro.png)";
    vidasi[i].textContent = "250";
    danoini[i].textContent = "245";
    rescs[i].textContent = "12%";
    ouros[i].textContent = "550";
    vidast[i] = 250;
    danost[i] = 245;
    rests[i] = 0.88;
    horda = 17;
    chefe = 0;
    }
})

horda5t.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 7; i++) {
        cartasi[i].style.backgroundImage = "url(thesauriano.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 18;
        chefe = 0;
    }
})

horda1m.addEventListener("click", () => {
    limpct();
    for (let i = 2; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(TripR.png)";
        vidasi[i].textContent = "120";
        danoini[i].textContent = "30";
        rescs[i].textContent = "5%";
        ouros[i].textContent = "75";
        vidast[i] = 120;
        danost[i] = 30;
        rests[i] = 0.95;
        horda = 1;
        chefe = 0;
    }
})

horda2m.addEventListener("click", () => {
    limpct();
    for (let i = 1; i < 6; i++) {
        cartasi[i].style.backgroundImage = "url(TripR.png)";
        vidasi[i].textContent = "120";
        danoini[i].textContent = "30";
        rescs[i].textContent = "5%";
        ouros[i].textContent = "75";
        vidast[i] = 120;
        danost[i] = 30;
        rests[i] = 0.95;
        horda = 2;
        chefe = 0;
    }
})

horda3m.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < cartasi.length; i++) {
        cartasi[i].style.backgroundImage = "url(TripR.png)";
        vidasi[i].textContent = "120";
        danoini[i].textContent = "30";
        rescs[i].textContent = "5%";
        ouros[i].textContent = "75";
        vidast[i] = 120;
        danost[i] = 30;
        rests[i] = 0.95;
        horda = 3;
        chefe = 0;
    }
})

horda4m.addEventListener("click", () => {
    limpct();
    for (let i = 1; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 4;
        chefe = 0;
    }
})

horda5m.addEventListener("click", () => {
    limpct();
    for (let i = 1; i < 6; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 5;
        chefe = 0;
    }
})

horda6m.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < 6; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 6;
        chefe = 0;
    }
})

horda7m.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < cartasi.length; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 7;
        chefe = 0;
    }
})

horda8m.addEventListener("click", () => {
    limpct();
    for (let i = 0; i < cartasi.length; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 8;
        chefe = 0;
    }
})

chefe1m.addEventListener("click", () => {
    cartasi[0].style.backgroundImage = "url(Ruivo.png)";
    vidasi[0].textContent = "225";
    danoini[0].textContent = "55";
    rescs[0].textContent = "5%";
    ouros[0].textContent = "700";
    vidast[0] = 225;
    danost[0] = 55;
    rests[0] = 0.95;
    for (let i = 1; i < cartasi.length; i++) {
        cartasi[i].style.backgroundImage = "url(TripR.png)";
        vidasi[i].textContent = "120";
        danoini[i].textContent = "30";
        rescs[i].textContent = "5%";
        ouros[i].textContent = "75";
        vidast[i] = 120;
        danost[i] = 30;
        rests[i] = 0.95;
        horda = 0;
        chefe = 1;
    }
})

chefe2m.addEventListener("click", () => {
    cartasi[0].style.backgroundImage = "url(BN.png)";
    vidasi[0].textContent = "720";
    danoini[0].textContent = "220";
    rescs[0].textContent = "30%";
    ouros[0].textContent = "2650";
    vidast[0] = 720;
    danost[0] = 220;
    rests[0] = 0.70;
    for (let i = 1; i < cartasi.length; i++) {
        cartasi[i].style.backgroundImage = "url(TripN.png)";
        vidasi[i].textContent = "200";
        danoini[i].textContent = "95";
        rescs[i].textContent = "10%";
        ouros[i].textContent = "200";
        vidast[i] = 200;
        danost[i] = 95;
        rests[i] = 0.90;
        horda = 0;
        chefe = 2;
    }
})

chefe1n.addEventListener("click", () => {
    cartasi[0].style.backgroundImage = "url(Tina.png)";
    vidasi[0].textContent = "320";
    danoini[0].textContent = "85";
    rescs[0].textContent = "15%";
    ouros[0].textContent = "700";
    vidast[0] = 320;
    danost[0] = 85;
    rests[0] = 0.85;
    for (let i = 1; i < 5; i++) {
        cartasi[i].style.backgroundImage = "url(Osio.png)";
        vidasi[i].textContent = "255";
        danoini[i].textContent = "75";
        rescs[i].textContent = "8%";
        ouros[i].textContent = "300";
        vidast[i] = 255;
        danost[i] = 75;
        rests[i] = 0.92;
        horda = 0;
        chefe = 3;
    }
    for (let i = 5; i < 7; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
    }
})

chefe2n.addEventListener("click", () => {
    cartasi[0].style.backgroundImage = "url(Fromir.png)";
    vidasi[0].textContent = "470";
    danoini[0].textContent = "165";
    rescs[0].textContent = "15%";
    ouros[0].textContent = "1750";
    vidast[0] = 470;
    danost[0] = 165;
    rests[0] = 0.85;
    for (let i = 1; i < 7; i++) {
        cartasi[i].style.backgroundImage = "url(Tesouros.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 0;
        chefe = 4;
    }
})

chefe1t.addEventListener("click", () => {
    limpct();
    cartasi[0].style.backgroundImage = "url(Villinski.png)";
    vidasi[0].textContent = "1000";
    danoini[0].textContent = "325";
    rescs[0].textContent = "60%";
    ouros[0].textContent = "10000";
    vidast[0] = 1000;
    danost[0] = 325;
    rests[0] = 0.40;
    for (let i = 1; i < 4; i++) {
        cartasi[i].style.backgroundImage = "url(thesauriano.png)";
        vidasi[i].textContent = "205";
        danoini[i].textContent = "65";
        rescs[i].textContent = "15%";
        ouros[i].textContent = "400";
        vidast[i] = 205;
        danost[i] = 65;
        rests[i] = 0.85;
        horda = 0;
        chefe = 5;
    }
    for (let i = 4; i < 7; i++) {
    cartasi[i].style.backgroundImage = "url(Granadeiro.png)";
    vidasi[i].textContent = "250";
    danoini[i].textContent = "245";
    rescs[i].textContent = "12%";
    ouros[i].textContent = "550";
    vidast[i] = 250;
    danost[i] = 245;
    rests[i] = 0.88;
    }
})

btnc.addEventListener("click", () => {
    hordas.style.display = "none";
    chefes.style.display = "flex";
    btnc.style.backgroundColor = "#2b1501";
    btnh.style.backgroundColor = "#000";
})

btnh.addEventListener("click", () => {
    hordas.style.display = "flex";
    chefes.style.display = "none";
    btnh.style.backgroundColor = "#2b1501";
    btnc.style.backgroundColor = "#000";
})

selini.addEventListener("click", selectini);

function pitnsm() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defmp1++;
            quantmp.textContent = defmp1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defmp2++;
            quantmp.textContent = defmp2;
            }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defmp3++;
            quantmp.textContent = defmp3;
            }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defmp4++;
            quantmp.textContent = defmp4;
            }
        break;
        case 5:
            if(totalitnp5 < 3) {
            defmp5++;
            quantmp.textContent = defmp5;
            }
        break;
    }
}

function pitnsr() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defrp1++;
            quantrp.textContent = defrp1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defrp2++;
            quantrp.textContent = defrp2;
            }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defrp3++;
            quantrp.textContent = defrp3;
            }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defrp4++;
            quantrp.textContent = defrp4;
            }
        break;
        case 5:
            if(totalitnp5 < 3) {
            defrp5++;
            quantrp.textContent = defrp5;
            }
        break;
    }
}

function pitnsa() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defap1++;
            quantap.textContent = defap1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defap2++;
            quantap.textContent = defap2;
            }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defap3++;
            quantap.textContent = defap3;
            }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defap4++;
            quantap.textContent = defap4;
            }
        break;
        case 5:
            if(totalitnp5 < 3) {
            defap5++;
            quantap.textContent = defap5;
            }
        break;
    }
}

function pitnsc() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defcp1++;
            quantcp.textContent = defcp1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defcp2++;
            quantcp.textContent = defcp2;
        }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defcp3++;
            quantcp.textContent = defcp3;
    }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defcp4++;
            quantcp.textContent = defcp4;
}
        break;
        case 5:
            if(totalitnp5 < 3) {
            defcp5++;
            quantcp.textContent = defcp5;
}
        break;
    }
}

function pitnss() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defsp1++;
            quantsp.textContent = defsp1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defsp2++;
            quantsp.textContent = defsp2;
        }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defsp3++;
            quantsp.textContent = defsp3;
    }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defsp4++;
            quantsp.textContent = defsp4;
}
        break;
        case 5:
            if(totalitnp5 < 3) {
            defsp5++;
            quantsp.textContent = defsp5;
}
        break;
    }
}

function pitnse() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defep1++;
            quantep.textContent = defep1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defep2++;
            quantep.textContent = defep2;
        }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defep3++;
            quantep.textContent = defep3;
    }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defep4++;
            quantep.textContent = defep4;
}
        break;
        case 5:
            if(totalitnp5 < 3) {
            defep5++;
            quantep.textContent = defep5;
}
        break;
    }
}

function pitnsf() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            deffp1++;
            quantfp.textContent = deffp1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            deffp2++;
            quantfp.textContent = deffp2;
        }
        break;
        case 3:
            if(totalitnp3 < 3) {
            deffp3++;
            quantfp.textContent = deffp3;
    }
        break;
        case 4:
            if(totalitnp4 < 3) {
            deffp4++;
            quantfp.textContent = deffp4;
}
        break;
        case 5:
            if(totalitnp5 < 3) {
            deffp5++;
            quantfp.textContent = deffp5;
}
        break;
    }
}

function pitnsi() {
    switch (sel) {
        case 1:
            if(totalitnp1 < 3) {
            defip1++;
            quantip.textContent = defip1;
            }
        break;
        case 2:
            if(totalitnp2 < 3) {
            defip2++;
            quantip.textContent = defip2;
        }
        break;
        case 3:
            if(totalitnp3 < 3) {
            defip3++;
            quantip.textContent = defip3;
    }
        break;
        case 4:
            if(totalitnp4 < 3) {
            defip4++;
            quantip.textContent = defip4;
}
        break;
        case 5:
            if(totalitnp5 < 3) {
            defip5++;
            quantip.textContent = defip5;
}
        break;
    }
}

function pitnsm2() {
    if(totalitnb < 10) {
    quantm.textContent++;
    }
}

function pitnsr2() {
    if(totalitnb < 10) {
    quantr.textContent++;
    }
}

function pitnsa2() {
    if(totalitnb < 10) {
    quanta.textContent++;
    }
}

function pitnsc2() {
    if(totalitnb < 10) {
    quantc.textContent++;
    }
}

function pitnss2() {
    if(totalitnb < 10) {
    quants.textContent++;
    }
}

function pitnse2() {
    if(totalitnb < 10) {
    quante.textContent++;
    }
}

function pitnsf2() {
    if(totalitnb < 10) {
    quantf.textContent++;
    }
}

function pitnsi2() {
    if(totalitnb < 10) {
    quanti.textContent++;
    }
}

function mitnsm() {
    switch (sel) {
        case 1:
            if(defmp1 != 0) {
            defmp1--;
            quantmp.textContent = defmp1;
            }
        break;
        case 2:
            if(defmp2 != 0) {
            defmp2--;
            quantmp.textContent = defmp2;
            }
        break;
        case 3:
            if(defmp3 != 0) {
            defmp3--;
            quantmp.textContent = defmp3;
            }
        break;
        case 4:
            if(defmp4 != 0) {
            defmp4--;
            quantmp.textContent = defmp4;
            }
        break;
        case 5:
            if(defmp5 != 0) {
            defmp5--;
            quantmp.textContent = defmp5;
            }
        break;
    }
}

function mitnsr() {
    switch (sel) {
        case 1:
            if(defrp1 != 0) {
            defrp1--;
            quantrp.textContent = defrp1;
            }
        break;
        case 2:
            if(defrp2 != 0) {
            defrp2--;
            quantrp.textContent = defrp2;
            }
        break;
        case 3:
            if(defrp3 != 0) {
            defrp3--;
            quantrp.textContent = defrp3;
            }
        break;
        case 4:
            if(defrp4 != 0) {
            defrp4--;
            quantrp.textContent = defrp4;
            }
        break;
        case 5:
            if(defrp5 != 0) {
            defrp5--;
            quantrp.textContent = defrp5;
            }
        break;
    }
}

function mitnsa() {
    switch (sel) {
        case 1:
            if(defap1 != 0) {
            defap1--;
            quantap.textContent = defap1;
            }
        break;
        case 2:
            if(defap2 != 0) {
            defap2--;
            quantap.textContent = defap2;
            }
        break;
        case 3:
            if(defap3 != 0) {
            defap3--;
            quantap.textContent = defap3;
            }
        break;
        case 4:
            if(defap4 != 0) {
            defap4--;
            quantap.textContent = defap4;
            }
        break;
        case 5:
            if(defap5 != 0) {
            defap5--;
            quantap.textContent = defap5;
            }
        break;
    }
}

function mitnsc() {
    switch (sel) {
        case 1:
            if(defcp1 != 0) {
            defcp1--;
            quantcp.textContent = defcp1;
            }
        break;
        case 2:
            if(defcp2 != 0) {
            defcp2--;
            quantcp.textContent = defcp2;
            }
        break;
        case 3:
            if(defcp3 != 0) {
            defcp3--;
            quantcp.textContent = defcp3;
            }
        break;
        case 4:
            if(defcp4 != 0) {
            defcp4--;
            quantcp.textContent = defcp4;
            }
        break;
        case 5:
            if(defcp5 != 0) {
            defcp5--;
            quantcp.textContent = defcp5;
            }
        break;
    }
}

function mitnss() {
    switch (sel) {
        case 1:
            if(defsp1 != 0) {
            defsp1--;
            quantsp.textContent = defsp1;
            }
        break;
        case 2:
            if(defsp2 != 0) {
            defsp2--;
            quantsp.textContent = defsp2;
            }
        break;
        case 3:
            if(defsp3 != 0) {
            defsp3--;
            quantsp.textContent = defsp3;
            }
        break;
        case 4:
            if(defsp4 != 0) {
            defsp4--;
            quantsp.textContent = defsp4;
            }
        break;
        case 5:
            if(defsp5 != 0) {
            defsp5--;
            quantsp.textContent = defsp5;
            }
        break;
    }
}

function mitnse() {
    switch (sel) {
        case 1:
            if(defep1 != 0) {
            defep1--;
            quantep.textContent = defep1;
            }
        break;
        case 2:
            if(defep2 != 0) {
            defep2--;
            quantep.textContent = defep2;
            }
        break;
        case 3:
            if(defep3 != 0) {
            defep3--;
            quantep.textContent = defep3;
            }
        break;
        case 4:
            if(defep4 != 0) {
            defep4--;
            quantep.textContent = defep4;
            }
        break;
        case 5:
            if(defep5 != 0) {
            defep5--;
            quantep.textContent = defep5;
            }
        break;
    }
}

function mitnsf() {
    switch (sel) {
        case 1:
            if(deffp1 != 0) {
            deffp1--;
            quantfp.textContent = deffp1;
            }
        break;
        case 2:
            if(deffp2 != 0) {
            deffp2--;
            quantfp.textContent = deffp2;
            }
        break;
        case 3:
            if(deffp3 != 0) {
            deffp3--;
            quantfp.textContent = deffp3;
            }
        break;
        case 4:
            if(deffp4 != 0) {
            deffp4--;
            quantfp.textContent = deffp4;
            }
        break;
        case 5:
            if(deffp5 != 0) {
            deffp5--;
            quantfp.textContent = deffp5;
            }
        break;
    }
}

function mitnsi() {
    switch (sel) {
        case 1:
            if(defip1 != 0) {
            defip1--;
            quantip.textContent = defip1;
            }
        break;
        case 2:
            if(defip2 != 0) {
            defip2--;
            quantip.textContent = defip2;
            }
        break;
        case 3:
            if(defip3 != 0) {
            defip3--;
            quantip.textContent = defip3;
            }
        break;
        case 4:
            if(defip4 != 0) {
            defip4--;
            quantip.textContent = defip4;
            }
        break;
        case 5:
            if(defip5 != 0) {
            defip5--;
            quantip.textContent = defip5;
            }
        break;
    }
}

function mitnsm2() {
    if(quantm.textContent != "0") {
    quantm.textContent--;
    }
}

function mitnsr2() {
    if(quantr.textContent != "0") {
    quantr.textContent--;
    }
}

function mitnsa2() {
    if(quanta.textContent != "0") {
    quanta.textContent--;
    }
}

function mitnsc2() {
    if(quantc.textContent != "0") {
    quantc.textContent--;
    }
}

function mitnss2() {
    if(quants.textContent != "0") {
    quants.textContent--;
    }
}

function mitnse2() {
    if(quante.textContent != "0") {
    quante.textContent--;
    }
}

function mitnsf2() {
    if(quantf.textContent != "0") {
    quantf.textContent--;
    }
}

function mitnsi2() {
    if(quanti.textContent != "0") {
    quanti.textContent--;
    }
}

function additens() {
    kit.addEventListener("click", pitnsm);

    reparo.addEventListener("click", pitnsr);
    
    auriana.addEventListener("click", pitnsa);
    
    cristais.addEventListener("click", pitnsc);
    
    sopro.addEventListener("click", pitnss);
    
    explosiva.addEventListener("click", pitnse);
    
    ferro.addEventListener("click", pitnsf);
    
    incendiario.addEventListener("click", pitnsi);
    
    kit2.addEventListener("click", pitnsm2);
    
    reparo2.addEventListener("click", pitnsr2);
    
    auriana2.addEventListener("click", pitnsa2);
    
    cristais2.addEventListener("click", pitnsc2);
    
    sopro2.addEventListener("click", pitnss2);
    
    explosiva2.addEventListener("click", pitnse2);
    
    ferro2.addEventListener("click", pitnsf2);
    
    incendiario2.addEventListener("click", pitnsi2);


    kit.addEventListener("contextmenu", mitnsm);

    reparo.addEventListener("contextmenu", mitnsr);
    
    auriana.addEventListener("contextmenu", mitnsa);
    
    cristais.addEventListener("contextmenu", mitnsc);
    
    sopro.addEventListener("contextmenu", mitnss);
    
    explosiva.addEventListener("contextmenu", mitnse);
    
    ferro.addEventListener("contextmenu", mitnsf);
    
    incendiario.addEventListener("contextmenu", mitnsi);
    
    kit2.addEventListener("contextmenu", mitnsm2);
    
    reparo2.addEventListener("contextmenu", mitnsr2);
    
    auriana2.addEventListener("contextmenu", mitnsa2);
    
    cristais2.addEventListener("contextmenu", mitnsc2);
    
    sopro2.addEventListener("contextmenu", mitnss2);
    
    explosiva2.addEventListener("contextmenu", mitnse2);
    
    ferro2.addEventListener("contextmenu", mitnsf2);
    
    incendiario2.addEventListener("contextmenu", mitnsi2);
}

p1itn.addEventListener("click", () => {
    sel = 1;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "block";
    ib.style.display = "none";
    perit.style.display = "grid";
    barcoit.style.display = "none";
    quantmp.textContent = defmp1;
    quantrp.textContent = defrp1;
    quantap.textContent = defap1;
    quantcp.textContent = defcp1;
    quantsp.textContent = defsp1;
    quantep.textContent = defep1;
    quantfp.textContent = deffp1;
    quantip.textContent = defip1;
    ulitens();
    additens();
})

p2itn.addEventListener("click", () => {
    sel = 2;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "block";
    ib.style.display = "none";
    perit.style.display = "grid";
    barcoit.style.display = "none";
    quantmp.textContent = defmp2;
    quantrp.textContent = defrp2;
    quantap.textContent = defap2;
    quantcp.textContent = defcp2;
    quantsp.textContent = defsp2;
    quantep.textContent = defep2;
    quantfp.textContent = deffp2;
    quantip.textContent = defip2;
    ulitens();
    additens();
})

p3itn.addEventListener("click", () => {
    sel = 3;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "block";
    ib.style.display = "none";
    perit.style.display = "grid";
    barcoit.style.display = "none";
    quantmp.textContent = defmp3;
    quantrp.textContent = defrp3;
    quantap.textContent = defap3;
    quantcp.textContent = defcp3;
    quantsp.textContent = defsp3;
    quantep.textContent = defep3;
    quantfp.textContent = deffp3;
    quantip.textContent = defip3;
    ulitens();
    additens();
})

p4itn.addEventListener("click", () => {
    sel = 4;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "block";
    ib.style.display = "none";
    perit.style.display = "grid";
    barcoit.style.display = "none";
    quantmp.textContent = defmp4;
    quantrp.textContent = defrp4;
    quantap.textContent = defap4;
    quantcp.textContent = defcp4;
    quantsp.textContent = defsp4;
    quantep.textContent = defep4;
    quantfp.textContent = deffp4;
    quantip.textContent = defip4;
    ulitens();
    additens();
})

p5itn.addEventListener("click", () => {
    sel = 5;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "block";
    ib.style.display = "none";
    perit.style.display = "grid";
    barcoit.style.display = "none";
    quantmp.textContent = defmp5;
    quantrp.textContent = defrp5;
    quantap.textContent = defap5;
    quantcp.textContent = defcp5;
    quantsp.textContent = defsp5;
    quantep.textContent = defep5;
    quantfp.textContent = deffp5;
    quantip.textContent = defip5;
    ulitens();
    additens();
})

pbitn.addEventListener("click", () => {
    sel = 0;
    ctinisel.style.display = "none";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
    it.style.display = "none";
    ib.style.display = "block";
    perit.style.display = "none";
    barcoit.style.display = "grid";
    ulitens();
    additens();
})

btnmar.addEventListener("click", () => {
    btnmar.style.backgroundColor = "#000c79";
    btnnor.style.backgroundColor = "#001f1b";
    btnthe.style.backgroundColor = "#1f0000";
    for (let i = 0; i < hordasm.length; i++) {
        hordasm[i].style.display = "flex";
    }
    for (let i = 0; i < hordasn.length; i++) {
        hordasn[i].style.display = "none";
    }
    for (let i = 0; i < hordast.length; i++) {
        hordast[i].style.display = "none";
    }
    chefe1m.style.display = "flex";
    chefe2m.style.display = "flex";
    chefe1n.style.display = "none";
    chefe2n.style.display = "none";
    chefe1t.style.display = "none";
})
btnnor.addEventListener("click", () => {
    btnmar.style.backgroundColor = "#00031f";
    btnnor.style.backgroundColor = "#00443b";
    btnthe.style.backgroundColor = "#1f0000";
    for (let i = 0; i < hordasm.length; i++) {
        hordasm[i].style.display = "none";
    }
    for (let i = 0; i < hordasn.length; i++) {
        hordasn[i].style.display = "flex";
    }
    for (let i = 0; i < hordast.length; i++) {
        hordast[i].style.display = "none";
    }
    chefe1m.style.display = "none";
    chefe2m.style.display = "none";
    chefe1n.style.display = "flex";
    chefe2n.style.display = "flex";
    chefe1t.style.display = "none";
})
btnthe.addEventListener("click", () => {
    btnmar.style.backgroundColor = "#00031f";
    btnnor.style.backgroundColor = "#001f1b";
    btnthe.style.backgroundColor = "#5c0000";
    for (let i = 0; i < hordasm.length; i++) {
        hordasm[i].style.display = "none";
    }
    for (let i = 0; i < hordasn.length; i++) {
        hordasn[i].style.display = "none";
    }
    for (let i = 0; i < hordast.length; i++) {
        hordast[i].style.display = "flex";
    }
    chefe1m.style.display = "none";
    chefe2m.style.display = "none";
    chefe1n.style.display = "none";
    chefe2n.style.display = "none";
    chefe1t.style.display = "flex";
})