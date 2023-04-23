import Result from "../Result";
import Time from "../Time";
import { currencies } from "../currencies";
import { Area, Fieldset, Legend, Data, Label, Text, Input, Button } from "./styled";
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
            <Area
                onSubmit={onFormSubmit}>
                <Fieldset>
                    <Legend>
                        {legendText}
                    </Legend>
                    <Time />
                    <Data>
                        <Label>
                            <Text>
                                Kwota w PLN*
                            </Text>
                            <Input
                                name="amountPln"
                                type="number"
                                min="1"
                                placeholder="Wpisz kwotę w PLN"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                required />
                        </Label>
                    </Data>
                    <Data>
                        <Label>
                            <Text>
                                Waluta*
                            </Text>
                            <Input as="select"
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}>
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.symbol}
                                        value={currency.symbol}>
                                        {currency.name}
                                    </option>
                                ))}
                            </Input>
                        </Label>
                    </Data>
                    <p>
                        <Button>
                            {buttonText}
                        </Button>
                    </p>
                    <Result result={result} />
                </Fieldset>
            </Area>
        </main>
    )
};

export default Form;