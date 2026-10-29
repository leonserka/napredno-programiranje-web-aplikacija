const fakePeople = [
    { name: "Ivo", hasPets: false },
    { name: "Eva", hasPets: true },
    { name: "Marko", hasPets: true }
];

function fakeAPICall(i) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(i) || i < 1 || i > 3) {
            reject(new Error("Osoba ne postoji"));
            return;
        }

        const vrijeme = Math.floor(Math.random() * 2001) + 1000;
        setTimeout(() => resolve(fakePeople[i - 1]), vrijeme);
    });
}

function getAllData() {
    return Promise.all([fakeAPICall(1), fakeAPICall(2), fakeAPICall(3)]);
}

getAllData().then(podaci => console.log(podaci)).catch(greska => console.log(greska.message));
