import { StyledCurrencySelect } from './styled';

const CurrencySelect = ({ currencyOptions, currencyData, setCurrency }) => {
  if (!currencyOptions || currencyOptions.length === 0) {
    return <p>Chwileczkę... ładujemy...</p>;
  }

  const handleChangeCurrency = (event) => {
    const selectedCurrency = event.target.value;
    const currencyRate = currencyData.rates[selectedCurrency];
    setCurrency({ symbol: selectedCurrency, rate: currencyRate });
  };

  return (
    <StyledCurrencySelect onChange={handleChangeCurrency}>
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </StyledCurrencySelect>
  );
}




export default CurrencySelect;