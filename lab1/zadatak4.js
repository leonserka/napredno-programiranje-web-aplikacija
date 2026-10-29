function komutativnost(prva, druga, vrijednost) {
    return druga(prva(vrijednost)) === prva(druga(vrijednost));
}

console.log(komutativnost(broj => broj + 2, broj => broj + 3, 5));
console.log(komutativnost(broj => broj + 2, broj => broj * 3, 5));
