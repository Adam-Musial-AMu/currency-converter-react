import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";
import { useCurrencyRates } from "./useCurrencyRates";

function App() {
    const [result, setResult] = useState(null);
    const { currencyOptions, date, currencyData, loading, error } = useCurrencyRates();


    const calculateResult = (amount, currency) => {

        setResult(
            {
                currencyIn: +amount,
                currencyOut: amount * currency.rate,
                currency: currency.symbol
            }
        );
    };

    return (
        <>
            <Header />
            <Form
                calculateResult={calculateResult}
                result={result}
                legendText="Wpisz kwotę i walutę"
                buttonText="Przelicz!"
                currencyOptions={currencyOptions}
                date={date}
                currencyData={currencyData}
                loading={loading}
                error={error}
            />
            <Footer />
        </>
    )
};

export default App;