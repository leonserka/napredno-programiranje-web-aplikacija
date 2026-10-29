function numSelectString(niz) {
    return niz
        .filter(broj => broj % 2 !== 0)
        .sort((a, b) => a - b)
        .reduce((tekst, broj, indeks) => tekst + (indeks === 0 ? "" : ", ") + broj, "");
}

console.log(numSelectString([17, 34, 3, 12, 23]));
