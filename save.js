selniv.value = localStorage.selnivs;
horda = localStorage.hordasn;
chefe = localStorage.chefesn;
quantm.textContent = localStorage.b1;
quantr.textContent = localStorage.b2;
quanta.textContent = localStorage.b3;
quantc.textContent = localStorage.b4;
quants.textContent = localStorage.b5;
quante.textContent = localStorage.b6;
quantf.textContent = localStorage.b7;
quanti.textContent = localStorage.b8;
selarmap1.value = localStorage.armasp1;
selarmap2.value = localStorage.armasp2;
selarmap3.value = localStorage.armasp3;
selarmap4.value = localStorage.armasp4;
selarmap5.value = localStorage.armasp5;
nummunp1.value = localStorage.munp1;
nummunp2.value = localStorage.munp2;
nummunp3.value = localStorage.munp3;
nummunp4.value = localStorage.munp4;
nummunp5.value = localStorage.munp5;

defmp1 = localStorage.itnmp1;
defmp2 = localStorage.itnmp2;
defmp3 = localStorage.itnmp3;
defmp4 = localStorage.itnmp4;
defmp5 = localStorage.itnmp5;
defrp1 = localStorage.itnrp1;
defrp2 = localStorage.itnrp2;
defrp3 = localStorage.itnrp3;
defrp4 = localStorage.itnrp4;
defrp5 = localStorage.itnrp5;
defap1 = localStorage.itnap1;
defap2 = localStorage.itnap2;
defap3 = localStorage.itnap3;
defap4 = localStorage.itnap4;
defap5 = localStorage.itnap5;
defcp1 = localStorage.itncp1;
defcp2 = localStorage.itncp2;
defcp3 = localStorage.itncp3;
defcp4 = localStorage.itncp4;
defcp5 = localStorage.itncp5;
defsp1 = localStorage.itnsp1;
defsp2 = localStorage.itnsp2;
defsp3 = localStorage.itnsp3;
defsp4 = localStorage.itnsp4;
defsp5 = localStorage.itnsp5;
defep1 = localStorage.itnep1;
defep2 = localStorage.itnep2;
defep3 = localStorage.itnep3;
defep4 = localStorage.itnep4;
defep5 = localStorage.itnep5;
deffp1 = localStorage.itnfp1;
deffp2 = localStorage.itnfp2;
deffp3 = localStorage.itnfp3;
deffp4 = localStorage.itnfp4;
deffp5 = localStorage.itnfp5;
defip1 = localStorage.itnip1;
defip2 = localStorage.itnip2;
defip3 = localStorage.itnip3;
defip4 = localStorage.itnip4;
defip5 = localStorage.itnip5;
 
