function selectini() {
    ctinisel.style.display = "none";
    inis.style.display = "flex";
    setTimeout(() => {
        inis.style.bottom = "0";
    }, 50)
}

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
    }
}

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

btnc.addEventListener("click", () => {
    hordas.style.display = "none";
    chefes.style.display = "flex";
    btnc.style.backgroundColor = "#2b1501";
    btnh.style.backgroundColor = "#000";
})

btnh.addEventListener("click", () => {
    hordas.style.display = "grid";
    chefes.style.display = "none";
    btnh.style.backgroundColor = "#2b1501";
    btnc.style.backgroundColor = "#000";
})

selini.addEventListener("click", selectini);