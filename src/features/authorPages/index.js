import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../styled";



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
    <Footer />
  </Container>
);

export default Author;