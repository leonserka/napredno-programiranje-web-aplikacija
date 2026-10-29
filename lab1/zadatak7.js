function filter(niz, callback) {
    const rezultat = [];

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i], i, niz)) {
            rezultat.push(niz[i]);
        }
    }

    return rezultat;
}

console.log(filter([1, 2, 3, 4, 5], broj => broj % 2 === 0));
