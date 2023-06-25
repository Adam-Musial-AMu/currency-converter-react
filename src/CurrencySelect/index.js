import { useCurrencyRates } from '../useCurrencyRates';

const CurrencySelect = ({setCurrency}) => {
    const { currencyOptions, loading, error } = useCurrencyRates();

    if (loading) {
        return <p>Chwileczkę... ładujemy...</p>;
    }

    if (error) {
        return <p>Coś poszło nie tak...</p>;
    }


    return (
        
            <select>
                {currencyOptions.map((currency) => (
                    <option 
                    key={currency} 
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}>
                        {currency}
                    </option>
                ))}
            </select>
        
    );
};

export default CurrencySelect;
