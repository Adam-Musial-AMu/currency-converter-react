import { useCurrencyRates } from "../useCurrencyRates";

const CurrencyDate = () => {
    const { date } = useCurrencyRates();

    return (
        <p>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
            <br />
            Aktualne na dzień: {date}.
        </p>
    )
};

export default CurrencyDate;