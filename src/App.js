import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
    const [result, setResult] = useState(null);

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
