setInterval(inc, 0);
setInterval(incinimigo, 0);
setInterval(() => {
    if(turnoa) {
        btns.style.display = "block";
        armaatl.style.display = "flex";
    }
}, 0)
setInterval(() => {
    if(vidac1.textContent < vidast[0]) {
        vidac1.style.color ="#e31212";
    }
    if(vidac2.textContent < vidast[1]) {
        vidac2.style.color ="#e31212";
    }
    if(vidac3.textContent < vidast[2]) {
        vidac3.style.color ="#e31212";
    }
    if(vidac4.textContent < vidast[3]) {
        vidac4.style.color ="#e31212";
    }
    if(vidac5.textContent < vidast[4]) {
        vidac5.style.color ="#e31212";
    }
    if(vidac6.textContent < vidast[5]) {
        vidac6.style.color ="#e31212";
    }
    if(vidac7.textContent < vidast[6]) {
        vidac7.style.color ="#e31212";
    }
    if(danoini[0].textContent > danost[0]) {
        danoini[0].style.color = "#006e06";
    }
    else {
        danoini[0].style.color = "#000";
    }
    if(danoini[1].textContent > danost[1]) {
        danoini[1].style.color = "#006e06";
    }
    else {
        danoini[1].style.color = "#000";
    }
    if(danoini[2].textContent > danost[2]) {
        danoini[2].style.color = "#006e06";
    }
    else {
        danoini[2].style.color = "#000";
    }
    if(danoini[3].textContent > danost[3]) {
        danoini[3].style.color = "#006e06";
    }
    else {
        danoini[3].style.color = "#000";
    }
    if(danoini[4].textContent > danost[4]) {
        danoini[4].style.color = "#006e06";
    }
    else {
        danoini[4].style.color = "#000";
    }
    if(danoini[5].textContent > danost[5]) {
        danoini[5].style.color = "#006e06";
    }
    else {
        danoini[5].style.color = "#000";
    }
    if(danoini[6].textContent > danost[6]) {
        danoini[6].style.color = "#006e06";
    }
    else {
        danoini[6].style.color = "#000";
    }
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
}, 0)

setInterval(() => {
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
        aliado.style.animationName = "unset";
        inimigoc.style.animationName = "pulsebgi";
    }
    else {
        dado.style.height = "40vh";
        dado.style.width = "40vh";
        num.style.height = "30vh";
        inimigoc.style.animationName = "unset";
        aliado.style.animationName = "pulsebg";
    }
    for (let i = 0; i < muns.length; i++) {
        if(muns[i] == 0 && per == i + 1) {
            armas[i] = coronhada;
            for(let j = 0; j < niveis.length; j++) {
                switch (niveis[j].textContent) {
                    case "NV: I":
                        danos[j] = armas[j];
                        dns[j].textContent = Math.floor(armas[j]);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: II":
                        danos[j] = 10 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 10);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: III":
                        danos[j] = 25 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 25);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: IV":
                        danos[j] = 45 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 45);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: V":
                        danos[j] = 65 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 65);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: VI":
                        danos[j] = 95 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 95);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: VII":
                        danos[j] = 130 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 130);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: VIII":
                        danos[j] = 170 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 170);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: IX":
                        danos[j] = 215 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 215);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
                    break;
                    case "NV: X":
                        danos[j] = 265 + armas[j];
                        dns[j].textContent = Math.floor(armas[j] + 265);
                        dans1 = danoc1a.textContent;
                        dans2 = danoc2a.textContent;
                        dans3 = danoc3a.textContent;
                        dans4 = danoc4a.textContent;
                        dans5 = danoc5a.textContent;
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
        deschab.style.top = "27.5vh";
        btns.style.bottom = "11vh";
    }
    else {
        ordenar.style.display = "block";
        hab.style.bottom = "-11vh";
        deschab.style.top = "18.5vh";
        btns.style.bottom = "20vh";
    }
    for (let i = 0; i < armas.length; i++) {
    switch(true) {
        case per == i + 1 && usandoc == true:
            armasatl.textContent = "Canhões";
            if(miraspr == false) {
            expl = false;
            area = false;
            }
            mun.style.display = "none";
        break;
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
if(habatv == 1) {
    if(miraspr == true) {
        for (let i = 0; i < cartasi.length; i++) {
            cartasi[i].addEventListener("click", apcdado);
        }
    }
    else if(per != 1) {
        for (let i = 0; i < cartasi.length; i++) {
            cartasi[i].removeEventListener("click", apcdado);
        }
    }
    else {
        for (let i = 0; i < cartasi.length; i++) {
            cartasi[i].addEventListener("click", apcdado);
        }
    }
}
else {
    for (let i = 0; i < cartasi.length; i++) {
        if(incis[i].style.display != "flex") {
        cartasi[i].addEventListener("click", apcdado);
        }
    }
}
if(vez.style.top == "2vh" && per == 1 && habatv == 1) {
    for (let i = 0; i < miras.length; i++) {
        miras[i].style.display = "none";
    }
}
for(let i = 0; i < 7; i++) {
    if(habatv == 1 && miraspr == false) {
        miras[i].src = "https://cdn-icons-png.flaticon.com/512/3384/3384664.png";
    }
    else if(numhab != 2) {
        miras[i].src = "https://cdn-icons-png.flaticon.com/512/487/487009.png";
    }
}
    aurianos[0] = auriano;
    aurianos[1] = aurianop2;
    aurianos[2] = aurianop3;
    aurianos[3] = aurianop4;
    aurianos[4] = aurianop5;
}, 10)

