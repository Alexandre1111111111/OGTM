a1p1.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 1;
});
a2p1.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 1;
});
a3p1.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 1;
});
a1p2.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 2;
});
a2p2.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 2;
});
a3p2.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 2;
});
a1p3.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 3;
});
a2p3.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 3;
});
a3p3.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 3;
});
a1p4.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 4;
});
a2p4.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 4;
});
a3p4.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 4;
});
a1p5.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 5;
});
a2p5.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 5;
});
a3p5.addEventListener("click", () => {
    selam.style.visibility = "visible";
    selam.style.right = "0";
    select = 5;
});

coam.addEventListener("click", () => {
    a4.style.display = "flex";
    a3.style.display = "flex";
    a2.style.display = "flex";
    a1img.src = "resista.png";
    a2img.src = "vidaa.png";
    a3img.src = "sortea.png";
    a4img.src = "sana.png";
    amulr = "Comum";
    a1.style.backgroundColor = "#1a1a1a";
    a2.style.backgroundColor = "#1a1a1a";
    a3.style.backgroundColor = "#1a1a1a";
    a4.style.backgroundColor = "#1a1a1a";
})

raam.addEventListener("click", () => {
    a4.style.display = "none";
    a3.style.display = "flex";
    a2.style.display = "flex";
    a1img.src = "regena.png";
    a2img.src = "vinga.png";
    a3img.src = "atordoa.png";
    amulr = "Raro";
    a1.style.backgroundColor = "#00031f";
    a2.style.backgroundColor = "#00031f";
    a3.style.backgroundColor = "#00031f";
})

epam.addEventListener("click", () => {
    a4.style.display = "none";
    a3.style.display = "none";
    a2.style.display = "flex";
    a1img.src = "critica.png";
    a2img.src = "sangra.png";
    amulr = "Epico";
    a1.style.backgroundColor = "#3b2d00";
    a2.style.backgroundColor = "#3b2d00";
})
leam.addEventListener("click", () => {
    a4.style.display = "none";
    a3.style.display = "none";
    a2.style.display = "none";
    a1img.src = "imorta.png";
    amulr = "Lendario";
    a1.style.backgroundColor = "#3b004d";
})

