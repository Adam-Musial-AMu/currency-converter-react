import styled from "styled-components";

export const Field = styled.p`
    text-align: end;
    font-family:  "Courier", monospace;
    font-size: small;
    font-stretch: condensed;
    color: ${({ theme }) => theme.color.emperor};
    margin: 0;
`;
