function grupiraj(niz, callback) {
    const grupe = {};

    for (const element of niz) {
        const kljuc = callback(element);

        if (!Object.prototype.hasOwnProperty.call(grupe, kljuc)) {
            Object.defineProperty(grupe, kljuc, {
                value: [],
                enumerable: true,
                configurable: true,
                writable: true
            });
        }

        grupe[kljuc].push(element);
    }

    return grupe;
}

console.log(grupiraj([1, 2, 3, 4, 5], broj => broj % 2 === 0));
