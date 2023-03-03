

const Input = () => {
    return (
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
    )
};

export default Input;