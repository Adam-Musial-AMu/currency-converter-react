import styled from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: ${({theme}) => theme.color.teal};
    background-color: ${({theme}) => theme.color.aliceBlue};
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 5px 5px 10px 0px ${({theme}) => theme.color.axolotl};
    border: 2px solid ${({theme}) => theme.color.teal};
`;

export const Paragraph = styled.p`
    margin: 0 auto;
`;