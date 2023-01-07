import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: teal;
    border: none;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    margin-left: 20px;

@media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
}

&:hover{
    color: hsl(180, 100%, 40%);
}

&:disabled{
    color: rgb(199, 199, 199);
}
`;