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
                    <p className="form__input">
                        <label className="form__inputLabel">
                            <span className="form__inputLabelText">
                                Kwota w PLN*
                            </span>
                            <input
                                className="form__inputField"
                                name="amountPln"
                                type="number"
                                min="1"
                                placeholder="Wpisz kwotę w PLN"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                required />
                            <span className="form__inputUnit">
                                PLN
                            </span>
                        </label>
                    </p>
                    <p className="form__select">
                        <label className="form__selectLabel">
                            <span className="form__selectLabelText">
                                Waluta*
                            </span>
                            <select
                                className="form__selectField"
                                onChange={({ target }) => setCurrency(target.value)}>
                                {currencies.map(currency =>
                                    <option className="form__selectOption" key={currency.id}>
                                        {currency.name}
                                    </option>)}
                            </select>
                        </label>
                    </p>
                    <p>
                        <button type="submit" className="form__button">
                            {buttonText}
                        </button>
                    </p>
                    <Result />
                </fieldset>
            </form>
        </main>
    )
};

export default Form;