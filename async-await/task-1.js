async function fetchAndProcessData() {
    try {
        return await fetch('https://google.com/');
    } catch (error) {
        return `Ошибка: ${error.message}`;
    }
}

async function main() {
    const data = await fetchAndProcessData();

    console.log(data);
}

main()