setInterval(() => {
    for (let i = 0; i < xps.length; i++) {
        if(cartasi[i].style.display != "none") {
        switch (cartasi[i].style.backgroundImage) {
            case 'url("TripR.png")':
                xps[i] = 50;
            break;
            case 'url("TripN.png")':
                xps[i] = 150;
            break;
            case 'url("Tn.png")':
                xps[i] = 850;
            break;
            case 'url("Ruivo.png")':
                xps[i] = 600;
            break;
            case 'url("BN.png")':
                xps[i] = 2000;
            break;
            case 'url("Osio.png")':
                xps[i] = 400;
            break;
            case 'url("Granadeiro.png")':
                xps[i] = 500;
            break;
            case 'url("Fromir.png")':
                xps[i] = 1350;
            break;
            case 'url("Tesouros.png")':
                xps[i] = 150;
            break;
            case 'url("Arthur.png")':
                xps[i] = 5000;
            break;
            case 'url("thesauriano.png")':
                xps[i] = 350;
            break;
        }
    }
    }
    if(vt == true) {
        xptl = xps[0] + xps[1] + xps[2] + xps[3] + xps[4] + xps[5] + xps[6];
        ourotl = ouroc1.textContent * 1 + ouroc2.textContent * 1 + ouroc3.textContent * 1 + ouroc4.textContent * 1 + ouroc5.textContent * 1 + ouroc6.textContent * 1 + ouroc7.textContent * 1;
        setTimeout(() => {
        ourotl = Math.floor(ourotl);
        if(ouropt < ourotl) {
            if(ourotl > 3000) {
                ouropt += 5;
            }
            else {
                ouropt++;
            }
        }
        if(xppt < xptl) {
            if(xptl > 2000) {
                xppt += 5;
            }
            else {
                xppt++;
            }
        }
        ourorec.textContent = `Ouro: ${ouropt}`;
        xp.textContent = `XP: ${xppt}`;
        }, 1000)
    }
}, 5)

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
    if(vidabarcoi.textContent <= 0) {
        nv1i.style.backgroundColor = "#fcf003";
        nv1i.style.animationName = "pulse";
        nv2i.style.animationName = "pulse";
        nv3i.style.animationName = "pulse";
    }
    if(vidabarcoa.textContent <= 0) {
        nv1.style.backgroundColor = "#fcf003";
        nv1.style.animationName = "pulse";
        nv2.style.animationName = "pulse";
        nv3.style.animationName = "pulse";
    }
    if(vidabarcoi.textContent * 1 < vidai) {
        vidabarcoi.style.color = "#ed9d9d";
    }
    if(vidabarcoa.textContent * 1 < vidaa) {
        vidabarcoa.style.color = "#ed9d9d";
    }
    switch(per) {
        case 1:
            hab.style.backgroundColor = "#13801a";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/855/855059.png";
            cooldown.textContent = cool1;
            tithab.textContent = "Comando de Equipe";
            tithab.style.color = "#6cdf00";
            tithab.style.borderColor = "#6cdf00";
            deshab.textContent = "Ordena com que todos da tripulação ataquem um único inimigo com um aumento de 50% no dano por 1 turno;";
            cdesc.textContent = "Cooldown: 5 turnos";
        break;
        case 2:
            hab.style.backgroundColor = "#3084cf";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/2851/2851844.png";
            cooldown.textContent = cool2;
            tithab.textContent = "Ataque Duplo";
            tithab.style.color = "#36a6b5";
            tithab.style.borderColor = "#36a6b5";
            deshab.textContent = "Ataca duas vezes qualquer inimigo;";
            cdesc.textContent = "Cooldown: 5 turnos";
        break;
        case 3:
            hab.style.backgroundColor = "#cf30ca";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/15532/15532570.png";
            cooldown.textContent = cool3;
            tithab.textContent = "Cura Magistral";
            tithab.style.color = "#b536a8";
            tithab.style.borderColor = "#b536a8";
            deshab.textContent = "Recupera 85% da vida de um membro da tripulação;";
            cdesc.textContent = "Cooldown: 5 turnos";
        break;
        case 4:
            hab.style.backgroundColor = "#cf303d";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/5246/5246522.png";
            cooldown.textContent = cool4;
            tithab.textContent = "Rugido Furioso";
            tithab.style.color = "#db1f44";
            tithab.style.borderColor = "#db1f44";
            deshab.textContent = "Aumenta o dano de todos da tripulação em 25% durante 3 turnos;";
            cdesc.textContent = "Cooldown: 7 turnos";
        break;
        case 5:
            hab.style.backgroundColor = "#30cf9d";
            ichab.src = "https://cdn-icons-png.flaticon.com/512/139/139776.png";
            cooldown.textContent = cool5;
            tithab.textContent = "Aura Defensiva";
            tithab.style.color = "#1fdbd8";
            tithab.style.borderColor = "#1fdbd8";
            deshab.textContent = "Aumenta a resistência de todos da tripulação em 20% por 2 turnos;";
            cdesc.textContent = "Cooldown: 6 turnos";
        break;
    }
    if(habatv == 0) {
        danototalp1 = dans1;
        danototalp2 = dans2;
        danototalp3 = dans3;
        danototalp4 = dans4;
        danototalp5 = dans5;
        danoc1a.textContent = Math.floor(dans1);
        danoc2a.textContent = Math.floor(dans2);
        danoc3a.textContent = Math.floor(dans3);
        danoc4a.textContent = Math.floor(dans4);
        danoc5a.textContent = Math.floor(dans5);
    }
    personagem();
    for (let i = 0; i < dns.length; i++) {
        if(dns[i].textContent > danos[i]) {
            dns[i].style.color = "#006e06";
        }
        else {
            dns[i].style.color = "#000";
        }
    }
    if(cooldown.textContent != "0") {
        hab.removeEventListener("click", habilidades);
        cool.style.display = "flex";
    }
    else {
        hab.addEventListener("click", habilidades);
        cool.style.display = "none";
    }
