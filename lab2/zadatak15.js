const promise = new Promise((resolve, reject) => {
    reject("Error");
});

promise.catch(greska => console.log(greska));
