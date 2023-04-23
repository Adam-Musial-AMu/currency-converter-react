import styled from "styled-components";

export const Area = styled.form`
    margin: 30px 0px;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 auto;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid teal;
    border-radius: 20px;
    padding: 0 auto;
    box-shadow: 2px 2px 4px hsl(120, 22%, 35%);
    background-color: aliceblue;
    margin: 20px;
`;

export const Legend = styled.legend`
    background-color: teal;
    color: white;
    border-radius: 20px;
    padding: 5px 30px;
`;

export const Data = styled.p`
    padding: 0px 40px;
    color: white;
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
    color: teal;
    font-weight: 700;
`;

export const Input = styled.input`
    max-width: 200px;
    width: 100%;
    border: 2px solid teal;
    border-radius: 5px;
    padding: 5px;
    box-sizing: inherit;
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    border: darkgreen 2px solid;
    border-radius: 20px;
    padding: 10px;
    font-weight: 700;
    width: 100%;

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;