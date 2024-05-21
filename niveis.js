function nvs() {
    for(let i = 0; i < niveis.length; i++) {
        switch (niveis[i].textContent) {
            case "NV: I":
                danos[i] = armas[i];
                dns[i].textContent = Math.floor(armas[i]);
                vidas[i].textContent = vds[i];
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: II":
                danos[i] = 10 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 10);
                vidas[i].textContent = vds[i] + 20;
                resistencias[i].textContent = `${rss[i] + 1}%`;
                resps[i] -= 0.01;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: III":
                danos[i] = 25 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 25);
                vidas[i].textContent = vds[i] + 45;
                resistencias[i].textContent = `${rss[i] + 3}%`;
                resps[i] -= 0.03;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: IV":
                danos[i] = 45 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 45);
                vidas[i].textContent = vds[i] + 75;
                resistencias[i].textContent = `${rss[i] + 6}%`;
                resps[i] -= 0.06;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: V":
                danos[i] = 65 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 65);
                vidas[i].textContent = vds[i] + 120;
                resistencias[i].textContent = `${rss[i] + 9}%`;
                resps[i] -= 0.09;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: VI":
                danos[i] = 95 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 95);
                vidas[i].textContent = vds[i] + 170;
                resistencias[i].textContent = `${rss[i] + 12}%`;
                resps[i] -= 0.12;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: VII":
                danos[i] = 130 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 130);
                vidas[i].textContent = vds[i] + 235;
                resistencias[i].textContent = `${rss[i] + 15}%`;
                resps[i] -= 0.15;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: VIII":
                danos[i] = 170 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 170);
                vidas[i].textContent = vds[i] + 320;
                resistencias[i].textContent = `${rss[i] + 18}%`;
                resps[i] -= 0.18;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: IX":
                danos[i] = 215 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 215);
                vidas[i].textContent = vds[i] + 420;
                resistencias[i].textContent = `${rss[i] + 21}%`;
                resps[i] -= 0.21;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
            case "NV: X":
                danos[i] = 265 + armas[i];
                dns[i].textContent = Math.floor(armas[i] + 265);
                vidas[i].textContent = vds[i] + 550;
                resistencias[i].textContent = `${rss[i] + 26}%`;
                resps[i] -= 0.26;
                vds[i] = vidas[i].textContent;
                dans1 = danoc1a.textContent;
                dans2 = danoc2a.textContent;
                dans3 = danoc3a.textContent;
                dans4 = danoc4a.textContent;
                dans5 = danoc5a.textContent;
            break;
        }
    }
}