import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
    background-color: ${({ theme }) => theme.color.aliceBlue};
    box-shadow: 5px 5px 10px 0px ${({ theme }) => theme.color.axolotl};
    border: 2px solid ${({ theme }) => theme.color.teal};
    border-radius: 20px;
`;
