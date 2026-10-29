function reduce(niz, callback, akumulator) {
    for (let i = 0; i < niz.length; i++) {
        akumulator = callback(akumulator, niz[i], i, niz);
    }

    return akumulator;
}

console.log(reduce([1, 2, 3, 4, 5], (acc, elem) => acc + elem, 0));
