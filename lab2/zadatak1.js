function kreirajAfter(broj, callback) {
    let pozivi = 0;

    return function after(...argumenti) {
        pozivi++;
        if (pozivi >= broj) {
            return callback(...argumenti);
        }
    };
}

const after = kreirajAfter(3, () => console.log("Callback je izvrsen"));
after();
after();
after();
