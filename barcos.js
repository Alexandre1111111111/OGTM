function atqcanhao() {
    setTimeout(() => {
    if(usandoci == false) {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        vidabarcoi.textContent = Math.floor(vidabarcoi.textContent - canhaodmg + 50);
        est.textContent = "Ataque Leve";
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
    canhaoa.style.display = "flex";
    setTimeout(() => {
        canhaoa.style.display = "none";
    }, 900)
    mlifei();
}
else {
    if(numdado == 1 || numdado == 2 || numdado == 3){
        vidabarcoa.textContent = Math.floor(vidabarcoa.textContent - canhaodmg + 50);
        est.textContent = "Ataque Leve";
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
    canhaoi.style.display = "flex";
    setTimeout(() => {
        canhaoi.style.display = "none";
    }, 900)
    mlifea();
}
usandoci = false;
    }, 1000)
}
function afunali() {
    setTimeout(() => {
    somini();
    }, 1000)
    if(vidabarcoa.textContent > 0 && nv3.style.backgroundColor != "unset" && nvila == 3) {
        nv3.style.backgroundColor = "unset";
        nvila = 2;
}
else {
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
        case vidabarcoa.textContent >= 0 && nv2.style.backgroundColor != "unset" && nvila == 2:
            nv2.style.backgroundColor = "unset";
            nvila = 1;
        break;
        case vidabarcoa.textContent >= 0 && nv1.style.backgroundColor != "unset":
            nv1.style.backgroundColor = "unset";
            nvila = 0;
            nv1.style.animationName = "";
            nv2.style.animationName = "";
            nv3.style.animationName = "";
        break;
    }
}
}

function afunini() {
    if(vidabarcoi.textContent > 0 && nv3i.style.backgroundColor != "unset" && nvil == 3) {
        nv3i.style.backgroundColor = "unset";
        nvil = 2;
}
else {
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
        case vidabarcoi.textContent >= 0 && nv2i.style.backgroundColor != "unset" && nvil == 2:
            nv2i.style.backgroundColor = "unset";
            nvil = 1;
        break;
        case vidabarcoi.textContent >= 0 && nv1i.style.backgroundColor != "unset":
            nv1i.style.backgroundColor = "unset";
            nvil = 0;
            nv1i.style.animationName = "";
            nv2i.style.animationName = "";
            nv3i.style.animationName = "";
        break;
    }
}
}

function mlifea() {
    w = vidaa / 100;
    if(numdado == 1 || numdado == 2 || numdado == 3){
        pcdm = (canhaodmg - 50) / w;
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        pcdm = (canhaodmg - 20) / w;
    }
    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        pcdm = canhaodmg / w;
    }
    else if (numdado == 16 || numdado == 17 || numdado == 18){
        pcdm = (canhaodmg + 20) / w;
    }
    else if (numdado == 19 || numdado == 20){
        pcdm = (canhaodmg + 50) / w;
    }
    pca -= pcdm;
    if(pca <= 0) {
        pca = 0;
    }
    lifea.style.width = `${pca}%`;
    lifedanoa.style.width = `${pca}%`;
}

function mlifei() {
    wi = vidai / 100;
    if(numdado == 1 || numdado == 2 || numdado == 3){
        pcdmi = (canhaodmg - 50) / wi;
    }
    else if(numdado == 4 || numdado == 5 || numdado == 6 || numdado == 7 || numdado == 8){
        pcdmi = (canhaodmg - 20) / wi;
    }
    else if (numdado == 9 || numdado == 10 || numdado == 11 || numdado == 12 || numdado == 13 || numdado == 14 || numdado == 15){
        pcdmi = canhaodmg / wi;
    }
    else if (numdado == 16 || numdado == 17 || numdado == 18){
        pcdmi = (canhaodmg + 20) / wi;
    }
    else if (numdado == 19 || numdado == 20){
        pcdmi = (canhaodmg + 50) / wi;
    }
    pci -= pcdmi;
    if(pci <= 0) {
        pci = 0;
    }
    lifei.style.width = `${pci}%`;
    lifedanoi.style.width = `${pci}%`;
}