switch(horda) {
    case '1':
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
            chefe = 0;
        }
    break;
    case '2':
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
            chefe = 0;
        }
    break;
    case '3':
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
            chefe = 0;
        }
    break;
    case '4':
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
            chefe = 0;
        }
    break;
    case '5':
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
            chefe = 0;
        }
    break;
    case '6':
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
            chefe = 0;
        }
    break;
    case '7':
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
            chefe = 0;
        }
    break;
    case '8':
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
            chefe = 0;
        }
    break;
}
switch (chefe) {
    case '1':
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
    break;
    case '2':
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
    break;
}
function save() {
    localStorage.selnivs = selniv.value;
    localStorage.hordasn = horda;
    localStorage.chefesn = chefe;
    localStorage.b1 = "";
    localStorage.b2 = "";
    localStorage.b3 = "";
    localStorage.b4 = "";
    localStorage.b5 = "";
    localStorage.b6 = "";
    localStorage.b7 = "";
    localStorage.b8 = "";
    localStorage.b1 += quantm.textContent * 1;
    localStorage.b2 += quantr.textContent * 1;
    localStorage.b3 += quanta.textContent * 1;
    localStorage.b4 += quantc.textContent * 1;
    localStorage.b5 += quants.textContent * 1;
    localStorage.b6 += quante.textContent * 1;
    localStorage.b7 += quantf.textContent * 1;
    localStorage.b8 += quanti.textContent * 1;
    localStorage.armasp1 = selarmap1.value;
    localStorage.armasp2 = selarmap2.value;
    localStorage.armasp3 = selarmap3.value;
    localStorage.armasp4 = selarmap4.value;
    localStorage.armasp5 = selarmap5.value;
    localStorage.munp1 = nummunp1.value;
    localStorage.munp2 = nummunp2.value;
    localStorage.munp3 = nummunp3.value;
    localStorage.munp4 = nummunp4.value;
    localStorage.munp5 = nummunp5.value;
    localStorage.itnmp1 = 0;
    localStorage.itnmp2 = 0;
    localStorage.itnmp3 = 0;
    localStorage.itnmp4 = 0;
    localStorage.itnmp5 = 0;
    localStorage.itnrp1 = 0;
    localStorage.itnrp2 = 0;
    localStorage.itnrp3 = 0;
    localStorage.itnrp4 = 0;
    localStorage.itnrp5 = 0;
    localStorage.itnap1 = 0;
    localStorage.itnap2 = 0;
    localStorage.itnap3 = 0;
    localStorage.itnap4 = 0;
    localStorage.itnap5 = 0;
    localStorage.itnsp1 = 0;
    localStorage.itnsp2 = 0;
    localStorage.itnsp3 = 0;
    localStorage.itnsp4 = 0;
    localStorage.itnsp5 = 0;
    localStorage.itncp1 = 0;
    localStorage.itncp2 = 0;
    localStorage.itncp3 = 0;
    localStorage.itncp4 = 0;
    localStorage.itncp5 = 0;
    localStorage.itnep1 = 0;
    localStorage.itnep2 = 0;
    localStorage.itnep3 = 0;
    localStorage.itnep4 = 0;
    localStorage.itnep5 = 0;
    localStorage.itnfp1 = 0;
    localStorage.itnfp2 = 0;
    localStorage.itnfp3 = 0;
    localStorage.itnfp4 = 0;
    localStorage.itnfp5 = 0;
    localStorage.itnip1 = 0;
    localStorage.itnip2 = 0;
    localStorage.itnip3 = 0;
    localStorage.itnip4 = 0;
    localStorage.itnip5 = 0;
    localStorage.itnmp1 -= -defmp1;
    localStorage.itnmp2 -= -defmp2;
    localStorage.itnmp3 -= -defmp3;
    localStorage.itnmp4 -= -defmp4;
    localStorage.itnmp5 -= -defmp5;
    localStorage.itnrp1 -= -defrp1;
    localStorage.itnrp2 -= -defrp2;
    localStorage.itnrp3 -= -defrp3;
    localStorage.itnrp4 -= -defrp4;
    localStorage.itnrp5 -= -defrp5;
    localStorage.itnap1 -= -defap1;
    localStorage.itnap2 -= -defap2;
    localStorage.itnap3 -= -defap3;
    localStorage.itnap4 -= -defap4;
    localStorage.itnap5 -= -defap5;
    localStorage.itnsp1 -= -defsp1;
    localStorage.itnsp2 -= -defsp2;
    localStorage.itnsp3 -= -defsp3;
    localStorage.itnsp4 -= -defsp4;
    localStorage.itnsp5 -= -defsp5;
    localStorage.itncp1 -= -defcp1;
    localStorage.itncp2 -= -defcp2;
    localStorage.itncp3 -= -defcp3;
    localStorage.itncp4 -= -defcp4;
    localStorage.itncp5 -= -defcp5;
    localStorage.itnep1 -= -defep1;
    localStorage.itnep2 -= -defep2;
    localStorage.itnep3 -= -defep3;
    localStorage.itnep4 -= -defep4;
    localStorage.itnep5 -= -defep5;
    localStorage.itnfp1 -= -deffp1;
    localStorage.itnfp2 -= -deffp2;
    localStorage.itnfp3 -= -deffp3;
    localStorage.itnfp4 -= -deffp4;
    localStorage.itnfp5 -= -deffp5;
    localStorage.itnip1 -= -defip1;
    localStorage.itnip2 -= -defip2;
    localStorage.itnip3 -= -defip3;
    localStorage.itnip4 -= -defip4;
    localStorage.itnip5 -= -defip5;
}