function prioritiziraj(niz, callback) {
    const prvi = [];
    const drugi = [];

    for (const element of niz) {
        if (callback(element)) {
            prvi.push(element);
        } else {
            drugi.push(element);
        }
    }

    drugi.unshift(...prvi);
    return drugi;
}

console.log(prioritiziraj([1, 2, 3, 4, 5], broj => broj % 2 === 0));
