import { useState, useEffect } from "react";

export const useCurrencyRates = () => {
    const [currencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
                const data = await response.json();
                setCurrencyData(data);
                setDate(data.date);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        const timer = setTimeout(() => {
            fetchCurrencyRates();
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    const currencyOptions = currencyData ? Object.keys(currencyData.rates) : [];

    return { currencyData, currencyOptions, loading, error, date };


}