function del() {
    switch (select) {
        case 1:
    switch (true) {
        case amulres1 == true && a1p1.style.backgroundImage == 'url("resista.png")' && amul1 == 1:
            amuln = 0;
            amulres1 = false;
        break;
        case amulres1 == true && a2p1.style.backgroundImage == 'url("resista.png")' && amul1 == 2:
            amuln = 0;
            amulres1 = false;
        break;
        case amulres1 == true && a3p1.style.backgroundImage == 'url("resista.png")' && amul1 == 3:
            amuln = 0;
            amulres1 = false;
        break;
    }
    switch (true) {
        case amulvd1 == true && a1p1.style.backgroundImage == 'url("vidaa.png")' && amul1 == 1:
            amulnv = 0;
            amulvd1 = false;
        break;
        case amulvd1 == true && a2p1.style.backgroundImage == 'url("vidaa.png")' && amul1 == 2:
            amulnv = 0;
            amulvd1 = false;
        break;
        case amulvd1 == true && a3p1.style.backgroundImage == 'url("vidaa.png")' && amul1 == 3:
            amulnv = 0;
            amulvd1 = false;
        break;
    }
    switch (true) {
        case amuls1 == true && a1p1.style.backgroundImage == 'url("sortea.png")' && amul1 == 1:
            amulns = 0;
            amuls1 = false;
        break;
        case amuls1 == true && a2p1.style.backgroundImage == 'url("sortea.png")' && amul1 == 2:
            amulns = 0;
            amuls1 = false;
        break;
        case amuls1 == true && a3p1.style.backgroundImage == 'url("sortea.png")' && amul1 == 3:
            amulns = 0;
            amuls1 = false;
        break;
    }
    switch (true) {
        case amulsn1 == true && a1p1.style.backgroundImage == 'url("sana.png")' && amul1 == 1:
            amulnsn = 0;
            amulsn1 = false;
        break;
        case amulsn1 == true && a2p1.style.backgroundImage == 'url("sana.png")' && amul1 == 2:
            amulnsn = 0;
            amulsn1 = false;
        break;
        case amulsn1 == true && a3p1.style.backgroundImage == 'url("sana.png")' && amul1 == 3:
            amulnsn = 0;
            amulsn1 = false;
        break;
    }
    switch (true) {
        case amulreg1 == true && a1p1.style.backgroundImage == 'url("regena.png")' && amul1 == 1:
            amulnreg = 0;
            amulreg1 = false;
        break;
        case amulreg1 == true && a2p1.style.backgroundImage == 'url("regena.png")' && amul1 == 2:
            amulnreg = 0;
            amulreg1 = false;
        break;
        case amulreg1 == true && a3p1.style.backgroundImage == 'url("regena.png")' && amul1 == 3:
            amulnreg = 0;
            amulreg1 = false;
        break;
    }
    switch (true) {
        case amulv1 == true && a1p1.style.backgroundImage == 'url("vinga.png")' && amul1 == 1:
            amulnv = 0;
            amulv1 = false;
        break;
        case amulv1 == true && a2p1.style.backgroundImage == 'url("vinga.png")' && amul1 == 2:
            amulnv = 0;
            amulv1 = false;
        break;
        case amulv1 == true && a3p1.style.backgroundImage == 'url("vinga.png")' && amul1 == 3:
            amulnv = 0;
            amulv1 = false;
        break;
    }
    switch (true) {
        case amulc1 == true && a1p1.style.backgroundImage == 'url("atordoa.png")' && amul1 == 1:
            amulnar = 0;
            amulc1 = false;
        break;
        case amulc1 == true && a2p1.style.backgroundImage == 'url("atordoa.png")' && amul1 == 2:
            amulnar = 0;
            amulc1 = false;
        break;
        case amulc1 == true && a3p1.style.backgroundImage == 'url("atordoa.png")' && amul1 == 3:
            amulnar = 0;
            amulc1 = false;
        break;
    }
    switch (true) {
        case amulcr1 == true && a1p1.style.backgroundImage == 'url("critica.png")' && amul1 == 1:
            amulncr = 0;
            amulcr1 = false;
        break;
        case amulcr1 == true && a2p1.style.backgroundImage == 'url("critica.png")' && amul1 == 2:
            amulncr = 0;
            amulcr1 = false;
        break;
        case amulcr1 == true && a3p1.style.backgroundImage == 'url("critica.png")' && amul1 == 3:
            amulncr = 0;
            amulcr1 = false;
        break;
    }
    switch (true) {
        case amulsr1 == true && a1p1.style.backgroundImage == 'url("sangra.png")' && amul1 == 1:
            amulnsr = 0;
            amulsr1 = false;
        break;
        case amulsr1 == true && a2p1.style.backgroundImage == 'url("sangra.png")' && amul1 == 2:
            amulnsr = 0;
            amulsr1 = false;
        break;
        case amulsr1 == true && a3p1.style.backgroundImage == 'url("sangra.png")' && amul1 == 3:
            amulnsr = 0;
            amulsr1 = false;
        break;
    }
    switch (true) {
        case amuli1 == true && a1p1.style.backgroundImage == 'url("imorta.png")' && amul1 == 1:
            amulni = 0;
            amuli1 = false;
        break;
        case amuli1 == true && a2p1.style.backgroundImage == 'url("imorta.png")' && amul1 == 2:
            amulni = 0;
            amuli1 = false;
        break;
        case amuli1 == true && a3p1.style.backgroundImage == 'url("imorta.png")' && amul1 == 3:
            amulni = 0;
            amuli1 = false;
        break;
    }
    break;
    case 2:
        switch (true) {
            case amulres2 == true && a1p2.style.backgroundImage == 'url("resista.png")' && amul2 == 1:
                amuln2 = 0;
                amulres2 = false;
            break;
            case amulres2 == true && a2p2.style.backgroundImage == 'url("resista.png")' && amul2 == 2:
                amuln2 = 0;
                amulres2 = false;
            break;
            case amulres2 == true && a3p2.style.backgroundImage == 'url("resista.png")' && amul2 == 3:
                amuln2 = 0;
                amulres2 = false;
            break;
        }
        switch (true) {
            case amulvd2 == true && a1p2.style.backgroundImage == 'url("vidaa.png")' && amul2 == 1:
                amulnv2 = 0;
                amulvd2 = false;
            break;
            case amulvd2 == true && a2p2.style.backgroundImage == 'url("vidaa.png")' && amul2 == 2:
                amulnv2 = 0;
                amulvd2 = false;
            break;
            case amulvd2 == true && a3p2.style.backgroundImage == 'url("vidaa.png")' && amul2 == 3:
                amulnv2 = 0;
                amulvd2 = false;
            break;
        }
        switch (true) {
            case amuls2 == true && a1p2.style.backgroundImage == 'url("sortea.png")' && amul2 == 1:
                amulns2 = 0;
                amuls2 = false;
            break;
            case amuls2 == true && a2p2.style.backgroundImage == 'url("sortea.png")' && amul2 == 2:
                amulns2 = 0;
                amuls2 = false;
            break;
            case amuls2 == true && a3p2.style.backgroundImage == 'url("sortea.png")' && amul2 == 3:
                amulns2 = 0;
                amuls2 = false;
            break;
        }
        switch (true) {
            case amulsn2 == true && a1p2.style.backgroundImage == 'url("sana.png")' && amul2 == 1:
                amulnsn2 = 0;
                amulsn2 = false;
            break;
            case amulsn2 == true && a2p2.style.backgroundImage == 'url("sana.png")' && amul2 == 2:
                amulnsn2 = 0;
                amulsn2 = false;
            break;
            case amulsn2 == true && a3p2.style.backgroundImage == 'url("sana.png")' && amul2 == 3:
                amulnsn2 = 0;
                amulsn2 = false;
            break;
        }
        switch (true) {
            case amulreg2 == true && a1p2.style.backgroundImage == 'url("regena.png")' && amul2 == 1:
                amulnreg2 = 0;
                amulreg2 = false;
            break;
            case amulreg2 == true && a2p2.style.backgroundImage == 'url("regena.png")' && amul2 == 2:
                amulnreg2 = 0;
                amulreg2 = false;
            break;
            case amulreg2 == true && a3p2.style.backgroundImage == 'url("regena.png")' && amul2 == 3:
                amulnreg2 = 0;
                amulreg2 = false;
            break;
        }
        switch (true) {
            case amulv2 == true && a1p2.style.backgroundImage == 'url("vinga.png")' && amul2 == 1:
                amulnv2 = 0;
                amulv2 = false;
            break;
            case amulv2 == true && a2p2.style.backgroundImage == 'url("vinga.png")' && amul2 == 2:
                amulnv2 = 0;
                amulv2 = false;
            break;
            case amulv2 == true && a3p2.style.backgroundImage == 'url("vinga.png")' && amul2 == 3:
                amulnv2 = 0;
                amulv2 = false;
            break;
        }
        switch (true) {
            case amulc2 == true && a1p2.style.backgroundImage == 'url("atordoa.png")' && amul2 == 1:
                amulnar2 = 0;
                amulc2 = false;
            break;
            case amulc2 == true && a2p2.style.backgroundImage == 'url("atordoa.png")' && amul2 == 2:
                amulnar2 = 0;
                amulc2 = false;
            break;
            case amulc2 == true && a3p2.style.backgroundImage == 'url("atordoa.png")' && amul2 == 3:
                amulnar2 = 0;
                amulc2 = false;
            break;
        }
        switch (true) {
            case amulcr2 == true && a1p2.style.backgroundImage == 'url("critica.png")' && amul2 == 1:
                amulncr2 = 0;
                amulcr2 = false;
            break;
            case amulcr2 == true && a2p2.style.backgroundImage == 'url("critica.png")' && amul2 == 2:
                amulncr2 = 0;
                amulcr2 = false;
            break;
            case amulcr2 == true && a3p2.style.backgroundImage == 'url("critica.png")' && amul2 == 3:
                amulncr2 = 0;
                amulcr2 = false;
            break;
        }
        switch (true) {
            case amulsr2 == true && a1p2.style.backgroundImage == 'url("sangra.png")' && amul2 == 1:
                amulns2 = 0;
                amulsr2 = false;
            break;
            case amulsr2 == true && a2p2.style.backgroundImage == 'url("sangra.png")' && amul2 == 2:
                amulnsr2 = 0;
                amulsr2 = false;
            break;
            case amulsr2 == true && a3p2.style.backgroundImage == 'url("sangra.png")' && amul2 == 3:
                amulnsr2 = 0;
                amulsr2 = false;
            break;
        }
        switch (true) {
            case amuli2 == true && a1p2.style.backgroundImage == 'url("imorta.png")' && amul2 == 1:
                amulni2 = 0;
                amuli2 = false;
            break;
            case amuli2 == true && a2p2.style.backgroundImage == 'url("imorta.png")' && amul2 == 2:
                amulni2 = 0;
                amuli2 = false;
            break;
            case amuli2 == true && a3p2.style.backgroundImage == 'url("imorta.png")' && amul2 == 3:
                amulni2 = 0;
                amuli2 = false;
            break;
        }
        break;
        case 3:
            switch (true) {
                case amulres3 == true && a1p3.style.backgroundImage == 'url("resista.png")' && amul3 == 1:
                    amuln3 = 0;
                    amulres3 = false;
                break;
                case amulres3 == true && a2p3.style.backgroundImage == 'url("resista.png")' && amul3 == 2:
                    amuln3 = 0;
                    amulres3 = false;
                break;
                case amulres3 == true && a3p3.style.backgroundImage == 'url("resista.png")' && amul3 == 3:
                    amuln3 = 0;
                    amulres3 = false;
                break;
            }
            switch (true) {
                case amulvd3 == true && a1p3.style.backgroundImage == 'url("vidaa.png")' && amul3 == 1:
                    amulnv3 = 0;
                    amulvd3 = false;
                break;
                case amulvd3 == true && a2p3.style.backgroundImage == 'url("vidaa.png")' && amul3 == 2:
                    amulnv3 = 0;
                    amulvd3 = false;
                break;
                case amulvd3 == true && a3p3.style.backgroundImage == 'url("vidaa.png")' && amul3 == 3:
                    amulnv3 = 0;
                    amulvd3 = false;
                break;
            }
            switch (true) {
                case amuls3 == true && a1p3.style.backgroundImage == 'url("sortea.png")' && amul3 == 1:
                    amulns3 = 0;
                    amuls3 = false;
                break;
                case amuls3 == true && a2p3.style.backgroundImage == 'url("sortea.png")' && amul3 == 2:
                    amulns3 = 0;
                    amuls3 = false;
                break;
                case amuls3 == true && a3p3.style.backgroundImage == 'url("sortea.png")' && amul3 == 3:
                    amulns3 = 0;
                    amuls3 = false;
                break;
            }
            switch (true) {
                case amulsn3 == true && a1p3.style.backgroundImage == 'url("sana.png")' && amul3 == 1:
                    amulnsn3 = 0;
                    amulsn3 = false;
                break;
                case amulsn3 == true && a2p3.style.backgroundImage == 'url("sana.png")' && amul3 == 2:
                    amulnsn3 = 0;
                    amulsn3 = false;
                break;
                case amulsn3 == true && a3p3.style.backgroundImage == 'url("sana.png")' && amul3 == 3:
                    amulnsn3 = 0;
                    amulsn3 = false;
                break;
            }
            switch (true) {
                case amulreg3 == true && a1p3.style.backgroundImage == 'url("regena.png")' && amul3 == 1:
                    amulnreg3 = 0;
                    amulreg3 = false;
                break;
                case amulreg3 == true && a2p3.style.backgroundImage == 'url("regena.png")' && amul3 == 2:
                    amulnreg3 = 0;
                    amulreg3 = false;
                break;
                case amulreg3 == true && a3p3.style.backgroundImage == 'url("regena.png")' && amul3 == 3:
                    amulnreg3 = 0;
                    amulreg3 = false;
                break;
            }
            switch (true) {
                case amulv3 == true && a1p3.style.backgroundImage == 'url("vinga.png")' && amul3 == 1:
                    amulnv3 = 0;
                    amulv3 = false;
                break;
                case amulv3 == true && a2p3.style.backgroundImage == 'url("vinga.png")' && amul3 == 2:
                    amulnv3 = 0;
                    amulv3 = false;
                break;
                case amulv3 == true && a3p3.style.backgroundImage == 'url("vinga.png")' && amul3 == 3:
                    amulnv3 = 0;
                    amulv3 = false;
                break;
            }
            switch (true) {
                case amulc3 == true && a1p3.style.backgroundImage == 'url("atordoa.png")' && amul3 == 1:
                    amulnar3 = 0;
                    amulc3 = false;
                break;
                case amulc3 == true && a2p3.style.backgroundImage == 'url("atordoa.png")' && amul3 == 2:
                    amulnar3 = 0;
                    amulc3 = false;
                break;
                case amulc3 == true && a3p3.style.backgroundImage == 'url("atordoa.png")' && amul3 == 3:
                    amulnar3 = 0;
                    amulc3 = false;
                break;
            }
            switch (true) {
                case amulcr3 == true && a1p3.style.backgroundImage == 'url("critica.png")' && amul3 == 1:
                    amulncr3 = 0;
                    amulcr3 = false;
                break;
                case amulcr3 == true && a2p3.style.backgroundImage == 'url("critica.png")' && amul3 == 2:
                    amulncr3 = 0;
                    amulcr3 = false;
                break;
                case amulcr3 == true && a3p3.style.backgroundImage == 'url("critica.png")' && amul3 == 3:
                    amulncr3 = 0;
                    amulcr3 = false;
                break;
            }
            switch (true) {
                case amulsr3 == true && a1p3.style.backgroundImage == 'url("sangra.png")' && amul3 == 1:
                    amulns3 = 0;
                    amulsr3 = false;
                break;
                case amulsr3 == true && a2p3.style.backgroundImage == 'url("sangra.png")' && amul3 == 2:
                    amulnsr3 = 0;
                    amulsr3 = false;
                break;
                case amulsr3 == true && a3p3.style.backgroundImage == 'url("sangra.png")' && amul3 == 3:
                    amulnsr3 = 0;
                    amulsr3 = false;
                break;
            }
            switch (true) {
                case amuli3 == true && a1p3.style.backgroundImage == 'url("imorta.png")' && amul3 == 1:
                    amulni3 = 0;
                    amuli3 = false;
                break;
                case amuli3 == true && a2p3.style.backgroundImage == 'url("imorta.png")' && amul3 == 2:
                    amulni3 = 0;
                    amuli3 = false;
                break;
                case amuli3 == true && a3p3.style.backgroundImage == 'url("imorta.png")' && amul3 == 3:
                    amulni3 = 0;
                    amuli3 = false;
                break;
            }
        break;
        case 4:
            switch (true) {
                case amulres4 == true && a1p4.style.backgroundImage == 'url("resista.png")' && amul4 == 1:
                    amuln4 = 0;
                    amulres4 = false;
                break;
                case amulres4 == true && a2p4.style.backgroundImage == 'url("resista.png")' && amul4 == 2:
                    amuln4 = 0;
                    amulres4 = false;
                break;
                case amulres4 == true && a3p4.style.backgroundImage == 'url("resista.png")' && amul4 == 3:
                    amuln4 = 0;
                    amulres4 = false;
                break;
            }
            switch (true) {
                case amulvd4 == true && a1p4.style.backgroundImage == 'url("vidaa.png")' && amul4 == 1:
                    amulnv4 = 0;
                    amulvd4 = false;
                break;
                case amulvd4 == true && a2p4.style.backgroundImage == 'url("vidaa.png")' && amul4 == 2:
                    amulnv4 = 0;
                    amulvd4 = false;
                break;
                case amulvd4 == true && a3p4.style.backgroundImage == 'url("vidaa.png")' && amul4 == 3:
                    amulnv4 = 0;
                    amulvd4 = false;
                break;
            }
            switch (true) {
                case amuls4 == true && a1p4.style.backgroundImage == 'url("sortea.png")' && amul4 == 1:
                    amulns4 = 0;
                    amuls4 = false;
                break;
                case amuls4 == true && a2p4.style.backgroundImage == 'url("sortea.png")' && amul4 == 2:
                    amulns4 = 0;
                    amuls4 = false;
                break;
                case amuls4 == true && a3p4.style.backgroundImage == 'url("sortea.png")' && amul4 == 3:
                    amulns4 = 0;
                    amuls4 = false;
                break;
            }
            switch (true) {
                case amulsn4 == true && a1p4.style.backgroundImage == 'url("sana.png")' && amul4 == 1:
                    amulnsn4 = 0;
                    amulsn4 = false;
                break;
                case amulsn4 == true && a2p4.style.backgroundImage == 'url("sana.png")' && amul4 == 2:
                    amulnsn4 = 0;
                    amulsn4 = false;
                break;
                case amulsn4 == true && a3p4.style.backgroundImage == 'url("sana.png")' && amul4 == 3:
                    amulnsn4 = 0;
                    amulsn4 = false;
                break;
            }
            switch (true) {
                case amulreg4 == true && a1p4.style.backgroundImage == 'url("regena.png")' && amul4 == 1:
                    amulnreg4 = 0;
                    amulreg4 = false;
                break;
                case amulreg4 == true && a2p4.style.backgroundImage == 'url("regena.png")' && amul4 == 2:
                    amulnreg4 = 0;
                    amulreg4 = false;
                break;
                case amulreg4 == true && a3p4.style.backgroundImage == 'url("regena.png")' && amul4 == 3:
                    amulnreg4 = 0;
                    amulreg4 = false;
                break;
            }
            switch (true) {
                case amulv4 == true && a1p4.style.backgroundImage == 'url("vinga.png")' && amul4 == 1:
                    amulnv4 = 0;
                    amulv4 = false;
                break;
                case amulv4 == true && a2p4.style.backgroundImage == 'url("vinga.png")' && amul4 == 2:
                    amulnv4 = 0;
                    amulv4 = false;
                break;
                case amulv4 == true && a3p4.style.backgroundImage == 'url("vinga.png")' && amul4 == 3:
                    amulnv4 = 0;
                    amulv4 = false;
                break;
            }
            switch (true) {
                case amulc4 == true && a1p4.style.backgroundImage == 'url("atordoa.png")' && amul4 == 1:
                    amulnar4 = 0;
                    amulc4 = false;
                break;
                case amulc4 == true && a2p4.style.backgroundImage == 'url("atordoa.png")' && amul4 == 2:
                    amulnar4 = 0;
                    amulc4 = false;
                break;
                case amulc4 == true && a3p4.style.backgroundImage == 'url("atordoa.png")' && amul4 == 3:
                    amulnar4 = 0;
                    amulc4 = false;
                break;
            }
            switch (true) {
                case amulcr4 == true && a1p4.style.backgroundImage == 'url("critica.png")' && amul4 == 1:
                    amulncr4 = 0;
                    amulcr4 = false;
                break;
                case amulcr4 == true && a2p4.style.backgroundImage == 'url("critica.png")' && amul4 == 2:
                    amulncr4 = 0;
                    amulcr4 = false;
                break;
                case amulcr4 == true && a3p4.style.backgroundImage == 'url("critica.png")' && amul4 == 3:
                    amulncr4 = 0;
                    amulcr4 = false;
                break;
            }
            switch (true) {
                case amulsr4 == true && a1p4.style.backgroundImage == 'url("sangra.png")' && amul4 == 1:
                    amulns4 = 0;
                    amulsr4 = false;
                break;
                case amulsr4 == true && a2p4.style.backgroundImage == 'url("sangra.png")' && amul4 == 2:
                    amulnsr4 = 0;
                    amulsr4 = false;
                break;
                case amulsr4 == true && a3p4.style.backgroundImage == 'url("sangra.png")' && amul4 == 3:
                    amulnsr4 = 0;
                    amulsr4 = false;
                break;
            }
            switch (true) {
                case amuli4 == true && a1p4.style.backgroundImage == 'url("imorta.png")' && amul4 == 1:
                    amulni4 = 0;
                    amuli4 = false;
                break;
                case amuli4 == true && a2p4.style.backgroundImage == 'url("imorta.png")' && amul4 == 2:
                    amulni4 = 0;
                    amuli4 = false;
                break;
                case amuli4 == true && a3p4.style.backgroundImage == 'url("imorta.png")' && amul4 == 3:
                    amulni4 = 0;
                    amuli4 = false;
                break;
            }
            break;
            case 5:
                switch (true) {
                    case amulres5 == true && a1p5.style.backgroundImage == 'url("resista.png")' && amul5 == 1:
                        amuln5 = 0;
                        amulres5 = false;
                    break;
                    case amulres5 == true && a2p5.style.backgroundImage == 'url("resista.png")' && amul5 == 2:
                        amuln5 = 0;
                        amulres5 = false;
                    break;
                    case amulres5 == true && a3p5.style.backgroundImage == 'url("resista.png")' && amul5 == 3:
                        amuln5 = 0;
                        amulres5 = false;
                    break;
                }
                switch (true) {
                    case amulvd5 == true && a1p5.style.backgroundImage == 'url("vidaa.png")' && amul5 == 1:
                        amulnv5 = 0;
                        amulvd5 = false;
                    break;
                    case amulvd5 == true && a2p5.style.backgroundImage == 'url("vidaa.png")' && amul5 == 2:
                        amulnv5 = 0;
                        amulvd5 = false;
                    break;
                    case amulvd5 == true && a3p5.style.backgroundImage == 'url("vidaa.png")' && amul5 == 3:
                        amulnv5 = 0;
                        amulvd5 = false;
                    break;
                }
                switch (true) {
                    case amuls5 == true && a1p5.style.backgroundImage == 'url("sortea.png")' && amul5 == 1:
                        amulns5 = 0;
                        amuls5 = false;
                    break;
                    case amuls5 == true && a2p5.style.backgroundImage == 'url("sortea.png")' && amul5 == 2:
                        amulns5 = 0;
                        amuls5 = false;
                    break;
                    case amuls5 == true && a3p5.style.backgroundImage == 'url("sortea.png")' && amul5 == 3:
                        amulns5 = 0;
                        amuls5 = false;
                    break;
                }
                switch (true) {
                    case amulsn5 == true && a1p5.style.backgroundImage == 'url("sana.png")' && amul5 == 1:
                        amulnsn5 = 0;
                        amulsn5 = false;
                    break;
                    case amulsn5 == true && a2p5.style.backgroundImage == 'url("sana.png")' && amul5 == 2:
                        amulnsn5 = 0;
                        amulsn5 = false;
                    break;
                    case amulsn5 == true && a3p5.style.backgroundImage == 'url("sana.png")' && amul5 == 3:
                        amulnsn5 = 0;
                        amulsn5 = false;
                    break;
                }
                switch (true) {
                    case amulreg5 == true && a1p5.style.backgroundImage == 'url("regena.png")' && amul5 == 1:
                        amulnreg5 = 0;
                        amulreg5 = false;
                    break;
                    case amulreg5 == true && a2p5.style.backgroundImage == 'url("regena.png")' && amul5 == 2:
                        amulnreg5 = 0;
                        amulreg5 = false;
                    break;
                    case amulreg5 == true && a3p5.style.backgroundImage == 'url("regena.png")' && amul5 == 3:
                        amulnreg5 = 0;
                        amulreg5 = false;
                    break;
                }
                switch (true) {
                    case amulv5 == true && a1p5.style.backgroundImage == 'url("vinga.png")' && amul5 == 1:
                        amulnv5 = 0;
                        amulv5 = false;
                    break;
                    case amulv5 == true && a2p5.style.backgroundImage == 'url("vinga.png")' && amul5 == 2:
                        amulnv5 = 0;
                        amulv5 = false;
                    break;
                    case amulv5 == true && a3p5.style.backgroundImage == 'url("vinga.png")' && amul5 == 3:
                        amulnv5 = 0;
                        amulv5 = false;
                    break;
                }
                switch (true) {
                    case amulc5 == true && a1p5.style.backgroundImage == 'url("atordoa.png")' && amul5 == 1:
                        amulnar5 = 0;
                        amulc5 = false;
                    break;
                    case amulc5 == true && a2p5.style.backgroundImage == 'url("atordoa.png")' && amul5 == 2:
                        amulnar5 = 0;
                        amulc5 = false;
                    break;
                    case amulc5 == true && a3p5.style.backgroundImage == 'url("atordoa.png")' && amul5 == 3:
                        amulnar5 = 0;
                        amulc5 = false;
                    break;
                }
                switch (true) {
                    case amulcr5 == true && a1p5.style.backgroundImage == 'url("critica.png")' && amul5 == 1:
                        amulncr5 = 0;
                        amulcr5 = false;
                    break;
                    case amulcr5 == true && a2p5.style.backgroundImage == 'url("critica.png")' && amul5 == 2:
                        amulncr5 = 0;
                        amulcr5 = false;
                    break;
                    case amulcr5 == true && a3p5.style.backgroundImage == 'url("critica.png")' && amul5 == 3:
                        amulncr5 = 0;
                        amulcr5 = false;
                    break;
                }
                switch (true) {
                    case amulsr5 == true && a1p5.style.backgroundImage == 'url("sangra.png")' && amul5 == 1:
                        amulns5 = 0;
                        amulsr5 = false;
                    break;
                    case amulsr5 == true && a2p5.style.backgroundImage == 'url("sangra.png")' && amul5 == 2:
                        amulnsr5 = 0;
                        amulsr5 = false;
                    break;
                    case amulsr5 == true && a3p5.style.backgroundImage == 'url("sangra.png")' && amul5 == 3:
                        amulnsr5 = 0;
                        amulsr5 = false;
                    break;
                }
                switch (true) {
                    case amuli5 == true && a1p5.style.backgroundImage == 'url("imorta.png")' && amul5 == 1:
                        amulni5 = 0;
                        amuli5 = false;
                    break;
                    case amuli5 == true && a2p5.style.backgroundImage == 'url("imorta.png")' && amul5 == 2:
                        amulni5 = 0;
                        amuli5 = false;
                    break;
                    case amuli5 == true && a3p5.style.backgroundImage == 'url("imorta.png")' && amul5 == 3:
                        amulni5 = 0;
                        amuli5 = false;
                    break;
                }
                break;
}
}

