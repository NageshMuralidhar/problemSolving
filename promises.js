// let promisetoclean = new Promise(function (resolve, reject) {
//     let clean = true;
//     // if (clean) {
//     //     resolve('is clean');
//     // }
//     // else {
//     //     reject('is not clean');
//     // }
//     (clean) ? resolve('is clean') : reject('is not clean');
// });

// promisetoclean.then(function (fromResolve) {
//     console.log('This room ' + fromResolve)
// }).catch(function (fromReject) {
//     console.log('This room ', fromReject)
// })

let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Room was cleaned');
    })
};

let removeGarbage = function () {
    return new Promise(function (resolve, reject) {
        resolve('Garbage was cleaned');
    })
};

let winIceCream = function () {
    return new Promise(function (resolve, reject) {
        resolve('Won ice cream')
    })
}

Promise.all([cleanRoom(), winIceCream(), removeGarbage()]).then(function (fromResolve) {
    console.log('FInished' + fromResolve)
})