import styled from "styled-components";

export const StyledCurrencySelect = styled.select`
    max-width: 200px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.color.teal};
    border-radius: 5px;
    padding: 5px;
    box-sizing: inherit;
`;