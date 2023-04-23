import { Recalculation } from "./styled";

const Result = ({ result }) => (
    <Recalculation>
        {!!result && (
            <>
                {result.currencyIn.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>{result.currencyOut.toFixed(2)}&nbsp;{result.currency}</strong>
            </>
        )}
    </Recalculation>
);

export default Result;