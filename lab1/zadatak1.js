function vecina(niz, callback) {
    let brojTrue = 0;
    let brojFalse = 0;

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            brojTrue++;
        } else {
            brojFalse++;
        }

        if (brojTrue > niz.length / 2) {
            return true;
        }

        if (brojFalse >= Math.ceil(niz.length / 2)) {
            return false;
        }
    }

    return false;
}

console.log(vecina([1, 2, 3, 4, 6], broj => broj % 2 === 0));
