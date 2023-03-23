import "./style.css";

const Result = ({ result }) => (
        <p className="result">
            {!!result && (
                <>
                    {result.currencyIn.toFixed(2)}&nbsp;PLN&nbsp;=
                    {" "}
                    <strong>{result.currencyOut.toFixed(2)}&nbsp;{result.currency}</strong>
                </>
            )}
        </p>
    );

export default Result;