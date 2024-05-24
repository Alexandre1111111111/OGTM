function kitf() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/2053/2053884.png";
    nomeitm.textContent = "Kit Médico";
    efeito.textContent = "Cura 150 pontos de vida";
    duracao.textContent = "Instantâneo";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}
function reparof() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/4854/4854866.png";
    nomeitm.textContent = "Kit de Reparo";
    efeito.textContent = "Conserta o Barco, recuperando 40% da vida total";
    duracao.textContent = "Instantâneo";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}
function aurianaf() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/2190/2190855.png";
    nomeitm.textContent = "Bebida Auriana";
    efeito.textContent = "Os próximos ataques terão 100% de chance de acerto e mais 30% de dano";
    duracao.textContent = "2 Turnos";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}
function cristaisf() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/3753/3753718.png";
    nomeitm.textContent = "Essência de Cristais Norlândeses";
    efeito.textContent = "Reduz o dano recebido de todos da tripulação em 50%";
    duracao.textContent = "3 Turnos";
    nomeitm.style.fontSize = "3.5vh";
    nomeitm.style.padding = "1vh";
}
function soprof() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/6658/6658725.png";
    nomeitm.textContent = "Frasco de Sopro Gélido";
    efeito.textContent = "Aplica um efeito de lentidão em grupos de inimigos";
    duracao.textContent = "3 Turnos";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}
function explosivaf() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/3553/3553208.png";
    nomeitm.textContent = "Bala Explosiva";
    efeito.textContent = "Causa 500 de dano em área se aplicada a uma arma de fogo";
    duracao.textContent = "Instantâneo";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}
function ferrof() {
    espitem.style.display = "flex";
    espimg.src = "https://cdn-icons-png.flaticon.com/512/6984/6984654.png";
    nomeitm.textContent = "Essência de Ferro Derretido";
    efeito.textContent = "Transforma lâminas normais em lâminas flamejantes";
    duracao.textContent = "4 Turnos";
    nomeitm.style.fontSize = "4vh";
    nomeitm.style.padding = "0.65vh";
}
function incendiariof() {
    espitem.style.display = "flex";
    espimg.src = "flecha.png";
    nomeitm.textContent = "Virote Incendiário";
    efeito.textContent = "Causa 10 de dano de fogo por turno se aplicado a uma besta";
    duracao.textContent = "3 Turnos";
    nomeitm.style.fontSize = "5vh";
    nomeitm.style.padding = "0vh";
}

kit.addEventListener("click", kitf);

reparo.addEventListener("click", reparof);

auriana.addEventListener("click", aurianaf);

cristais.addEventListener("click", cristaisf);

sopro.addEventListener("click", soprof);

explosiva.addEventListener("click", explosivaf);

ferro.addEventListener("click", ferrof);

incendiario.addEventListener("click", incendiariof);

kit2.addEventListener("click", kitf);

reparo2.addEventListener("click", reparof);

auriana2.addEventListener("click", aurianaf);

cristais2.addEventListener("click", cristaisf);

sopro2.addEventListener("click", soprof);

explosiva2.addEventListener("click", explosivaf);

ferro2.addEventListener("click", ferrof);

incendiario2.addEventListener("click", incendiariof);

