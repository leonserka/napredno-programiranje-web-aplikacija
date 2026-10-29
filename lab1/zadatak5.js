function pipe(funkcije, vrijednost) {
    let rezultat = vrijednost;

    for (const funkcija of funkcije) {
        rezultat = funkcija(rezultat);
    }

    return rezultat;
}

console.log(pipe([broj => broj + 2, broj => broj * 3, broj => broj - 1], 5));
