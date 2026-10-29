const promise = new Promise(resolve => {
    setTimeout(() => resolve("Resolved"), 1000);
});

promise.then(rezultat => console.log(rezultat));
