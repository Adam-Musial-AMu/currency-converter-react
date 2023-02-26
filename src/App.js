import Result from "./Result";
import Header from "./Header";
import Footer from "./Footer";
import Select from "./Select";

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
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                Wpisz kwotę i wybierz walutę
            </legend>
            <p className="form__paragraph">
                <label className="form__label">
                    <span className="form__labelText">
                        Kwota w PLN*
                    </span>
                    <input className="form__field" name="amountPln" type="number" min="1" max="1000000"
                        value="100" required />
                    <span className="form__unit">
                        PLN
                    </span>
                </label>
            </p>
            <p className="form__paragraph">
                <label className="form__label">
                    <span className="form__labelText">
                        Waluta*
                    </span>
                    <Select currencies={currencies}/>
                    <span className="form__unit">
                        mm
                    </span>
                </label>
            </p>
        </fieldset>
        <p>
            <button type="submit" className="form__button form__button--submit">Przelicz !</button>
        </p>
    </form>
          <Result />
        </div>
      </main>
      <Footer finalText="Dziękuję za skorzystanie z mojego kalkulatora !"/>
    </body>
  );
}

export default App;
