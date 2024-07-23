function danoinimigo() {
    if(essencia == false) {
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
    else {
        switch(ini) {
            case 1:
                danototalini = danoini[0].textContent / 2;
            break;
            case 2:
                danototalini = danoini[1].textContent / 2;
            break;
            case 3:
                danototalini = danoini[2].textContent / 2;
            break;
            case 4:
                danototalini = danoini[3].textContent / 2;
            break;
            case 5:
                danototalini = danoini[4].textContent / 2;
            break;
            case 6:
                danototalini = danoini[5].textContent / 2;
            break;
            case 7:
                danototalini = danoini[6].textContent / 2;
            break;
        }
    }
    quinze = Math.floor(Math.random() * 7) + 1;
    if(quinze == 7 && !turnoa && numdado > 3) {
        if(cartasi[ini - 1].style.backgroundImage == 'url("Villinski.png")' || cartasi[ini - 1].style.backgroundImage == 'url("Fromir.png")') {
            danototalini *= 3;
        }
    }
if(area == false) {
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
    hpp = Math.floor(vidas[0].textContent * 1 - -5 - (danototalini * resps[0]));
    hpp2 = Math.floor(vidas[1].textContent * 1 - -5 - (danototalini * resps[1]));
    hpp3 = Math.floor(vidas[2].textContent * 1 - -5 - (danototalini * resps[2]));
    hpp4 = Math.floor(vidas[3].textContent * 1 - -5 - (danototalini * resps[3]));
    hpp5 = Math.floor(vidas[4].textContent * 1 - -5 - (danototalini * resps[4]));
    est.textContent = "Ataque Fraco";
    est.style.color = "#f7847c";
}

else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
    hpp = Math.floor(vidas[0].textContent * 1 - (danototalini * resps[0]));
    hpp2 = Math.floor(vidas[1].textContent * 1 - (danototalini * resps[1]));
    hpp3 = Math.floor(vidas[2].textContent * 1 - (danototalini * resps[2]));
    hpp4 = Math.floor(vidas[3].textContent * 1 - (danototalini * resps[3]));
    hpp5 = Math.floor(vidas[4].textContent * 1 - (danototalini * resps[4]));
    est.textContent = "Ataque Normal";
    est.style.color = "#fbff08";
}

else if (numdado == 16 || numdado == 17 || numdado == 18){
    hpp = Math.floor(vidas[0].textContent * 1 - danototalini);
    hpp2 = Math.floor(vidas[1].textContent * 1 - danototalini);
    hpp3 = Math.floor(vidas[2].textContent * 1 - danototalini);
    hpp4 = Math.floor(vidas[3].textContent * 1 - danototalini);
    hpp5 = Math.floor(vidas[4].textContent * 1 - danototalini);
    est.textContent = "Ataque Forte";
    est.style.color = "#a0ff08";
}

else if (numdado == 19 || numdado == 20){
    hpp = Math.floor(vidas[0].textContent * 1 - danototalini - 15);
    hpp2 = Math.floor(vidas[1].textContent * 1 - danototalini - 15);
    hpp3 = Math.floor(vidas[2].textContent * 1 - danototalini - 15);
    hpp4 = Math.floor(vidas[3].textContent * 1 - danototalini - 15);
    hpp5 = Math.floor(vidas[4].textContent * 1 - danototalini - 15);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}
}
else {
    if(numdado <= 10){
        hpp = vidas[0].textContent;
        hpp2 = vidas[1].textContent;
        hpp3 = vidas[2].textContent;
        hpp4 = vidas[3].textContent;
        hpp5 = vidas[4].textContent;
        est.textContent = "Ataque Falho";
        est.style.color = "#fc1303";
    }
    else {
        hpp = Math.floor(vidas[0].textContent * 1 - (danototalini * resps[0]));
        hpp2 = Math.floor(vidas[1].textContent * 1 - (danototalini * resps[1]));
        hpp3 = Math.floor(vidas[2].textContent * 1 - (danototalini * resps[2]));
        hpp4 = Math.floor(vidas[3].textContent * 1 - (danototalini * resps[3]));
        hpp5 = Math.floor(vidas[4].textContent * 1 - (danototalini * resps[4]));
        est.textContent = "Ataque Acertivo";
        est.style.color = "#fbff08";
    }
}
setTimeout(() => {
if(ini != undefined && ini != 0 && cartasi[ini - 1].style.backgroundImage == 'url("Granadeiro.png")' && vidabarcoa.textContent != "0" && mapa != "Terra") {
    vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - danoini[ini - 1].textContent * 1);
    mlifea();
}
}, 1000)
}

