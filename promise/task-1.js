function getNumber() {
    return Promise.resolve(3);
}

function square(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num ** 2);
        }, 3000);
    });
}

function squareAgain(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num ** 2);
        }, 3000);
    });
}

getNumber().then(square).then(squareAgain).then(console.log)