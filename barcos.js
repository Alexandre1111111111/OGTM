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
usandoci = false;
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
        case vidabarcoi.textContent <= 0 && nv2i.style.backgroundColor != "unset" && nvil == 2:
            nv3i.style.backgroundColor = "#fc0303";
            nvil = 3;
        break;
        case vidabarcoi.textContent <= 0 && nv1i.style.backgroundColor != "unset":
            nv2i.style.backgroundColor = "#fc6f03";
            nvil = 2;
        break;
    }
}