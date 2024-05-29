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

function dano() {
    if(expl == false) {
    if(auriano == false) {
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
    else if(per == utili) {
        if(numdado == 1 || numdado == 2 || numdado == 3){
        hpt = Math.floor(vidac1.textContent - danototal + 5 * rest);
        hpt2 = Math.floor(vidac2.textContent - danototal + 5 * restp2);
        hpt3 = Math.floor(vidac3.textContent - danototal + 5 * restp3);
        hpt4 = Math.floor(vidac4.textContent - danototal + 5 * restp4);
        hpt5 = Math.floor(vidac5.textContent - danototal + 5 * restp5);
        hpt6 = Math.floor(vidac6.textContent - danototal + 5 * restp6);
        hpt7 = Math.floor(vidac7.textContent - danototal + 5 * restp7);
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
    hpt = Math.floor(vidac1.textContent - danototal + 5 * rest);
    hpt2 = Math.floor(vidac2.textContent - danototal + 5 * restp2);
    hpt3 = Math.floor(vidac3.textContent - danototal + 5 * restp3);
    hpt4 = Math.floor(vidac4.textContent - danototal + 5 * restp4);
    hpt5 = Math.floor(vidac5.textContent - danototal + 5 * restp5);
    hpt6 = Math.floor(vidac6.textContent - danototal + 5 * restp6);
    hpt7 = Math.floor(vidac7.textContent - danototal + 5 * restp7);
    est.textContent = "Ataque Fraco";
    est.style.color = "#f7847c";
}

else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
    hpt = Math.floor(vidac1.textContent - danototal * rest);
    hpt2 = Math.floor(vidac2.textContent - danototal * restp2);
    hpt3 = Math.floor(vidac3.textContent - danototal * restp3);
    hpt4 = Math.floor(vidac4.textContent - danototal * restp4);
    hpt5 = Math.floor(vidac5.textContent - danototal * restp5);
    hpt6 = Math.floor(vidac6.textContent - danototal * restp6);
    hpt7 = Math.floor(vidac7.textContent - danototal * restp7);
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
    else {
        if(numdado > 3 || auriano == true && per == 1 || aurianop2 == true && per == 2 || aurianop3 == true && per == 3 || aurianop4 == true && per == 4 || aurianop5 == true && per == 5){
            hpt = Math.floor(vidac1.textContent - 500 * rest);
            hpt2 = Math.floor(vidac2.textContent - 500 * restp2);
            hpt3 = Math.floor(vidac3.textContent - 500 * restp3);
            hpt4 = Math.floor(vidac4.textContent - 500 * restp4);
            hpt5 = Math.floor(vidac5.textContent - 500 * restp5);
            hpt6 = Math.floor(vidac6.textContent - 500 * restp6);
            hpt7 = Math.floor(vidac7.textContent - 500 * restp7);
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