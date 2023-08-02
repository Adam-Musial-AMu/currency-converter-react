import { useState, useEffect } from "react";
import { downloadTime } from "./downloadTime";
import { fetchData } from "./api";

export const useCurrencyRates = (url) => {
    const [currencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const data = await fetchData(url);
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
        }, (downloadTime));

        return () => clearTimeout(timer);
    }, [url]);

    const currencyOptions = currencyData ? Object.keys(currencyData.rates) : [];

    return { currencyData, currencyOptions, loading, error, date };


}