
const CurrencyDate = ({ date }) => {
    console.log(date);

    return (
        <p>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
            <br />
            Aktualne na dzień: {date}.
        </p>
    )
};

export default CurrencyDate;