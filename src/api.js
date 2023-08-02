export const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error("Błąd pobierania danych z serwera");
    }

}