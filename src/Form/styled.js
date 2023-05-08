import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 30px 0px;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 auto;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid ${({theme}) => theme.color.teal};
    border-radius: 20px;
    padding: 0 auto;
    box-shadow: 2px 2px 4px ${({theme}) => theme.color.axolotl};
    background-color: ${({theme}) => theme.color.aliceBlue};
    margin: 20px;
`;

export const Legend = styled.legend`
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    border-radius: 20px;
    padding: 5px 30px;
`;

export const Data = styled.p`
    padding: 0px 40px;
    color: ${({theme}) => theme.color.white};
    font-weight: 700;
`;

export const Label = styled.label`
    padding: 5px;
`;

export const Text = styled.span`
    max-width: 150px;
    width: 100%;
    display: inline-block;
    margin-right: 5px;
    padding: 5px;
    color: ${({theme}) => theme.color.teal};
    font-weight: 700;
`;

export const Input = styled.input`
    max-width: 200px;
    width: 100%;
    border: 2px solid ${({theme}) => theme.color.teal};
    border-radius: 5px;
    padding: 5px;
    box-sizing: inherit;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    border: ${({theme}) => theme.color.darkGreen} 2px solid;
    border-radius: 20px;
    padding: 10px;
    font-weight: 700;
    width: 100%;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;