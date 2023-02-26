import "./style.css";


const Select = ({ currencies }) => {
return (
    <select className="form__field">
        {currencies.map(currency =>
            <option className="form__option" key={currency.id}>
                {currency.name}
            </option>)}
    </select>
)
    
};

export default Select;