function dano() {
    if(armasatl.textContent != "Canhões") {
    if(armasatl.textContent != "Granada") {
    if(armasatl.textContent != "Espingarda Nock" || expl == true) {
    if(expl == false || armasatl.textContent == "Granada") {
    if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
    }
    else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        hpt = Math.floor(vidac1.textContent * 1 - -5 - (danototal * rests[0]));
        hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
        hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
        hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
        hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
        hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
        hpt7 = Math.floor(vidac7.textContent * 1 - -5 - (danototal * rests[6]));
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
        }
    }
    else {
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
if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
    hpt = Math.floor(vidac1.textContent * 1 - -5 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - -5 - (danototal * rests[6]));
    est.textContent = "Ataque Fraco";
    est.style.color = "#f7847c";
}

else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
    hpt = Math.floor(vidac1.textContent * 1 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - (danototal * rests[6]));
    est.textContent = "Ataque Normal";
    est.style.color = "#fbff08";
}

else if (numdado == 16 || numdado == 17 || numdado == 18){
    hpt = Math.floor(vidac1.textContent * 1 - danototal);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal);
    est.textContent = "Ataque Forte";
    est.style.color = "#a0ff08";
}

else if(numdado == 20 && armasatl.textContent == "Mini-Arpão" && chefe == 1 || numdado == 20 && armasatl.textContent == "Mini-Arpão" && chefe == 2) {
    hpt = Math.floor(vidac1.textContent * 1 - danototal - 15);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal - 3500);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 3500);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 3500);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 3500);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal - 3500);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal - 3500);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}

else if(numdado == 20 && armasatl.textContent == "Mini-Arpão") {
    hpt = Math.floor(vidac1.textContent * 1 - danototal - 3500);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal - 3500);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 3500);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 3500);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 3500);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal - 3500);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal - 3500);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}

