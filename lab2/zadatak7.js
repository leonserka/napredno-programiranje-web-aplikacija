function blackJack(niz) {
    let indeks = 0;

    return function dealer(prvi, drugi) {
        let suma = prvi + drugi;
        let prviPoziv = true;
        let zavrseno = false;

        return function player() {
            if (zavrseno) {
                return "You are done!";
            }

            if (prviPoziv) {
                prviPoziv = false;
                return suma;
            }

            if (indeks < niz.length) {
                suma += niz[indeks++];
            }

            if (suma > 21) {
                zavrseno = true;
                return "bust!";
            }

            return suma;
        };
    };
}

const dealer = blackJack([2, 5, 8, 1]);
const player = dealer(5, 6);
console.log(player());
console.log(player());
console.log(player());
console.log(player());
console.log(player());
