import "./style.css";

const Input = () => {
    return (
        <p className="input">
            <label className="input__label">
                <span className="input__labelText">
                    Kwota w PLN*
                </span>
                <input className="input__field" name="amountPln" type="number" min="1" max="1000000"
                    value="100" required />
                <span className="input__unit">
                    PLN
                </span>
            </label>
        </p>
    )
};

export default Input;