Rmvam.addEventListener("click", () => {
    switch (select) {
        case 1:
            switch (amul1) {
                case 1:
                    del();
                    a1p1.style.backgroundImage = "unset";
                    amul1--;
                break;
                case 2:
                    del();
                    a2p1.style.backgroundImage = "unset";
                    amul1--;
                break;
                case 3:
                    del();
                    a3p1.style.backgroundImage = "unset";
                    amul1--;
                break;
            }
        break;
        case 2:
            switch (amul2) {
                case 1:
                    del();
                    a1p2.style.backgroundImage = "unset";
                    amul2--;
                break;
                case 2:
                    del();
                    a2p2.style.backgroundImage = "unset";
                    amul2--;
                break;
                case 3:
                    del();
                    a3p2.style.backgroundImage = "unset";
                    amul2--;
                break;
            }
        break;
        case 3:
            switch (amul3) {
                case 1:
                    del();
                    a1p3.style.backgroundImage = "unset";
                    amul3--;
                break;
                case 2:
                    del();
                    a2p3.style.backgroundImage = "unset";
                    amul3--;
                break;
                case 3:
                    del();
                    a3p3.style.backgroundImage = "unset";
                    amul3--;
                break;
            }
        break;
        case 4:
            switch (amul4) {
                case 1:
                    del();
                    a1p4.style.backgroundImage = "unset";
                    amul4--;
                break;
                case 2:
                    del();
                    a2p4.style.backgroundImage = "unset";
                    amul4--;
                break;
                case 3:
                    del();
                    a3p4.style.backgroundImage = "unset";
                    amul4--;
                break;
            }
        break;
        case 5:
            switch (amul5) {
                case 1:
                    del();
                    a1p5.style.backgroundImage = "unset";
                    amul5--;
                break;
                case 2:
                    del();
                    a2p5.style.backgroundImage = "unset";
                    amul5--;
                break;
                case 3:
                    del();
                    a3p5.style.backgroundImage = "unset";
                    amul5--;
                break;
            }
        break;
    }
})