if(escolhendo == false) {
    if(quantmp.textContent == 0) {
        kit.removeEventListener("click", kitf);
    }
    else {
        kit.addEventListener("click", kitf);
    }
    if(quantrp.textContent == 0) {
        reparo.removeEventListener("click", reparof);
    }
    else {
        reparo.addEventListener("click", reparof);
    }
    if(quantap.textContent == 0) {
        auriana.removeEventListener("click", aurianaf);
    }
    else {
        auriana.addEventListener("click", aurianaf);
    }
    if(quantcp.textContent == 0) {
        cristais.removeEventListener("click", cristaisf);
    }
    else {
        cristais.addEventListener("click", cristaisf);
    }
    if(quantsp.textContent == 0) {
        sopro.removeEventListener("click", soprof);
    }
    else {
        sopro.addEventListener("click", soprof);
    }
    if(quantep.textContent == 0) {
        explosiva.removeEventListener("click", explosivaf);
    }
    else {
        explosiva.addEventListener("click", explosivaf);
    }
    if(quantfp.textContent == 0) {
        ferro.removeEventListener("click", ferrof);
    }
    else {
        ferro.addEventListener("click", ferrof);
    }
    if(quantip.textContent == 0) {
        incendiario.removeEventListener("click", incendiariof);
    }
    else {
        incendiario.addEventListener("click", incendiariof);
    }

    if(quantm.textContent == 0) {
        kit2.removeEventListener("click", kitf2);
    }
    else {
        kit2.addEventListener("click", kitf2);
    }
    if(quantr.textContent == 0) {
        reparo2.removeEventListener("click", reparof2);
    }
    else {
        reparo2.addEventListener("click", reparof2);
    }
    if(quanta.textContent == 0) {
        auriana2.removeEventListener("click", aurianaf2);
    }
    else {
        auriana2.addEventListener("click", aurianaf2);
    }
    if(quantc.textContent == 0) {
        cristais2.removeEventListener("click", cristaisf2);
    }
    else {
        cristais2.addEventListener("click", cristaisf2);
    }
    if(quants.textContent == 0) {
        sopro2.removeEventListener("click", soprof2);
    }
    else {
        sopro2.addEventListener("click", soprof2);
    }
    if(quante.textContent == 0) {
        explosiva2.removeEventListener("click", explosivaf2);
    }
    else {
        explosiva2.addEventListener("click", explosivaf2);
    }
    if(quantf.textContent == 0) {
        ferro2.removeEventListener("click", ferrof2);
    }
    else {
        ferro2.addEventListener("click", ferrof2);
    }
    if(quanti.textContent == 0) {
        incendiario2.removeEventListener("click", incendiariof2);
    }
    else {
        incendiario2.addEventListener("click", incendiariof2);
    }
}

