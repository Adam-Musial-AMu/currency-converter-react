import Result from "../Result";
import { currencies } from "../currencies";
import "./style.css";
import { useState } from "react";

const Form = ({ calculateResult, result, legendText, buttonText }) => {
    const [currency, setCurrency] = useState(currencies[0].symbol);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <main>
            <form
                className="form"
                onSubmit={onFormSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">
                        {legendText}
                    </legend>
                    <p className="form__data">
                        <label className="form__label">
                            <span className="form__labelText">
                                Kwota w PLN*
                            </span>
                            <input
                                className="form__field"
                                name="amountPln"
                                type="number"
                                min="1"
                                placeholder="Wpisz kwotę w PLN"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                required />
                        </label>
                    </p>
                    <p className="form__data">
                        <label className="form__label">
                            <span className="form__labelText">
                                Waluta*
                            </span>
                            <select
                                className="form__field"
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}>
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.symbol}
                                        value={currency.symbol}>
                                        {currency.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </p>
                    <p>
                        <button type="submit" className="form__button">
                            {buttonText}
                        </button>
                    </p>
                    <Result result={result} />
                </fieldset>
            </form>
        </main>
    )
};

export default Form;