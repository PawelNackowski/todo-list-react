import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    
    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
`;

export const Button = styled.button`
    background-color: teal;
    cursor: pointer;  
    color: white;
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform:scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;