a1.addEventListener("click", () => {
    switch (amulr) {
    case "Comum":
    switch (select) {
    case 1:
    if(amulres1 == false) {
    amul1++;
    switch (amul1) {
        case 1:
            a1p1.style.backgroundImage = "url(resista.png)";
            amuln = 1;
        break;
        case 2:
            a2p1.style.backgroundImage = "url(resista.png)";
            amuln = 2;
        break;
        case 3:
            a3p1.style.backgroundImage = "url(resista.png)";
            amuln = 3;
        break;
    }
    amulres1 = true;
}
    break;
    case 2:
        if(amulres2 == false) {
        amul2++;
        switch (amul2) {
            case 1:
                a1p2.style.backgroundImage = "url(resista.png)";
                amuln2 = 1;
            break;
            case 2:
                a2p2.style.backgroundImage = "url(resista.png)";
                amuln2 = 2;
            break;
            case 3:
                a3p2.style.backgroundImage = "url(resista.png)";
                amuln2 = 3;
            break;
        }
        amulres2 = true;
    }
        break;
        case 3:
    if(amulres3 == false) {
    amul3++;
    switch (amul3) {
        case 1:
            a1p3.style.backgroundImage = "url(resista.png)";
            amuln3 = 1;
        break;
        case 2:
            a2p3.style.backgroundImage = "url(resista.png)";
            amuln3 = 2;
        break;
        case 3:
            a3p3.style.backgroundImage = "url(resista.png)";
            amuln3 = 3;
        break;
    }
    amulres3 = true;
}
    break;
    case 4:
        if(amulres4 == false) {
        amul4++;
        switch (amul4) {
            case 1:
                a1p4.style.backgroundImage = "url(resista.png)";
                amuln4 = 1;
            break;
            case 2:
                a2p4.style.backgroundImage = "url(resista.png)";
                amuln4 = 2;
            break;
            case 3:
                a3p4.style.backgroundImage = "url(resista.png)";
                amuln4 = 3;
            break;
        }
        amulres4 = true;
    }
        break;
        case 5:
    if(amulres5 == false) {
    amul5++;
    switch (amul5) {
        case 1:
            a1p5.style.backgroundImage = "url(resista.png)";
            amuln5 = 1;
        break;
        case 2:
            a2p5.style.backgroundImage = "url(resista.png)";
            amuln5 = 2;
        break;
        case 3:
            a3p5.style.backgroundImage = "url(resista.png)";
            amuln5 = 3;
        break;
    }
    amulres5 = true;
}
    break;
}
break;
case "Raro":
    switch (select) {
        case 1:
        if(amulreg1 == false) {
        amul1++;
        switch (amul1) {
            case 1:
                a1p1.style.backgroundImage = "url(regena.png)";
                amulnreg = 1;
            break;
            case 2:
                a2p1.style.backgroundImage = "url(regena.png)";
                amulnreg = 2;
            break;
            case 3:
                a3p1.style.backgroundImage = "url(regena.png)";
                amulnreg = 3;
            break;
        }
        amulreg1 = true;
    }
        break;
        case 2:
            if(amulreg2 == false) {
            amul2++;
            switch (amul2) {
                case 1:
                    a1p2.style.backgroundImage = "url(regena.png)";
                    amulnreg2 = 1;
                break;
                case 2:
                    a2p2.style.backgroundImage = "url(regena.png)";
                    amulnreg2 = 2;
                break;
                case 3:
                    a3p2.style.backgroundImage = "url(regena.png)";
                    amulnreg2 = 3;
                break;
            }
            amulreg2 = true;
        }
            break;
            case 3:
        if(amulreg3 == false) {
        amul3++;
        switch (amul3) {
            case 1:
                a1p3.style.backgroundImage = "url(regena.png)";
                amulnreg3 = 1;
            break;
            case 2:
                a2p3.style.backgroundImage = "url(regena.png)";
                amulnreg3 = 2;
            break;
            case 3:
                a3p3.style.backgroundImage = "url(regena.png)";
                amulnreg3 = 3;
            break;
        }
        amulreg3 = true;
    }
        break;
        case 4:
            if(amulreg4 == false) {
            amul4++;
            switch (amul4) {
                case 1:
                    a1p4.style.backgroundImage = "url(regena.png)";
                    amulnreg4 = 1;
                break;
                case 2:
                    a2p4.style.backgroundImage = "url(regena.png)";
                    amulnreg4 = 2;
                break;
                case 3:
                    a3p4.style.backgroundImage = "url(regena.png)";
                    amulnreg4 = 3;
                break;
            }
            amulreg4 = true;
        }
            break;
            case 5:
        if(amulreg5 == false) {
        amul5++;
        switch (amul5) {
            case 1:
                a1p5.style.backgroundImage = "url(regena.png)";
                amulnreg5 = 1;
            break;
            case 2:
                a2p5.style.backgroundImage = "url(regena.png)";
                amulnreg5 = 2;
            break;
            case 3:
                a3p5.style.backgroundImage = "url(regena.png)";
                amulnreg5 = 3;
            break;
        }
        amulreg5 = true;
    }
        break;
    }
break;
case "Epico":
    switch (select) {
        case 1:
        if(amulcr1 == false) {
        amul1++;
        switch (amul1) {
            case 1:
                a1p1.style.backgroundImage = "url(critica.png)";
                amulncr = 1;
            break;
            case 2:
                a2p1.style.backgroundImage = "url(critica.png)";
                amulncr = 2;
            break;
            case 3:
                a3p1.style.backgroundImage = "url(critica.png)";
                amulncr = 3;
            break;
        }
        amulcr1 = true;
    }
        break;
        case 2:
            if(amulcr2 == false) {
            amul2++;
            switch (amul2) {
                case 1:
                    a1p2.style.backgroundImage = "url(critica.png)";
                    amulncr2 = 1;
                break;
                case 2:
                    a2p2.style.backgroundImage = "url(critica.png)";
                    amulncr2 = 2;
                break;
                case 3:
                    a3p2.style.backgroundImage = "url(critica.png)";
                    amulncr2 = 3;
                break;
            }
            amulcr2 = true;
        }
            break;
            case 3:
        if(amulcr3 == false) {
        amul3++;
        switch (amul3) {
            case 1:
                a1p3.style.backgroundImage = "url(critica.png)";
                amulncr3 = 1;
            break;
            case 2:
                a2p3.style.backgroundImage = "url(critica.png)";
                amulncr3 = 2;
            break;
            case 3:
                a3p3.style.backgroundImage = "url(critica.png)";
                amulncr3 = 3;
            break;
        }
        amulcr3 = true;
    }
        break;
        case 4:
            if(amulcr4 == false) {
            amul4++;
            switch (amul4) {
                case 1:
                    a1p4.style.backgroundImage = "url(critica.png)";
                    amulncr4 = 1;
                break;
                case 2:
                    a2p4.style.backgroundImage = "url(critica.png)";
                    amulncr4 = 2;
                break;
                case 3:
                    a3p4.style.backgroundImage = "url(critica.png)";
                    amulncr4 = 3;
                break;
            }
            amulcr4 = true;
        }
            break;
            case 5:
        if(amulcr5 == false) {
        amul5++;
        switch (amul5) {
            case 1:
                a1p5.style.backgroundImage = "url(critica.png)";
                amulncr5 = 1;
            break;
            case 2:
                a2p5.style.backgroundImage = "url(critica.png)";
                amulncr5 = 2;
            break;
            case 3:
                a3p5.style.backgroundImage = "url(critica.png)";
                amulncr5 = 3;
            break;
        }
        amulcr5 = true;
    }
        break;
    }
break;
case "Lendario":
    switch (select) {
        case 1:
        if(amuli1 == false) {
        amul1++;
        switch (amul1) {
            case 1:
                a1p1.style.backgroundImage = "url(imorta.png)";
                amulni = 1;
            break;
            case 2:
                a2p1.style.backgroundImage = "url(imorta.png)";
                amulni = 2;
            break;
            case 3:
                a3p1.style.backgroundImage = "url(imorta.png)";
                amulni = 3;
            break;
        }
        amuli1 = true;
    }
        break;
        case 2:
            if(amuli2 == false) {
            amul2++;
            switch (amul2) {
                case 1:
                    a1p2.style.backgroundImage = "url(imorta.png)";
                    amulni2 = 1;
                break;
                case 2:
                    a2p2.style.backgroundImage = "url(imorta.png)";
                    amulni2 = 2;
                break;
                case 3:
                    a3p2.style.backgroundImage = "url(imorta.png)";
                    amulni2 = 3;
                break;
            }
            amuli2 = true;
        }
            break;
            case 3:
        if(amuli3 == false) {
        amul3++;
        switch (amul3) {
            case 1:
                a1p3.style.backgroundImage = "url(imorta.png)";
                amulni3 = 1;
            break;
            case 2:
                a2p3.style.backgroundImage = "url(imorta.png)";
                amulni3 = 2;
            break;
            case 3:
                a3p3.style.backgroundImage = "url(imorta.png)";
                amulni3 = 3;
            break;
        }
        amuli3 = true;
    }
        break;
        case 4:
            if(amuli4 == false) {
            amul4++;
            switch (amul4) {
                case 1:
                    a1p4.style.backgroundImage = "url(imorta.png)";
                    amulni4 = 1;
                break;
                case 2:
                    a2p4.style.backgroundImage = "url(imorta.png)";
                    amulni4 = 2;
                break;
                case 3:
                    a3p4.style.backgroundImage = "url(imorta.png)";
                    amulni4 = 3;
                break;
            }
            amuli4 = true;
        }
            break;
            case 5:
        if(amuli5 == false) {
        amul5++;
        switch (amul5) {
            case 1:
                a1p5.style.backgroundImage = "url(imorta.png)";
                amulni5 = 1;
            break;
            case 2:
                a2p5.style.backgroundImage = "url(imorta.png)";
                amulni5 = 2;
            break;
            case 3:
                a3p5.style.backgroundImage = "url(imorta.png)";
                amulni5 = 3;
            break;
        }
        amuli5 = true;
    }
        break;
    }
break;
    }
})

