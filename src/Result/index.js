import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {!!result && (
            <>
                {result.currencyIn.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>{result.currencyOut.toFixed(2)}&nbsp;{result.currency}</strong>
            </>
        )}
    </StyledResult>
);

export default Result;