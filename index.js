let nome = "Angelo";
let xp = 10001; 

let niveis = [
    {nivel: "Ferro", maxXP: 1000},
    {nivel: "Bronze", maxXP: 2000},
    {nivel: "Prata", maxXP: 5000},
    {nivel: "Ouro", maxXP: 7000},
    {nivel: "Platina", maxXP: 8000},
    {nivel: "Ascendente", maxXP: 9000},
    {nivel: "Imortal", maxXP: 10000},
    {nivel: "Radiante", maxXP: Infinity}
];

let nivel;
for (let i = 0; i < niveis.length; i++) {
    if (xp <= niveis[i].maxXP) {
        nivel = niveis[i].nivel;
        break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
