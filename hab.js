function habilidades() {
    switch (true) {
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/855/855059.png":
            habatv = 1;
            cool1 = 5;
            atacando();
        break;
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/2851/2851844.png" && atacar.textContent == "Atacar":
            cool2 = 5;
            quantmira = 1;
            numhab = 2;
            roll.style.visibility = "visible";
            estatq.style.display = "none";
            numdado = 0;
            rolln.textContent = numdado;
            atacando();
        break;
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/15532/15532570.png":
            cta1.addEventListener("mouseover", cr1);
            cta2.addEventListener("mouseover", cr2);
            cta3.addEventListener("mouseover", cr3);
            cta4.addEventListener("mouseover", cr4);
            cta5.addEventListener("mouseover", cr5);
            cta1.addEventListener("click", curar);
            cta2.addEventListener("click", curar);
            cta3.addEventListener("click", curar);
            cta4.addEventListener("click", curar);
            cta5.addEventListener("click", curar);
            cartai1.removeEventListener("mouseover", c1);
            cartai2.removeEventListener("mouseover", c2);
            cartai3.removeEventListener("mouseover", c3);
            cartai4.removeEventListener("mouseover", c4);
            cartai5.removeEventListener("mouseover", c5);
            cartai6.removeEventListener("mouseover", c6);
            cartai7.removeEventListener("mouseover", c7);
            limp();
            vez.style.top = "50vh";
            vez.style.backgroundColor = "rgba(0, 200, 0, 0.842)";
            hab3 = true;
            numhab = 3;
            cool3 = 5;
        break;
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/5246/5246522.png":
            numhab = 4;
            cool4 = 7;
            durarg = 3;
            rg = true;
            rugir();
        break;
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/139/139776.png":
            numhab = 5;
            cool5 = 6;
            durares = 2;
            reshab = true;
            res();
        break;
    }
}

function Comm() {
    if(per == 1) {
        danototalp1 *= 1.50;
        danototalp2 *= 1.50;
        danototalp3 *= 1.50;
        danototalp4 *= 1.50;
        danototalp5 *= 1.50;
        danoc1a.textContent = Math.floor(danototalp1);
        danoc2a.textContent = Math.floor(danototalp2);
        danoc3a.textContent = Math.floor(danototalp3);
        danoc4a.textContent = Math.floor(danototalp4);
        danoc5a.textContent = Math.floor(danototalp5);
}
    dano();
}

function rugir() {
    dans1 -= -danorg;
    dans2 -= -danorg;
    dans3 -= -danorg;
    dans4 -= -danorg;
    dans5 -= -danorg;
}

function res() {
    resps[0] -= 0.20;
    resps[1] -= 0.20;
    resps[2] -= 0.20;
    resps[3] -= 0.20;
    resps[4] -= 0.20;
    rss[0] += 20;
    rss[1] += 20;
    rss[2] += 20;
    rss[3] += 20;
    rss[4] += 20;
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

function curar() {
    vez.style.top = "2vh";
    vez.style.backgroundColor = "rgba(0, 0, 255, 0.842)";
    numhab = 0;
    hab3 = false;
    switch (true) {
        case cura1.style.display == "flex":
            vidac1a.textContent = Math.floor(vidap1 * 1.85 + vidac1a.textContent * 1);
            hab3 = false;
            rmvcrs();
        break;
        case cura2.style.display == "flex":
            vidac2a.textContent = Math.floor(vidap2 * 1.85 + vidac2a.textContent * 1);
            hab3 = false;
            rmvcrs();
        break;
        case cura3.style.display == "flex":
            vidac3a.textContent = Math.floor(vidap3 * 1.85 + vidac3a.textContent * 1);
            hab3 = false;
            rmvcrs();
        break;
        case cura4.style.display == "flex":
            vidac4a.textContent = Math.floor(vidap4 * 1.85 + vidac4a.textContent * 1);
            hab3 = false;
            rmvcrs();
        break;
        case cura5.style.display == "flex":
            vidac5a.textContent = Math.floor(vidap5 * 1.85 + vidac5a.textContent * 1);
            hab3 = false;
            rmvcrs();
        break;
    }
}

function rmvcrs() {
    cta1.removeEventListener("mouseover", cr1);
    cta2.removeEventListener("mouseover", cr2);
    cta3.removeEventListener("mouseover", cr3);
    cta4.removeEventListener("mouseover", cr4);
    cta5.removeEventListener("mouseover", cr5);
    cta1.removeEventListener("click", curar);
    cta2.removeEventListener("click", curar);
    cta3.removeEventListener("click", curar);
    cta4.removeEventListener("click", curar);
    cta5.removeEventListener("click", curar);
    cura1.style.display = "none";
    cura2.style.display = "none";
    cura3.style.display = "none";
    cura4.style.display = "none";
    cura5.style.display = "none";
}

function cr1() {
    if(incs[0].style.display != "flex" || incs[0].style.visibility == "hidden") {
        cura1.style.display = "flex";
        cura2.style.display = "none";
        cura3.style.display = "none";
        cura4.style.display = "none";
        cura5.style.display = "none";
    }
}
function cr2() {
    if(incs[1].style.display != "flex" || incs[1].style.visibility == "hidden") {
        cura1.style.display = "none";
        cura2.style.display = "flex";
        cura3.style.display = "none";
        cura4.style.display = "none";
        cura5.style.display = "none";
    }
}
function cr3() {
    if(incs[2].style.display != "flex" || incs[2].style.visibility == "hidden") {
        cura1.style.display = "none";
        cura2.style.display = "none";
        cura3.style.display = "flex";
        cura4.style.display = "none";
        cura5.style.display = "none";
    }
}
function cr4() {
    if(incs[3].style.display != "flex" || incs[3].style.visibility == "hidden") {
        cura1.style.display = "none";
        cura2.style.display = "none";
        cura3.style.display = "none";
        cura4.style.display = "flex";
        cura5.style.display = "none";
    }
}
function cr5() {
    if(incs[4].style.display != "flex" || incs[4].style.visibility == "hidden") {
        cura1.style.display = "none";
        cura2.style.display = "none";
        cura3.style.display = "none";
        cura4.style.display = "none";
        cura5.style.display = "flex";
    }
}

ichab.addEventListener("mouseover", () => {
    if(cool.style.display != "flex") {
    deschab.style.display = "flex";
    setTimeout(() => {
        deschab.style.opacity = "1";
    }, 100)
}
})

ichab.addEventListener("mouseout", () => {
    deschab.style.opacity = "0";
    setTimeout(() => {
        deschab.style.display = "none";
    }, 100)
})