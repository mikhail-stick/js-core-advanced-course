'use strict';

function getWords(str) {
    return str.replace(/[.,!*;:`]/g, "").split(" ");
}

console.log(getWords("Всем привет. Сегодня очень классный день!"));