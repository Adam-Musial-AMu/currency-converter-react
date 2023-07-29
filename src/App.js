import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useCurrencyRates } from "./useCurrencyRates";

function App() {
    const [result, setResult] = useState(null);
    const [isLoadingOrError, setIsLoadingOrError] = useState(false);

    const { currencyOptions, date, currencyData, loading, error } = useCurrencyRates();

    useEffect(() => {
        if (loading || error) {
          setIsLoadingOrError(true);
          const timer = setTimeout(() => {
            setIsLoadingOrError(false);
          }, 10000);
      
          return () => clearTimeout(timer);
        }
      }, [loading, error]);

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
                isLoadingOrError={isLoadingOrError}
            />
            <Footer />
        </>
    )
};

export default App;