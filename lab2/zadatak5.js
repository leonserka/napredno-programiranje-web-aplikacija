function sljedeciElement(niz) {
    let indeks = 0;

    return function () {
        if (indeks >= niz.length) {
            return undefined;
        }

        const element = niz[indeks];
        indeks++;
        return element + " je " + indeks + "-ti element niza";
    };
}

const sljedeci = sljedeciElement(["Ana", "Ivo", "Eva"]);
console.log(sljedeci());
console.log(sljedeci());
console.log(sljedeci());
