import { Date } from "./styled";

const CurrencyDate = ({ date }) => {
    console.log(date);

    return (
        <Date>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
            <br />
            Aktualne na dzień: {date}.
        </Date>
    )
};

export default CurrencyDate;