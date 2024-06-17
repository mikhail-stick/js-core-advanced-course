function accessUndefinedVariable() {
    try {
        console.log(a);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Переменная не определена.");
        } else {
            console.log("Другая ошибка:", error);
        }
    }
}

accessUndefinedVariable();