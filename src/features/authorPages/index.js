import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container, Footer } from "../../styled";



const Author = () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Paweł Nackkowski"
      body={
      <>
      Moją pasją jest fotografia, której poświecam najwięcej czasu. 
      </>
      }
    />
    <Footer>
      Ⓒ Lista zadań stworzona przez Paweł Nackowski (ver. 1.1.0)
    </Footer>
  </Container>
);

export default Author;