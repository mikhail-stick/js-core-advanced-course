async function fetchAndProcessData() {
    try {
        const response = await fetch('https://google.com/');
        return await response;
    } catch (error) {
        return `Ошибка: ${error.message}`;
    }
}

async function main() {
    const data = await fetchAndProcessData();

    console.log(data);
}

main()