else if (numdado == 19 || numdado == 20){
    hpt = Math.floor(vidac1.textContent * 1 - danototal - 15);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal - 15);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 15);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 15);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 15);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal - 15);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal - 15);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}
    }
    else {
        if(numdado > 3 || auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5){
            hpt = Math.floor(vidac1.textContent * 1 - (500 * rests[0]));
            hpt2 = Math.floor(vidac2.textContent * 1 - (500 * rests[1]));
            hpt3 = Math.floor(vidac3.textContent * 1 - (500 * rests[2]));
            hpt4 = Math.floor(vidac4.textContent * 1 - (500 * rests[3]));
            hpt5 = Math.floor(vidac5.textContent * 1 - (500 * rests[4]));
            hpt6 = Math.floor(vidac6.textContent * 1 - (500 * rests[5]));
            hpt7 = Math.floor(vidac7.textContent * 1 - (500 * rests[6]));
            est.textContent = "Ataque Arcetivo";
            est.style.color = "#a0ff08";
        }
        else{
            hpt = vidac1.textContent;
            hpt2 = vidac2.textContent;
            hpt3 = vidac3.textContent;
            hpt4 = vidac4.textContent;
            hpt5 = vidac5.textContent;
            hpt6 = vidac6.textContent;
            hpt7 = vidac7.textContent;
            est.textContent = "Ataque Fraco";
            est.style.color = "#fc1303";
        }
    }
}
else {
    switch (per) {
        case 1:
                if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
                }
                else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
                    if(numdado == 1 || numdado == 2 || numdado == 3){
                    hpt = Math.floor(vidac1.textContent * 1 - -5 - (danototal * rests[0]));
                    hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
                    hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
                    hpt4 = Math.floor(vidac4.textContent * 1 - -25 - (danototal * rests[3]));
                    hpt5 = Math.floor(vidac5.textContent * 1 - -30 - (danototal * rests[4]));
                    hpt6 = Math.floor(vidac6.textContent * 1 - -35 - (danototal * rests[5]));
                    hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
                    est.textContent = "Ataque Fraco";
                    est.style.color = "#f7847c";
                    }
                }
                else {
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
            if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
                hpt = Math.floor(vidac1.textContent * 1 - -5 - (danototal * rests[0]));
                hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
                hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
                hpt4 = Math.floor(vidac4.textContent * 1 - -25 - (danototal * rests[3]));
                hpt5 = Math.floor(vidac5.textContent * 1 - -30 - (danototal * rests[4]));
                hpt6 = Math.floor(vidac6.textContent * 1 - -35 - (danototal * rests[5]));
                hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
                est.textContent = "Ataque Fraco";
                est.style.color = "#f7847c";
            }
            
            else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
                hpt = Math.floor(vidac1.textContent * 1 - (danototal * rests[0]));
                hpt2 = Math.floor(vidac2.textContent * 1 - (danototal * rests[1]));
                hpt3 = Math.floor(vidac3.textContent * 1 - (danototal * rests[2]));
                hpt4 = Math.floor(vidac4.textContent * 1 - -20 - (danototal * rests[3]));
                hpt5 = Math.floor(vidac5.textContent * 1 - -25 - (danototal * rests[4]));
                hpt6 = Math.floor(vidac6.textContent * 1 - -30 - (danototal * rests[5]));
                hpt7 = Math.floor(vidac7.textContent * 1 - -40 - (danototal * rests[6]));
                est.textContent = "Ataque Normal";
                est.style.color = "#fbff08";
            }
            
            else if (numdado == 16 || numdado == 17 || numdado == 18){
                hpt = Math.floor(vidac1.textContent * 1 - danototal);
                hpt2 = Math.floor(vidac2.textContent * 1 - danototal);
                hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
                hpt4 = Math.floor(vidac4.textContent * 1 - -20 - danototal);
                hpt5 = Math.floor(vidac5.textContent * 1 - -25 - danototal);
                hpt6 = Math.floor(vidac6.textContent * 1 - -30 - danototal);
                hpt7 = Math.floor(vidac7.textContent * 1 - -40 - danototal);
                est.textContent = "Ataque Forte";
                est.style.color = "#a0ff08";
            }
            
            else if (numdado == 19 || numdado == 20){
                hpt = Math.floor(vidac1.textContent * 1 - danototal - 15);
                hpt2 = Math.floor(vidac2.textContent * 1 - danototal - 15);
                hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 15);
                hpt4 = Math.floor(vidac4.textContent * 1 - danototal - -5);
                hpt5 = Math.floor(vidac5.textContent * 1 - danototal - -10);
                hpt6 = Math.floor(vidac6.textContent * 1 - danototal - -15);
                hpt7 = Math.floor(vidac7.textContent * 1 - danototal - -25);
                est.textContent = "Ataque Perfeito";
                est.style.color = "#008013";
            }
        break;
        case 2:
            if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
            }
            else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
                if(numdado == 1 || numdado == 2 || numdado == 3){
                hpt = Math.floor(vidac1.textContent * 1 - -25 - (danototal * rests[0]));
                hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
                hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
                hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
                hpt5 = Math.floor(vidac5.textContent * 1 - -25 - (danototal * rests[4]));
                hpt6 = Math.floor(vidac6.textContent * 1 - -30 - (danototal * rests[5]));
                hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
                est.textContent = "Ataque Fraco";
                est.style.color = "#f7847c";
                }
            }
            else {
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
        if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
            hpt = Math.floor(vidac1.textContent * 1 - -25 - (danototal * rests[0]));
            hpt2 = Math.floor(vidac2.textContent * 1 - -5 - (danototal * rests[1]));
            hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
            hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
            hpt5 = Math.floor(vidac5.textContent * 1 - -25 - (danototal * rests[4]));
            hpt6 = Math.floor(vidac6.textContent * 1 - -30 - (danototal * rests[5]));
            hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
            est.textContent = "Ataque Fraco";
            est.style.color = "#f7847c";
        }
        
        else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
            hpt = Math.floor(vidac1.textContent * 1 - -20 - (danototal * rests[0]));
            hpt2 = Math.floor(vidac2.textContent * 1 - (danototal * rests[1]));
            hpt3 = Math.floor(vidac3.textContent * 1 - (danototal * rests[2]));
            hpt4 = Math.floor(vidac4.textContent * 1 - (danototal * rests[3]));
            hpt5 = Math.floor(vidac5.textContent * 1 - -20 - (danototal * rests[4]));
            hpt6 = Math.floor(vidac6.textContent * 1 - -25 - (danototal * rests[5]));
            hpt7 = Math.floor(vidac7.textContent * 1 - -30 - (danototal * rests[6]));
            est.textContent = "Ataque Normal";
            est.style.color = "#fbff08";
        }
        
        else if (numdado == 16 || numdado == 17 || numdado == 18){
            hpt = Math.floor(vidac1.textContent * 1 - -20 - danototal);
            hpt2 = Math.floor(vidac2.textContent * 1 - danototal);
            hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
            hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
            hpt5 = Math.floor(vidac5.textContent * 1 - -20 - danototal);
            hpt6 = Math.floor(vidac6.textContent * 1 - -25 - danototal);
            hpt7 = Math.floor(vidac7.textContent * 1 - -35 - danototal);
            est.textContent = "Ataque Forte";
            est.style.color = "#a0ff08";
        }
        
        else if (numdado == 19 || numdado == 20){
            hpt = Math.floor(vidac1.textContent * 1 - danototal - -5);
            hpt2 = Math.floor(vidac2.textContent * 1 - danototal - 15);
            hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 15);
            hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 15);
            hpt5 = Math.floor(vidac5.textContent * 1 - danototal - -5);
            hpt6 = Math.floor(vidac6.textContent * 1 - danototal - -10);
            hpt7 = Math.floor(vidac7.textContent * 1 - danototal - -15);
            est.textContent = "Ataque Perfeito";
            est.style.color = "#008013";
        }
    break;
    case 3:
        if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
        }
        else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
            if(numdado == 1 || numdado == 2 || numdado == 3){
            hpt = Math.floor(vidac1.textContent * 1 - -45 - (danototal * rests[0]));
            hpt2 = Math.floor(vidac2.textContent * 1 - -30 - (danototal * rests[1]));
            hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
            hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
            hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
            hpt6 = Math.floor(vidac6.textContent * 1 - -30 - (danototal * rests[5]));
            hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
            est.textContent = "Ataque Fraco";
            est.style.color = "#f7847c";
            }
        }
        else {
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
    if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        hpt = Math.floor(vidac1.textContent * 1 - -45 - (danototal * rests[0]));
        hpt2 = Math.floor(vidac2.textContent * 1 - -30 - (danototal * rests[1]));
        hpt3 = Math.floor(vidac3.textContent * 1 - -5 - (danototal * rests[2]));
        hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
        hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
        hpt6 = Math.floor(vidac6.textContent * 1 - -30 - (danototal * rests[5]));
        hpt7 = Math.floor(vidac7.textContent * 1 - -45 - (danototal * rests[6]));
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
    }
    
    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        hpt = Math.floor(vidac1.textContent * 1 - -35 - (danototal * rests[0]));
        hpt2 = Math.floor(vidac2.textContent * 1 - -25 - (danototal * rests[1]));
        hpt3 = Math.floor(vidac3.textContent * 1 - (danototal * rests[2]));
        hpt4 = Math.floor(vidac4.textContent * 1 - (danototal * rests[3]));
        hpt5 = Math.floor(vidac5.textContent * 1 - (danototal * rests[4]));
        hpt6 = Math.floor(vidac6.textContent * 1 - -25 - (danototal * rests[5]));
        hpt7 = Math.floor(vidac7.textContent * 1 - -35 - (danototal * rests[6]));
        est.textContent = "Ataque Normal";
        est.style.color = "#fbff08";
    }
    
    else if (numdado == 16 || numdado == 17 || numdado == 18){
        hpt = Math.floor(vidac1.textContent * 1 - -35 - danototal);
        hpt2 = Math.floor(vidac2.textContent * 1 - -25 - danototal);
        hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
        hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
        hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
        hpt6 = Math.floor(vidac6.textContent * 1 - -25 - danototal);
        hpt7 = Math.floor(vidac7.textContent * 1 - -35 - danototal);
        est.textContent = "Ataque Forte";
        est.style.color = "#a0ff08";
    }
    
    else if (numdado == 19 || numdado == 20){
        hpt = Math.floor(vidac1.textContent * 1 - danototal - -25);
        hpt2 = Math.floor(vidac2.textContent * 1 - danototal - -5);
        hpt3 = Math.floor(vidac3.textContent * 1 - danototal - 15);
        hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 15);
        hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 15);
        hpt6 = Math.floor(vidac6.textContent * 1 - danototal - -5);
        hpt7 = Math.floor(vidac7.textContent * 1 - danototal - -25);
        est.textContent = "Ataque Perfeito";
        est.style.color = "#008013";
    }