a2.addEventListener("click", () => {
    switch (amulr) {
        case "Comum":
    switch (select) {
    case 1:
    if(amulvd1 == false) {
    amul1++;
    switch (amul1) {
        case 1:
            a1p1.style.backgroundImage = "url(vidaa.png)";
            amulnv = 1;
        break;
        case 2:
            a2p1.style.backgroundImage = "url(vidaa.png)";
            amulnv = 2;
        break;
        case 3:
            a3p1.style.backgroundImage = "url(vidaa.png)";
            amulnv = 3;
        break;
    }
    amulvd1 = true;
}
    break;
    case 2:
        if(amulvd2 == false) {
        amul2++;
        switch (amul2) {
            case 1:
                a1p2.style.backgroundImage = "url(vidaa.png)";
                amulnv2 = 1;
            break;
            case 2:
                a2p2.style.backgroundImage = "url(vidaa.png)";
                amulnv2 = 2;
            break;
            case 3:
                a3p2.style.backgroundImage = "url(vidaa.png)";
                amulnv2 = 3;
            break;
        }
        amulvd2 = true;
    }
        break;
        case 3:
    if(amulvd3 == false) {
    amul3++;
    switch (amul3) {
        case 1:
            a1p3.style.backgroundImage = "url(vidaa.png)";
            amulnv3 = 1;
        break;
        case 2:
            a2p3.style.backgroundImage = "url(vidaa.png)";
            amulnv3 = 2;
        break;
        case 3:
            a3p3.style.backgroundImage = "url(vidaa.png)";
            amulnv3 = 3;
        break;
    }
    amulvd3 = true;
}
    break;
    case 4:
        if(amulvd4 == false) {
        amul4++;
        switch (amul4) {
            case 1:
                a1p4.style.backgroundImage = "url(vidaa.png)";
                amulnv4 = 1;
            break;
            case 2:
                a2p4.style.backgroundImage = "url(vidaa.png)";
                amulnv4 = 2;
            break;
            case 3:
                a3p4.style.backgroundImage = "url(vidaa.png)";
                amulnv4 = 3;
            break;
        }
        amulvd4 = true;
    }
        break;
        case 5:
    if(amulvd5 == false) {
    amul5++;
    switch (amul5) {
        case 1:
            a1p5.style.backgroundImage = "url(vidaa.png)";
            amulnv5 = 1;
        break;
        case 2:
            a2p5.style.backgroundImage = "url(vidaa.png)";
            amulnv5 = 2;
        break;
        case 3:
            a3p5.style.backgroundImage = "url(vidaa.png)";
            amulnv5 = 3;
        break;
    }
    amulvd5 = true;
}
    break;
}
    break;
    case "Raro":
        switch (select) {
            case 1:
            if(amulv1 == false) {
            amul1++;
            switch (amul1) {
                case 1:
                    a1p1.style.backgroundImage = "url(vinga.png)";
                    amulnvg = 1;
                break;
                case 2:
                    a2p1.style.backgroundImage = "url(vinga.png)";
                    amulnvg = 2;
                break;
                case 3:
                    a3p1.style.backgroundImage = "url(vinga.png)";
                    amulnvg = 3;
                break;
            }
            amulv1 = true;
        }
            break;
            case 2:
                if(amulv2 == false) {
                amul2++;
                switch (amul2) {
                    case 1:
                        a1p2.style.backgroundImage = "url(vinga.png)";
                        amulnvg2 = 1;
                    break;
                    case 2:
                        a2p2.style.backgroundImage = "url(vinga.png)";
                        amulnvg2 = 2;
                    break;
                    case 3:
                        a3p2.style.backgroundImage = "url(vinga.png)";
                        amulnvg2 = 3;
                    break;
                }
                amulv2 = true;
            }
                break;
                case 3:
            if(amulv3 == false) {
            amul3++;
            switch (amul3) {
                case 1:
                    a1p3.style.backgroundImage = "url(vinga.png)";
                    amulnvg3 = 1;
                break;
                case 2:
                    a2p3.style.backgroundImage = "url(vinga.png)";
                    amulnvg3 = 2;
                break;
                case 3:
                    a3p3.style.backgroundImage = "url(vinga.png)";
                    amulnvg3 = 3;
                break;
            }
            amulv3 = true;
        }
            break;
            case 4:
                if(amulv4 == false) {
                amul4++;
                switch (amul4) {
                    case 1:
                        a1p4.style.backgroundImage = "url(vinga.png)";
                        amulnvg4 = 1;
                    break;
                    case 2:
                        a2p4.style.backgroundImage = "url(vinga.png)";
                        amulnvg4 = 2;
                    break;
                    case 3:
                        a3p4.style.backgroundImage = "url(vinga.png)";
                        amulnvg4 = 3;
                    break;
                }
                amulv4 = true;
            }
                break;
                case 5:
            if(amulv5 == false) {
            amul5++;
            switch (amul5) {
                case 1:
                    a1p5.style.backgroundImage = "url(vinga.png)";
                    amulnvg5 = 1;
                break;
                case 2:
                    a2p5.style.backgroundImage = "url(vinga.png)";
                    amulnvg5 = 2;
                break;
                case 3:
                    a3p5.style.backgroundImage = "url(vinga.png)";
                    amulnvg5 = 3;
                break;
            }
            amulv5 = true;
        }
            break;
        }
    break;
    case "Epico":
        switch (select) {
            case 1:
            if(amulsr1 == false) {
            amul1++;
            switch (amul1) {
                case 1:
                    a1p1.style.backgroundImage = "url(sangra.png)";
                    amulnsr = 1;
                break;
                case 2:
                    a2p1.style.backgroundImage = "url(sangra.png)";
                    amulnsr = 2;
                break;
                case 3:
                    a3p1.style.backgroundImage = "url(sangra.png)";
                    amulnsr = 3;
                break;
            }
            amulsr1 = true;
        }
            break;
            case 2:
                if(amulsr2 == false) {
                amul2++;
                switch (amul2) {
                    case 1:
                        a1p2.style.backgroundImage = "url(sangra.png)";
                        amulnsr2 = 1;
                    break;
                    case 2:
                        a2p2.style.backgroundImage = "url(sangra.png)";
                        amulnsr2 = 2;
                    break;
                    case 3:
                        a3p2.style.backgroundImage = "url(sangra.png)";
                        amulnsr2 = 3;
                    break;
                }
                amulsr2 = true;
            }
                break;
                case 3:
            if(amulsr3 == false) {
            amul3++;
            switch (amul3) {
                case 1:
                    a1p3.style.backgroundImage = "url(sangra.png)";
                    amulnsr3 = 1;
                break;
                case 2:
                    a2p3.style.backgroundImage = "url(sangra.png)";
                    amulnsr3 = 2;
                break;
                case 3:
                    a3p3.style.backgroundImage = "url(sangra.png)";
                    amulnsr3 = 3;
                break;
            }
            amulsr3 = true;
        }
            break;
            case 4:
                if(amulsr4 == false) {
                amul4++;
                switch (amul4) {
                    case 1:
                        a1p4.style.backgroundImage = "url(sangra.png)";
                        amulnsr4 = 1;
                    break;
                    case 2:
                        a2p4.style.backgroundImage = "url(sangra.png)";
                        amulnsr4 = 2;
                    break;
                    case 3:
                        a3p4.style.backgroundImage = "url(sangra.png)";
                        amulnsr4 = 3;
                    break;
                }
                amulsr4 = true;
            }
                break;
                case 5:
            if(amulsr5 == false) {
            amul5++;
            switch (amul5) {
                case 1:
                    a1p5.style.backgroundImage = "url(sangra.png)";
                    amulnsr5 = 1;
                break;
                case 2:
                    a2p5.style.backgroundImage = "url(sangra.png)";
                    amulnsr5 = 2;
                break;
                case 3:
                    a3p5.style.backgroundImage = "url(sangra.png)";
                    amulnsr5 = 3;
                break;
            }
            amulsr5 = true;
        }
            break;
        }
    break;
}
})

