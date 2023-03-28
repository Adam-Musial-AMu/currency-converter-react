import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState, useEffect } from "react";
import { currencies } from "./currencies";

function App() {
    const [result, setResult] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(IntervalId);
    }, []);

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ symbol }) => symbol === currency).rate

        setResult(
            {
                currencyIn: +amount,
                currencyOut: amount / rate,
                currency,
            }
        )
    }

    return (
        <>
            <Header />
            <Form
                currentDate={currentDate}
                calculateResult={calculateResult}
                result={result}
                legendText="Wpisz kwotę i walutę"
                buttonText="Przelicz!"
            />
            <Footer />
        </>
    )
};

export default App;