break;
case 4:
    if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
    }
    else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        hpt = Math.floor(vidac1.textContent * 1 - -45 - (danototal * rests[0]));
        hpt2 = Math.floor(vidac2.textContent * 1 - -30 - (danototal * rests[1]));
        hpt3 = Math.floor(vidac3.textContent * 1 - -25 - (danototal * rests[2]));
        hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
        hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
        hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
        hpt7 = Math.floor(vidac7.textContent * 1 - -25 - (danototal * rests[6]));
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
        }
    }
    else {
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
if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
    hpt = Math.floor(vidac1.textContent * 1 - -45 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - -30 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - -25 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - -5 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - -25 - (danototal * rests[6]));
    est.textContent = "Ataque Fraco";
    est.style.color = "#f7847c";
}

else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
    hpt = Math.floor(vidac1.textContent * 1 - -30 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - -25 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - -20 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - -20 - (danototal * rests[6]));
    est.textContent = "Ataque Normal";
    est.style.color = "#fbff08";
}

else if (numdado == 16 || numdado == 17 || numdado == 18){
    hpt = Math.floor(vidac1.textContent * 1 - -30 - danototal);
    hpt2 = Math.floor(vidac2.textContent * 1 - -25 - danototal);
    hpt3 = Math.floor(vidac3.textContent * 1 - -20 - danototal);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal);
    hpt7 = Math.floor(vidac7.textContent * 1 - -20 - danototal);
    est.textContent = "Ataque Forte";
    est.style.color = "#a0ff08";
}