totalitnb = quantm.textContent - -quantr.textContent - -quanta.textContent - -quantc.textContent - -quants.textContent - -quante.textContent - -quantf.textContent - -quanti.textContent;
totalitnp1 = defmp1 - -defrp1 - -defap1 - -defcp1 - -defsp1 - -defep1 - -deffp1 - -defip1;
totalitnp2 = defmp2 - -defrp2 - -defap2 - -defcp2 - -defsp2 - -defep2 - -deffp2 - -defip2;
totalitnp3 = defmp3 - -defrp3 - -defap3 - -defcp3 - -defsp3 - -defep3 - -deffp3 - -defip3;
totalitnp4 = defmp4 - -defrp4 - -defap4 - -defcp4 - -defsp4 - -defep4 - -deffp4 - -defip4;
totalitnp5 = defmp5 - -defrp5 - -defap5 - -defcp5 - -defsp5 - -defep5 - -deffp5 - -defip5;

    if(vez.style.top == "2vh") {
        miraspr = false;
    }
    numdado = rolln.textContent;
    for (let i = 0; i < duraqmds.length; i++) {
        if(duraqmds[i] == 0) {
            queimando[i] = false;
            db1i1.style.display = "none";
            db1i2.style.display = "none";
            db1i3.style.display = "none";
            db1i4.style.display = "none";
            db1i5.style.display = "none";
            db1i6.style.display = "none";
            db1i7.style.display = "none";
            confogos[i].style.animationName = "apgfogo";
        }
    }
    for (let i = 0; i < confogos.length; i++) {
    if(durafrios[i] == 0) {
        gelos[i] = false;
        db1i1.style.display = "none";
        db1i2.style.display = "none";
        db1i3.style.display = "none";
        db1i4.style.display = "none";
        db1i5.style.display = "none";
        db1i6.style.display = "none";
        db1i7.style.display = "none";
        confogos[i].style.animationName = "descongelado";
        }
    else {
        if(imgdbi1.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac1.style.display == "block") {
            gelo = true;
            ttl();
        }
        else {
            gelo = false;
            if(mirac1.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi2.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac2.style.display == "block") {
            gelop2 = true;
            ttl();
        }
        else {
            gelop2 = false;
            if(mirac2.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi3.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac3.style.display == "block") {
            gelop3 = true;
            ttl();
        }
        else {
            gelop3 = false;
            if(mirac3.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi4.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac4.style.display == "block") {
            gelop4 = true;
            ttl();
        }
        else {
            gelop4 = false;
            if(mirac4.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi5.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac5.style.display == "block") {
            gelop5 = true;
            ttl();
        }
        else {
            gelop5 = false;
            if(mirac5.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi6.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac6.style.display == "block") {
            gelop6 = true;
            ttl();
        }
        else {
            gelop6 = false;
            if(mirac6.style.display == "block") {
                ttl();
            }
        }
        if(imgdbi7.src == "https://cdn-icons-png.flaticon.com/512/1553/1553283.png" && mirac7.style.display == "block") {
            gelop7 = true;
            ttl();
        }
        else {
            gelop7 = false;
            if(mirac7.style.display == "block") {
                ttl();
            }
        }
}
    }
    if (area == false) {
        switch (true) {
            case miras[0].style.display == "block":
                miraatl = 1;
            break;
            case miras[1].style.display == "block":
                miraatl = 2;
            break;
            case miras[2].style.display == "block":
                miraatl = 3;
            break;
            case miras[3].style.display == "block":
                miraatl = 4; 
            break;
            case miras[4].style.display == "block":
                miraatl = 5;
            break;
            case miras[5].style.display == "block":
                miraatl = 6;
            break;
            case miras[6].style.display == "block":
                miraatl = 7;
            break;
        }
    }
    if(area == true && habatv == 1 && miraspr == false && expl == false) {
        switch (miraatl) {
            case 1:
                miras[0].style.display = "block";
                miras[1].style.display = "none";
                miras[2].style.display = "none";
                miras[3].style.display = "none";
                miras[4].style.display = "none";
                miras[5].style.display = "none";
                miras[6].style.display = "none";
            break;
            case 2:
                miras[0].style.display = "none";
                miras[1].style.display = "block";
                miras[2].style.display = "none";
                miras[3].style.display = "none";
                miras[4].style.display = "none";
                miras[5].style.display = "none";
                miras[6].style.display = "none";
            break;
            case 3:
                miras[0].style.display = "none";
                miras[1].style.display = "none";
                miras[2].style.display = "block";
                miras[3].style.display = "none";
                miras[4].style.display = "none";
                miras[5].style.display = "none";
                miras[6].style.display = "none";
            break;
            case 4:
                miras[0].style.display = "none";
                miras[1].style.display = "none";
                miras[2].style.display = "none";
                miras[3].style.display = "block";
                miras[4].style.display = "none";
                miras[5].style.display = "none";
                miras[6].style.display = "none";
            break;
            case 5:
                miras[0].style.display = "none";
                miras[1].style.display = "none";
                miras[2].style.display = "none";
                miras[3].style.display = "none";
                miras[4].style.display = "block";
                miras[5].style.display = "none";
                miras[6].style.display = "none";
            break;
            case 6:
                miras[0].style.display = "none";
                miras[1].style.display = "none";
                miras[2].style.display = "none";
                miras[3].style.display = "none";
                miras[4].style.display = "none";
                miras[5].style.display = "block";
                miras[6].style.display = "none";
            break;
            case 7:
                miras[0].style.display = "none";
                miras[1].style.display = "none";
                miras[2].style.display = "none";
                miras[3].style.display = "none";
                miras[4].style.display = "none";
                miras[5].style.display = "none";
                miras[6].style.display = "block";
            break;
        }
    }
if(habatv == 1 && per != 1 && miraspr == false) {
    for (let i = 0; i < cartasi.length; i++) {
        cartasi[i].removeEventListener("click", apcdado);
    }
}
if(numhab == 2 && miraspr == false && habatv != 1) {
    for (let i = 0; i < cartasi.length; i++) {
        miras[i].src = "https://cdn-icons-png.flaticon.com/512/2723/2723616.png";
    }
}
else if(habatv != 1) {
    for (let i = 0; i < cartasi.length; i++) {
        miras[i].src = "https://cdn-icons-png.flaticon.com/512/487/487009.png";
    }
}
if(prancha == false && usandoc == false) {
    switch (per) {
        case 1:
            if(armas[0] == armasb[0] || armas[0] == armasb[1] || armas[0] == armasb[2] || armas[0] == armasb[3] || armas[0] == armasb[4] || armas[0] == armasb[5] || armas[0] == coronhada || armas[0] == espada ) {
                atacar.textContent = "Prancha";
            }
            else {
                atacar.textContent = "Atacar";
            }
        break;
        case 2:
            if(armas[1] == armasb[0] || armas[1] == armasb[1] || armas[1] == armasb[2] || armas[1] == armasb[3] || armas[1] == armasb[4] || armas[1] == armasb[5] || armas[1] == coronhada || armas[1] == espada) {
                atacar.textContent = "Prancha";
            }
            else {
                atacar.textContent = "Atacar";
            }
        break;
        case 3:
            if(armas[2] == armasb[0] || armas[2] == armasb[1] || armas[2] == armasb[2] || armas[2] == armasb[3] || armas[2] == armasb[4] || armas[2] == armasb[5] || armas[2] == coronhada || armas[2] == espada) {
                atacar.textContent = "Prancha";
            }
            else {
                atacar.textContent = "Atacar";
            }
        break;
        case 4:
            if(armas[3] == armasb[0] || armas[3] == armasb[1] || armas[3] == armasb[2] || armas[3] == armasb[3] || armas[3] == armasb[4] || armas[3] == armasb[5] || armas[3] == coronhada || armas[3] == espada) {
                atacar.textContent = "Prancha";
            }
            else {
                atacar.textContent = "Atacar";
            }
        break;
        case 5:
            if(armas[4] == armasb[0] || armas[4] == armasb[1] || armas[4] == armasb[2] || armas[4] == armasb[3] || armas[4] == armasb[4] || armas[4] == armasb[5] || armas[4] == coronhada || armas[4] == espada) {
                atacar.textContent = "Prancha";
            }
            else {
                atacar.textContent = "Atacar";
            }
        break;
    }
}
else {
    atacar.textContent = "Atacar";
}
numitp1.textContent = totalitnp1;
numitp2.textContent = totalitnp2;
numitp3.textContent = totalitnp3;
numitp4.textContent = totalitnp4;
numitp5.textContent = totalitnp5;
numitb.textContent = totalitnb;
defitens();
if(horda != 0 && horda != undefined || chefe != 0 && horda != undefined) {
    btncom.addEventListener("click", inicio);
}
else {
    btncom.removeEventListener("click", inicio);
}
for (let i = 0; i < selarmas.length; i++) {
    if(selarmas[i].value == "mosquete" || selarmas[i].value == "perdeneira" || selarmas[i].value == "besta" || selarmas[i].value == "granada" || selarmas[i].value == "molotov" || selarmas[i].value == "nock" || selarmas[i].value == "pistola") {
        nummuns[i].style.display = "block";
    }
    else {
        nummuns[i].style.display = "none";
    }
}
if(armasatl.textContent == "Granada" && turnoa) {
    expl = true;
    area = true;
}
if(usandoc == false) {
switch (per) {
    case 1:
        if(armas[0] == molotov) {
            aquecida = true;
        }
    break;
    case 2:
        if(armas[1] == molotov) {
            aquecidap2 = true;
        }
    break;
    case 3:
        if(armas[2] == molotov) {
            aquecidap3 = true;
        }
    break;
    case 4:
        if(armas[3] == molotov) {
            aquecidap4 = true;
        }
    break;
    case 5:
        if(armas[4] == molotov) {
            aquecidap5 = true;
        }
    break;
}
}
for (let i = 0; i < confogos.length; i++) {
    switch(true) {
    case vidasi[i].textContent * 1 < vidast[i] * 0.99 && vidasi[i].textContent * 1 > vidast[i] * 0.66:
        confogos[i].style.backgroundImage = "url(rasgo1.png)";
    break;
    case vidasi[i].textContent * 1 < vidast[i] * 0.66 && vidasi[i].textContent * 1 > vidast[i] * 0.33:
        confogos[i].style.backgroundImage = "url(rasgo2.png)";
    break;
    case vidasi[i].textContent * 1 < vidast[i] * 0.33 && vidasi[i].textContent * 1 > 0:
        confogos[i].style.backgroundImage = "url(rasgo3.png)";
    break;
    case vidasi[i].textContent * 1 == 0 && incis[i].style.display == "flex":
        confogos[i].style.backgroundImage = "url(rasgo4.png)";
    break;
    default:
        confogos[i].style.backgroundImage = "unset";
    }
}
for (let i = 0; i < danorea.length; i++) {
    switch(true) {
    case vidas[i].textContent * 1 < vds[i] * 0.99 && vidas[i].textContent * 1 > vds[i] * 0.66:
        danorea[i].style.backgroundImage = "url(rasgo1.png)";
    break;
    case vidas[i].textContent * 1 < vds[i] * 0.66 && vidas[i].textContent * 1 > vds[i] * 0.33:
        danorea[i].style.backgroundImage = "url(rasgo2.png)";
    break;
    case vidas[i].textContent * 1 < vds[i] * 0.33 && vidas[i].textContent * 1 > 0:
        danorea[i].style.backgroundImage = "url(rasgo3.png)";
    break;
    case vidas[i].textContent * 1 == 0:
        danorea[i].style.backgroundImage = "url(rasgo4.png)";
    break;
    default:
        danorea[i].style.backgroundImage = "unset";
    }
}
}, 10)

setInterval(() => {
    if(vidabarcoa.textContent * 1 > vidaa * 1) {
        vidabarcoa.textContent = vidaa;
        vidabarcoa.style.color = "#fff";
    }
    for (let i = 0; i < vidas.length; i++) {
    if(vidas[i].textContent * 1 > vds[i] * 1) {
        vidas[i].style.color = "#000";
        vidas[i].textContent = vds[i];
    }
}
}, 50)

setInterval(() => {
    for(let i = 0; i < vidas.length; i++) {
        if(vidas[i].textContent * 1 < vds[i]) {
            vidas[i].style.color = "#e31212";
        }
    }
    if(vidabarcoi.textContent <= 0) {
        vidabarcoi.textContent = 0;
    }
    if(vidabarcoa.textContent <= 0) {
        vidabarcoa.textContent = 0;
    }
    if(inci1.style.display == "flex" && inci2.style.display == "flex" && inci3.style.display == "flex" && inci4.style.display == "flex" && inci5.style.display == "flex" && inci6.style.display == "flex" && inci7.style.display == "flex") {
        vtdrct.style.display = "flex";
        vez.style.display = "none";
        vt = true;
        ourorec.style.display = "flex";
        xp.style.display = "flex";
        saque.style.display = "flex";
        vtdr.style.height = "80vh";
        for (let i = 2; i < musica.length; i++) {
            musica[0].pause();
            musica[i].pause();
        }
        if(musica[1].paused == true) {
            musica[1].play();
        }
    }
    if(inc1.style.display == "flex" && inc1.style.visibility == "hidden" || inc2.style.display == "flex" && inc2.style.visibility == "hidden" || inc3.style.display == "flex" && inc3.style.visibility == "hidden" || inc4.style.display == "flex" && inc4.style.visibility == "hidden" || inc5.style.display == "flex" && inc5.style.visibility == "hidden") {
        atordoados = true;
    }
    else {
        atordoados = false;
    }
    if(inc1.style.display == "flex" && inc2.style.display == "flex" && inc3.style.display == "flex" && inc4.style.display == "flex" && inc5.style.display == "flex" && atordoados == false) {
        vtdrct.style.display = "flex";
        vez.style.display = "none";
        vt = true;
        for (let i = 0; i < vidas.length; i++) {
            vidas[i].textContent = 0;
        }
        setTimeout(() => {
        for (let i = 0; i < 6; i++) {
            sons[i].pause();
        }
        }, 500)
        for (let i = 0; i < cartasi.length; i++) {
            cartasi[i].style.animationName = "unset";
        }
        ourorec.style.display = "none";
        xp.style.display = "none";
        saque.style.display = "none";
        vtdr.style.height = "30vh";
        defvt.textContent = "Derrota";
        for (let i = 0; i <= 3; i++) {
            musica[i].pause();
        }
        if(musica[4].paused == true) {
            musica[4].play();
        }
    }
        if(incs[0].style.display == "flex" && incs[1].style.display == "flex" && incs[2].style.display == "flex" && incs[3].style.display == "flex" && incs[4].style.display == "flex" && atordoados == true) {
            trocar();
        }
        switch (per) {
            case 1:
                pertxt = "Barbarovsk";
            break;
            case 2:
                pertxt = "Crowly";
            break;
            case 3:
                pertxt = "Lysa";
            break;
            case 4:
                pertxt = "Darban";
            break;
            case 5:
                pertxt = "Gabriele";
            break;
        }
        for (let i = 0; i < cartasi.length; i++) {
        switch (cartasi[i].style.backgroundImage) {
            case 'url("BN.png")':
                initxt[i] = "Barba-Negra";
            break;
            case 'url("TripN.png")':
                initxt[i] = "Tripulante do Barba-Negra";
            break;
            case 'url("TripR.png")':
                initxt[i] = "Tripulante do Barba-Ruiva";
            break;
            case 'url("Osio.png")':
                initxt[i] = "Osio";
            break;
            case 'url("Ruivo.png")':
                initxt[i] = "Barba-Ruiva";
            break;
            case 'url("thesauriano.png")':
                initxt[i] = "Pirata Thesauriano";
            break;
            case 'url("Tina.png")':
                initxt[i] = "Tina";
            break;
            case 'url("Villinski.png")':
                initxt[i] = "Villinski";
            break;
            case 'url("Fromir.png")':
                initxt[i] = "Fromir";
            break;
            case 'url("Granadeiro.png")':
                initxt[i] = "Granadeiro";
            break;
            case 'url("Tesouros.png")':
                initxt[i] = "Caçador-de-Tesouros";
            break;
        }
    }
    if(ini != 0 && ini != undefined) {
    switch (true) {
        case cartasi[ini - 1].style.backgroundImage == 'url("TripN.png")':
            txtini = "Tripulante do Barba-Negra";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("BN.png")':
            txtini = "Barba-Negra";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("TripR.png")':
            txtini = "Tripulante do Barba-Ruiva";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Osio.png")':
            txtini = "Osio";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Ruivo.png")':
            txtini = "Barba-Ruiva";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("thesauriano.png")':
            txtini = "Pirata Thesauriano";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Tina.png")':
            txtini = "Tina";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Villinski.png")':
            txtini = "Villinski";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Fromir.png")':
            txtini = "Fromir";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Granadeiro.png")':
            txtini = "Granadeiro";
        break;
        case cartasi[ini - 1].style.backgroundImage == 'url("Tesouros.png")':
            txtini = "Caçador-de-Tesouros";
        break;
    }
}
    if(vt == true && vtq == false && defvt.textContent != "Derrota") {
        logtxt.innerHTML += `> <em style="color: #ebd534;">Vitória</em> da tripulação de <em>Barbarovsk</em>` + "<br>";
        vtq = true;
    }
    if(!turnoa) {
        for (let i = 0; i < cartasi.length; i++) {
            cartasi[i].removeEventListener("click", apcdado);
        }
    }
    if(prsom.currentTime >= 1.8) {
        prsom.pause();
    }
    if(mapa == "Terra") {
        ib.style.display = "none";
        barcoit.style.display = "none";
    }
    else {
        ib.style.display = "block";
        barcoit.style.display = "grid";
    }
    if(!turnoa) {
        armasatl.textContent = "";
    }
    if(escolhendo == true) {
        logct.style.right = "-56vh";
        logct.style.display = "none";
    }
    else {
        logct.style.display = "flex";
    }
    for (let i = 0; i < vidasi.length; i++) {
        if(vidasi[i].textContent * 1 >= 1000) {
            vidasi[i].style.fontSize = "2vh";
        }
        else {
            vidasi[i].style.fontSize = "2.5vh";
        }
    }
    for (let i = 0; i < ouros.length; i++) {
        if(ouros[i].textContent * 1 >= 1000) {
            ouros[i].style.fontSize = "1.5vh";
            ouros[i].style.marginLeft = "1vh";
        }
        else {
            ouros[i].style.fontSize = "2vh";
            ouros[i].style.marginLeft = "0vh";
        }
    }
    if(!turnoa) {
        miraatl = 0;
    }
    if(chefe == 3 && vidac1.textContent * 1 > 320) {
        vidac1.textContent = 320;
    }
    if(chefe == 5 && vidac1.textContent * 1 > 1000) {
        vidac1.textContent = 1000;
    }
}, 0)