import "./style.css";
import { useState } from "react";

const Input = () => {

    const [newAmount, setNewAmount] = useState("100");

    return (
        <p className="input">
            <label className="input__label">
                <span className="input__labelText">
                    Kwota w PLN*
                </span>
                <input
                    className="input__field"
                    name="amountPln"
                    type="number"
                    min="1" 
                    value={newAmount}
                    onChange={(event) => setNewAmount(event.target.value)}
                    required />
                <span className="input__unit">
                    PLN
                </span>
            </label>
        </p>
    )
};

export default Input;