a3.addEventListener("click", () => {
    switch (amulr) {
        case "Comum":
    switch (select) {
    case 1:
    if(amuls1 == false) {
    amul1++;
    switch (amul1) {
        case 1:
            a1p1.style.backgroundImage = "url(sortea.png)";
            amulns = 1;
        break;
        case 2:
            a2p1.style.backgroundImage = "url(sortea.png)";
            amulns = 2;
        break;
        case 3:
            a3p1.style.backgroundImage = "url(sortea.png)";
            amulns = 3;
        break;
    }
    amuls1 = true;
}
    break;
    case 2:
        if(amuls2 == false) {
        amul2++;
        switch (amul2) {
            case 1:
                a1p2.style.backgroundImage = "url(sortea.png)";
                amulns2 = 1;
            break;
            case 2:
                a2p2.style.backgroundImage = "url(sortea.png)";
                amulns2 = 2;
            break;
            case 3:
                a3p2.style.backgroundImage = "url(sortea.png)";
                amulns2 = 3;
            break;
        }
        amuls2 = true;
    }
        break;
        case 3:
    if(amuls3 == false) {
    amul3++;
    switch (amul3) {
        case 1:
            a1p3.style.backgroundImage = "url(sortea.png)";
            amulns3 = 1;
        break;
        case 2:
            a2p3.style.backgroundImage = "url(sortea.png)";
            amulns3 = 2;
        break;
        case 3:
            a3p3.style.backgroundImage = "url(sortea.png)";
            amulns3 = 3;
        break;
    }
    amuls3 = true;
}
    break;
    case 4:
        if(amuls4 == false) {
        amul4++;
        switch (amul4) {
            case 1:
                a1p4.style.backgroundImage = "url(sortea.png)";
                amulns4 = 1;
            break;
            case 2:
                a2p4.style.backgroundImage = "url(sortea.png)";
                amulns4 = 2;
            break;
            case 3:
                a3p4.style.backgroundImage = "url(sortea.png)";
                amulns4 = 3;
            break;
        }
        amuls4 = true;
    }
        break;
        case 5:
    if(amuls5 == false) {
    amul5++;
    switch (amul5) {
        case 1:
            a1p5.style.backgroundImage = "url(sortea.png)";
            amulns5 = 1;
        break;
        case 2:
            a2p5.style.backgroundImage = "url(sortea.png)";
            amulns5 = 2;
        break;
        case 3:
            a3p5.style.backgroundImage = "url(sortea.png)";
            amulns5 = 3;
        break;
    }
    amuls5 = true;
}
    break;
}
    break;
    case "Raro":
        switch (select) {
            case 1:
            if(amulc1 == false) {
            amul1++;
            switch (amul1) {
                case 1:
                    a1p1.style.backgroundImage = "url(atordoa.png)";
                    amulnar = 1;
                break;
                case 2:
                    a2p1.style.backgroundImage = "url(atordoa.png)";
                    amulnar = 2;
                break;
                case 3:
                    a3p1.style.backgroundImage = "url(atordoa.png)";
                    amulnar = 3;
                break;
            }
            amulc1 = true;
        }
            break;
            case 2:
                if(amulc2 == false) {
                amul2++;
                switch (amul2) {
                    case 1:
                        a1p2.style.backgroundImage = "url(atordoa.png)";
                        amulnar2 = 1;
                    break;
                    case 2:
                        a2p2.style.backgroundImage = "url(atordoa.png)";
                        amulnar2 = 2;
                    break;
                    case 3:
                        a3p2.style.backgroundImage = "url(atordoa.png)";
                        amulnar2 = 3;
                    break;
                }
                amulc2 = true;
            }
                break;
                case 3:
            if(amulc3 == false) {
            amul3++;
            switch (amul3) {
                case 1:
                    a1p3.style.backgroundImage = "url(atordoa.png)";
                    amulnar3 = 1;
                break;
                case 2:
                    a2p3.style.backgroundImage = "url(atordoa.png)";
                    amulnar3 = 2;
                break;
                case 3:
                    a3p3.style.backgroundImage = "url(atordoa.png)";
                    amulnar3 = 1;
                break;
            }
            amulc3 = true;
        }
            break;
            case 4:
                if(amulc4 == false) {
                amul4++;
                switch (amul4) {
                    case 1:
                        a1p4.style.backgroundImage = "url(atordoa.png)";
                        amulnar4 = 1;
                    break;
                    case 2:
                        a2p4.style.backgroundImage = "url(atordoa.png)";
                        amulnar4 = 2;
                    break;
                    case 3:
                        a3p4.style.backgroundImage = "url(atordoa.png)";
                        amulnar4 = 3;
                    break;
                }
                amulc4 = true;
            }
                break;
                case 5:
            if(amulc5 == false) {
            amul5++;
            switch (amul5) {
                case 1:
                    a1p5.style.backgroundImage = "url(atordoa.png)";
                    amulnar5 = 1;
                break;
                case 2:
                    a2p5.style.backgroundImage = "url(atordoa.png)";
                    amulnar5 = 2;
                break;
                case 3:
                    a3p5.style.backgroundImage = "url(atordoa.png)";
                    amulnar5 = 3;
                break;
            }
            amulc5 = true;
        }
            break;
        }
    break;
}
})

