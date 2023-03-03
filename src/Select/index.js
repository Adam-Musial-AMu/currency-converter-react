import "./style.css";


const Select = ({ currencies }) => {
    return (
        <p className="select">
            <label className="select__label">
                <span className="select__labelText">
                    Waluta*
                </span>
                <select className="select__field">
                    {currencies.map(currency =>
                        <option className="select__option" key={currency.id}>
                            {currency.name}
                        </option>)}
                </select>
            </label>
        </p>
    )
};

export default Select;