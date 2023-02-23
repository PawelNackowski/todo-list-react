import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 25px;
    text-align: center;
    font-size: 15px;
`;

export const Container = styled.main`
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    margin: 20px;
    text-decoration: none;
    
    &.active{
        font-weight: bold;
        font-size: 25px;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 20px;
    margin: 0;
    background-color: ${({theme} )=> theme.color.teal};
`