a4.addEventListener("click", () => {
    switch (select) {
    case 1:
    if(amulsn1 == false) {
    amul1++;
    switch (amul1) {
        case 1:
            a1p1.style.backgroundImage = "url(sana.png)";
            amulni = 1;
        break;
        case 2:
            a2p1.style.backgroundImage = "url(sana.png)";
            amulni = 2;
        break;
        case 3:
            a3p1.style.backgroundImage = "url(sana.png)";
            amulni = 3;
        break;
    }
    amulsn1 = true;
}
    break;
    case 2:
        if(amulsn2 == false) {
        amul2++;
        switch (amul2) {
            case 1:
                a1p2.style.backgroundImage = "url(sana.png)";
                amulni2 = 1;
            break;
            case 2:
                a2p2.style.backgroundImage = "url(sana.png)";
                amulni2 = 2;
            break;
            case 3:
                a3p2.style.backgroundImage = "url(sana.png)";
                amulni2 = 3;
            break;
        }
        amulsn2 = true;
    }
        break;
        case 3:
    if(amulsn3 == false) {
    amul3++;
    switch (amul3) {
        case 1:
            a1p3.style.backgroundImage = "url(sana.png)";
            amulni3 = 1;
        break;
        case 2:
            a2p3.style.backgroundImage = "url(sana.png)";
            amulni3 = 2;
        break;
        case 3:
            a3p3.style.backgroundImage = "url(sana.png)";
            amulni3 = 3;
        break;
    }
    amulsn3 = true;
}
    break;
    case 4:
        if(amulsn4 == false) {
        amul4++;
        switch (amul4) {
            case 1:
                a1p4.style.backgroundImage = "url(sana.png)";
                amulni4 = 1;
            break;
            case 2:
                a2p4.style.backgroundImage = "url(sana.png)";
                amulni4 = 2;
            break;
            case 3:
                a3p4.style.backgroundImage = "url(sana.png)";
                amulni4 = 3;
            break;
        }
        amulsn4 = true;
    }
        break;
        case 5:
    if(amulsn5 == false) {
    amul5++;
    switch (amul5) {
        case 1:
            a1p5.style.backgroundImage = "url(sana.png)";
            amulni5 = 1;
        break;
        case 2:
            a2p5.style.backgroundImage = "url(sana.png)";
            amulni5 = 2;
        break;
        case 3:
            a3p5.style.backgroundImage = "url(sana.png)";
            amulni5 = 3;
        break;
    }
    amulsn5 = true;
}
    break;
}
})