else if (numdado == 19 || numdado == 20){
    hpt = Math.floor(vidac1.textContent * 1 - danototal - -15);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal - -10);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal - -5);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal - 15);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 15);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal - 15);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal - -5);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}
break;
case 5:
    if(auriano == false && per == 1 || aurianop2 == false && per == 2 || aurianop3 == false && per == 3 || aurianop4 == false && per == 4 || aurianop5 == false && per == 5) {
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
    }
    else if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        hpt = Math.floor(vidac1.textContent * 1 - 45 - (danototal * rests[0]));
        hpt2 = Math.floor(vidac2.textContent * 1 - 30 - (danototal * rests[1]));
        hpt3 = Math.floor(vidac3.textContent * 1 - -25 - (danototal * rests[2]));
        hpt4 = Math.floor(vidac4.textContent * 1 - -20 - (danototal * rests[3]));
        hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
        hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
        hpt7 = Math.floor(vidac7.textContent * 1 - -5 - (danototal * rests[6]));
        est.textContent = "Ataque Fraco";
        est.style.color = "#f7847c";
        }
    }
    else {
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
if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
    hpt = Math.floor(vidac1.textContent * 1 - 45 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - 30 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - -25 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - -20 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - -5 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - -5 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - -5 - (danototal * rests[6]));
    est.textContent = "Ataque Fraco";
    est.style.color = "#f7847c";
}

