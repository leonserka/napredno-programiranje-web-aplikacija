function sumaElemenata(niz) {
    let suma = 0;

    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }

    return suma;
}

console.log(sumaElemenata([1, 2, 3, 4, 5]));
