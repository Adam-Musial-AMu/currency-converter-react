import { useState } from "react";
import CurrencyDate from "../CurrencyDate";
import CurrencySelect from "../CurrencySelect";
import Result from "../Result";
import Time from "../Time";
import { StyledForm, Fieldset, Legend, Data, Label, Text, Input, Button, Message } from "./styled";

const Form = ({ calculateResult, result, legendText, buttonText, date, loading, error, currencyData, currencyOptions }) => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  if (loading) {
    return (
      <Message>
        <Time />
        <p>Chwileczkę... ładujemy... Za chwilę pobrane zostaną aktualne kursy walut z Europejskiego Banku Centralnego 😀</p>
      </Message>)
  }

  if (error) {
    return (
      <Message isError>
        <Time />
        <p>Coś poszło nie tak... 🤔 spróbuj później... ⏰ ewentualnie sprawdź czy masz połączenie z Internetem... 🌐</p>
      </Message>)
  }

  if (!currencyData) {
    return (
      <Message isError>
        <Time />
        <p>Nie można pobrać aktualnych danych o kursach walut... 😞 to nie nasza wina... ❗</p>
      </Message>
    );
  }
  


  return (
    <main>
      <StyledForm onSubmit={onFormSubmit}>
        <Fieldset>
          <Legend>{legendText}</Legend>
          <Time />
          <Data>
            <Label>
              <Text>Kwota w PLN*</Text>
              <Input
                name="amountPln"
                type="number"
                min="1"
                placeholder="Wpisz kwotę w PLN"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
              />
            </Label>
          </Data>
          <Data>
            <Label>
              <Text>Waluta*</Text>
              <CurrencySelect currencyOptions={currencyOptions} currencyData={currencyData} setCurrency={setCurrency} />
            </Label>
          </Data>
          <div>
            <Button>{buttonText}</Button>
          </div>
          <CurrencyDate date={date} />
          <Result result={result} />
        </Fieldset>
      </StyledForm>
    </main>
  );
};

export default Form;