else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
    hpt = Math.floor(vidac1.textContent * 1 - -40 - (danototal * rests[0]));
    hpt2 = Math.floor(vidac2.textContent * 1 - -35 - (danototal * rests[1]));
    hpt3 = Math.floor(vidac3.textContent * 1 - -25 - (danototal * rests[2]));
    hpt4 = Math.floor(vidac4.textContent * 1 - -20 - (danototal * rests[3]));
    hpt5 = Math.floor(vidac5.textContent * 1 - (danototal * rests[4]));
    hpt6 = Math.floor(vidac6.textContent * 1 - (danototal * rests[5]));
    hpt7 = Math.floor(vidac7.textContent * 1 - (danototal * rests[6]));
    est.textContent = "Ataque Normal";
    est.style.color = "#fbff08";
}

else if (numdado == 16 || numdado == 17 || numdado == 18){
    hpt = Math.floor(vidac1.textContent * 1 - -40 - danototal);
    hpt2 = Math.floor(vidac2.textContent * 1 - -35 - danototal);
    hpt3 = Math.floor(vidac3.textContent * 1 - -25 - danototal);
    hpt4 = Math.floor(vidac4.textContent * 1 - -20 - danototal);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal);
    est.textContent = "Ataque Forte";
    est.style.color = "#a0ff08";
}

else if (numdado == 19 || numdado == 20){
    hpt = Math.floor(vidac1.textContent * 1 - danototal - -25);
    hpt2 = Math.floor(vidac2.textContent * 1 - danototal - -15);
    hpt3 = Math.floor(vidac3.textContent * 1 - danototal - -10);
    hpt4 = Math.floor(vidac4.textContent * 1 - danototal - -5);
    hpt5 = Math.floor(vidac5.textContent * 1 - danototal - 15);
    hpt6 = Math.floor(vidac6.textContent * 1 - danototal - 15);
    hpt7 = Math.floor(vidac7.textContent * 1 - danototal - 15);
    est.textContent = "Ataque Perfeito";
    est.style.color = "#008013";
}
break;
    }
}
    }
    else {
        if(auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5) {
            hpt = Math.floor(vidac1.textContent * 1 - danototal);
            hpt2 = Math.floor(vidac2.textContent * 1 - danototal);
            hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
            hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
            hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
            hpt6 = Math.floor(vidac6.textContent * 1 - danototal);
            hpt7 = Math.floor(vidac7.textContent * 1 - danototal);
        }
        else if(numdado <= 10){
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
        else {
            hpt = Math.floor(vidac1.textContent * 1 - danototal);
            hpt2 = Math.floor(vidac2.textContent * 1 - danototal);
            hpt3 = Math.floor(vidac3.textContent * 1 - danototal);
            hpt4 = Math.floor(vidac4.textContent * 1 - danototal);
            hpt5 = Math.floor(vidac5.textContent * 1 - danototal);
            hpt6 = Math.floor(vidac6.textContent * 1 - danototal);
            hpt7 = Math.floor(vidac7.textContent * 1 - danototal);
        }
    }
}
else if(mapa == "Costa") {
    setTimeout(() => {
    canhaoa.style.display = "flex";
    setTimeout(() => {
        canhaoa.style.display = "none";
    }, 900)
}, 1000)
    if(numdado <= 3){
        hpt = vidac1.textContent;
        hpt2 = vidac2.textContent;
        hpt3 = vidac3.textContent;
        hpt4 = vidac4.textContent;
        hpt5 = vidac5.textContent;
        hpt6 = vidac6.textContent;
        hpt7 = vidac7.textContent;
    }
    else {
        hpt = Math.floor(vidac1.textContent * 1 - canhaodmg);
        hpt2 = Math.floor(vidac2.textContent * 1 - canhaodmg);
        hpt3 = Math.floor(vidac3.textContent * 1 - canhaodmg);
        hpt4 = Math.floor(vidac4.textContent * 1 - canhaodmg);
        hpt5 = Math.floor(vidac5.textContent * 1 - canhaodmg);
        hpt6 = Math.floor(vidac6.textContent * 1 - canhaodmg);
        hpt7 = Math.floor(vidac7.textContent * 1 - canhaodmg);
    }
}
setTimeout(() => {
    if(armasatl.textContent == "Granada" && vidabarcoi.textContent != "0" && mapa != "Terra" && mapa != "Costa") {
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - dns[per - 1].textContent * 1);
        mlifei();
    }
    }, 1000)
}