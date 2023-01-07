import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    border-bottom: #ddd solid 1px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
  font-size:20px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