function use() {
    switch (true) {
        case nomeitm.textContent == "Kit Médico":
            quantm.textContent--;
            switch (per) {
                case 1:
                    vidac1a.textContent -= -150;
                break;
                case 2:
                    vidac2a.textContent -= -150;
                break;
                case 3:
                    vidac3a.textContent -= -150;
                break;
                case 4:
                    vidac4a.textContent -= -150;
                break;
                case 5:
                    vidac5a.textContent -= -150;
                break;
            }
        break;
        case nomeitm.textContent == "Kit de Reparo":
            quantr.textContent--;
            vidabarcoa.textContent -= Math.floor(-vidaa * 0.4);
        break;
        case nomeitm.textContent == "Bebida Auriana":
            quanta.textContent--;
            duraaur = 2;
            auriano = true;
            switch (per) {
                case 1:
                    dans1 *= 1.30;
                    utili = 1;
                break;
                case 2:
                    dans2 *= 1.30;
                    utili = 2;
                break;
                case 3:
                    dans3 *= 1.30;
                    utili = 3;
                break;
                case 4:
                    dans4 *= 1.30;
                    utili = 4;
                break;
                case 5:
                    dans5 *= 1.30;
                    utili = 5;
                break;
            }
        break;
        case nomeitm.textContent == "Essência de Cristais Norlândeses":
            db1.style.display = "block";
            imgdb.src = "https://cdn-icons-png.flaticon.com/512/912/912791.png";
            db1.style.backgroundColor = "#0f191a";
            quantc.textContent--;
            db1p2.style.display = "block";
            imgdbp2.src = "https://cdn-icons-png.flaticon.com/512/912/912791.png";
            db1p2.style.backgroundColor = "#0f191a";
            db1p3.style.display = "block";
            imgdbp3.src = "https://cdn-icons-png.flaticon.com/512/912/912791.png";
            db1p3.style.backgroundColor = "#0f191a";
            db1p4.style.display = "block";
            imgdbp4.src = "https://cdn-icons-png.flaticon.com/512/912/912791.png";
            db1p4.style.backgroundColor = "#0f191a";
            db1p5.style.display = "block";
            imgdbp5.src = "https://cdn-icons-png.flaticon.com/512/912/912791.png";
            db1p5.style.backgroundColor = "#0f191a";
            essencia = true;
            duracri = 3;
        break;
        case nomeitm.textContent == "Frasco de Sopro Gélido":
            quants.textContent--;
            mirando = true;
            vez.style.top = "40vh";
            mrcanhao = false;
            vez.style.backgroundColor = "rgba(255, 0, 0, 0.842)";
            area = true;
            durafrio = 3;
            mira();
        break;
        case nomeitm.textContent == "Bala Explosiva":
            for(let i = 0; i < armasf.length; i++) {
            switch(per) {
                case 1:
                    if(armas[0] == armasf[i]) {
                    quante.textContent--;
                    expl = true;
                    }
                break;
                case 2:
                    if(armas[1] == armasf[i]) {
                    quante.textContent--;
                    expl = true;
                    }
                break;
                case 3:
                    if(armas[2] == armasf[i]) {
                    quante.textContent--;
                    expl = true;
                    }
                break;
                case 4:
                    if(armas[3] == armasf[i]) {
                    quante.textContent--;
                    expl = true;
                    }
                break;
                case 5:
                    if(armas[4] == armasf[i]) {
                    quante.textContent--;
                    expl = true;
                    }
                break;
            }
        }
        break;
        case nomeitm.textContent == "Essência de Ferro Derretido":
            quantf.textContent--;
            for(let i = 0; i < armas.length; i++) {
                switch (true) {
                    case armas[i] == punhal && per == i + 1:
                        laminau = armasb[0];
                    break;
                    case armas[i] == rapieira && per == i + 1:
                        laminau = armasb[1];
                    break;
                    case armas[i] == sabre && per == i + 1:
                        laminau = armasb[2];
                    break;
                    case armas[i] == machado && per == i + 1:
                        laminau = armasb[3];
                    break;
                    case armas[i] == adaga && per == i + 1:
                        laminau = armasb[4];
                    break;
                    case armas[i] == foice && per == i + 1:
                        laminau = armasb[5];
                    break;
                }
            }
            if(laminau != 0) {
            switch (per) {
                case 1:
                    dans1 = danoc1a.textContent * 1 + laminau;
                break;
                case 2:
                    dans2 = danoc2a.textContent * 1 + laminau;
                break;
                case 3:
                    dans3 = danoc3a.textContent * 1 + laminau;
                break;
                case 4:
                    dans4 = danoc4a.textContent * 1 + laminau;
                break;
                case 5:
                    dans5 = danoc5a.textContent * 1 + laminau;
                break;
            }
        }
        break;
        case nomeitm.textContent == "Virote Incendiário":
            quanti.textContent--;
        break;
    }
    espitem.style.display = "none";
    utitensct.style.opacity = "0";
    utitensct.style.display = "flex";
    setTimeout(() => {
        utitensct.style.display = "none";
    }, 500)
}

usar.addEventListener("click", use);