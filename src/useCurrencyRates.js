import { useState, useEffect } from "react";

export const useCurrencyRates = () => {
    const [currencyRates, setCurrencyRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
                const data = await response.json();
                setCurrencyRates(data.rates);
                setDate(data.date);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCurrencyRates();

    }, []);

    const currencyOptions = currencyRates ? Object.keys(currencyRates) : [];

    return { currencyRates, currencyOptions, loading, error, date };


}