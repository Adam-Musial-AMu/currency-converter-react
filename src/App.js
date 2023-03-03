import Result from "./Result";
import Header from "./Header";
import Footer from "./Footer";
import Select from "./Select";
import Input from "./Input";
import Fieldset from "./Fieldset";
import Button from "./Button";

function App() {

    const currencies =
        [
            { id: 1, name: "Dolar amerykański", symbol: "USD", rate: 4.47 },
            { id: 2, name: "Funt brytyjski", symbol: "GBP", rate: 5.34 },
            { id: 3, name: "Euro", symbol: "EUR", rate: 4.72 },
        ];

    return (
        <body className="body">
            <Header title="Przelicznik walut" />
            <main>
                <div className="container">
                    <form className="form">
                        <Fieldset
                            title="Wpisz kwotę i walutę"
                            input={<Input />}
                            select={<Select currencies={currencies} />}
                        />
                        <Button buttonText="Przelicz !"/>
                    </form>
                    <Result />
                </div>
            </main>
            <Footer finalText="Dziękuję za skorzystanie z mojego kalkulatora !" />
        </body>
    );
}

export default App;
