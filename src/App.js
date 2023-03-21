import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
    const [result, setResult] = useState();

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
        <body className="body">
            <Header title="Przelicznik walut" />
            <Form
                calculateResult={calculateResult}
                result={result}
                legendText="Wpisz kwotę i walutę"
                buttonText="Przelicz!"
            />
            <Footer finalText="Dziękuję za skorzystanie z mojego kalkulatora !" />
        </body>
    )
};

export default App;
