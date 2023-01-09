import styled, { css } from "styled-components";

  export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
  `;

  export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: solid 1px #ddd; 
    padding: 10px;

    ${({ hiden }) => hiden && css`
    display: none;
    `}
  `;

  export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
  `;

  export const Button = styled.button`
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    color: white;
    padding: 0;
    border: none;

    ${({ toggleDone }) => toggleDone && css`
      background-color: green;
      transition: 0.5s;
      
      &:hover{
        background-color: hsl(120, 100%, 30%);
      };
        
      &:active{
        background-color: hsl(120, 100%, 40%);
      `};

    ${({ remove }) => remove && css`
      background-color: red;
      transition: 0.5s;

      &:hover{
        background-color: hsl(0, 100%, 60%);
      };

      &:active{
        background-color: hsl(0, 100%, 70%);
      };
    `}
  `;