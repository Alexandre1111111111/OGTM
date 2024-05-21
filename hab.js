function habilidades() {
    switch (true) {
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/855/855059.png":
            habatv = 1;
            cool1 = 5;
            atacando();
        break;
        case ichab.src == "https://cdn-icons-png.flaticon.com/512/2851/2851844.png":
            cool2 = 5;
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