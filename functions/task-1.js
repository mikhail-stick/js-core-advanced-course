function findFirstNonRepeatingSymbol(str) {
    const repeatsMap = new Map();

    for (const symbol of str) {
        repeatsMap[symbol] = (repeatsMap[symbol] || 0) + 1;
    }

    for (const symbol of str) {
        if (repeatsMap[symbol] === 1) {
            return symbol;
        }
    }

    return null;
}

console.log(findFirstNonRepeatingSymbol("dfghjkjdf"));