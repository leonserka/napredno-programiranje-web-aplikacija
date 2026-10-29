function russianRoulette(n) {
    let pozivi = 0;

    return function () {
        pozivi++;
        if (pozivi < n) {
            return "click!";
        }
        if (pozivi === n) {
            return "bang";
        }
        return "reload to play again";
    };
}

const igra = russianRoulette(3);
console.log(igra());
console.log(igra());
console.log(igra());
console.log(igra());
