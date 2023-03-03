import "./style.css";


const Select = ({ currencies }) => {
    return (
        <p className="form__paragraph">
            <label className="form__label">
                <span className="form__labelText">
                    Waluta*
                </span>
                <select className="form__field">
                    {currencies.map(currency =>
                        <option className="form__option" key={currency.id}>
                            {currency.name}
                        </option>)}
                </select>
            </label>
        </p>
    )

};

export default Select;