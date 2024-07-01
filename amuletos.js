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
        case amulres1 == true && a1p1.style.backgroundImage == 'url("resista.png")' && amuln == 1:
            amulres1 = false;
        break;
        case amulres1 == true && a2p1.style.backgroundImage == 'url("resista.png")' && amuln == 2:
            amulres1 = false;
        break;
        case amulres1 == true && a3p1.style.backgroundImage == 'url("resista.png")' && amuln == 3:
            amulres1 = false;
        break;
        case amulvd1 == true:
            amulrvd1 = false;
        break;
        case amuls1 == true:
            amuls1 = false;
        break;
        case amulsn1 == true:
            amulsn1 = false;
        break;
        case amulreg1 == true:
            amulreg1 = false;
        break;
        case amulv1 == true:
            amulv1 = false;
        break;
        case amulc1 == true:
            amulc1 = false;
        break;
        case amulcr1 == true:
            amulcr1 = false;
        break;
        case amulsr1 == true:
            amulsr1 = false;
        break;
        case amuli1 == true:
            amuli1 = false;
        break;
    }
    break;
    case 2:
        switch (true) {
            case amulres2 == true:
                amulres2 = false;
            break;
            case amulvd2 == true:
                amulrvd2 = false;
            break;
            case amuls2 == true:
                amuls2 = false;
            break;
            case amulsn2 == true:
                amulsn2 = false;
            break;
            case amulreg2 == true:
                amulreg2 = false;
            break;
            case amulv2 == true:
                amulv2 = false;
            break;
            case amulc2 == true:
                amulc2 = false;
            break;
            case amulcr2 == true:
                amulcr2 = false;
            break;
            case amulsr2 == true:
                amulsr2 = false;
            break;
            case amuli2 == true:
                amuli2 = false;
            break;
        }
        break;
        case 3:
        switch (true) {
            case amulres3 == true:
                amulres3 = false;
            break;
            case amulvd3 == true:
                amulrvd3 = false;
            break;
            case amuls3 == true:
                amuls3 = false;
            break;
            case amulsn3 == true:
                amulsn3 = false;
            break;
            case amulreg3 == true:
                amulreg3 = false;
            break;
            case amulv3 == true:
                amulv3 = false;
            break;
            case amulc3 == true:
                amulc3 = false;
            break;
            case amulcr3 == true:
                amulcr3 = false;
            break;
            case amulsr3 == true:
                amulsr3 = false;
            break;
            case amuli3 == true:
                amuli3 = false;
            break;
        }
        break;
        case 4:
            switch (true) {
                case amulres4 == true:
                    amulres4 = false;
                break;
                case amulvd4 == true:
                    amulrvd4 = false;
                break;
                case amuls4 == true:
                    amuls4 = false;
                break;
                case amulsn4 == true:
                    amulsn4 = false;
                break;
                case amulreg4 == true:
                    amulreg4 = false;
                break;
                case amulv4 == true:
                    amulv4 = false;
                break;
                case amulc4 == true:
                    amulc4 = false;
                break;
                case amulcr4 == true:
                    amulcr4 = false;
                break;
                case amulsr4 == true:
                    amulsr4 = false;
                break;
                case amuli4 == true:
                    amuli4 = false;
                break;
            }
            break;
            case 5:
                switch (true) {
                    case amulres5 == true:
                        amulres5 = false;
                    break;
                    case amulvd5 == true:
                        amulrvd5 = false;
                    break;
                    case amuls5 == true:
                        amuls5 = false;
                    break;
                    case amulsn5 == true:
                        amulsn5 = false;
                    break;
                    case amulreg5 == true:
                        amulreg5 = false;
                    break;
                    case amulv5 == true:
                        amulv5 = false;
                    break;
                    case amulc5 == true:
                        amulc5 = false;
                    break;
                    case amulcr5 == true:
                        amulcr5 = false;
                    break;
                    case amulsr5 == true:
                        amulsr5 = false;
                    break;
                    case amuli5 == true:
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