import Form from "../TasksPages/Form";
import Buttons from "../TasksPages/Buttons";
import TaskList from "../TasksPages/TaskList";
import { Container, Footer } from "../../styled";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Search from "./Search";

function TasksPages() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />

      <Footer>
        Ⓒ Lista zadań stworzona przez Paweł Nackowski (ver. 1.1.0)
      </Footer>
    </Container>
  );
}

export default TasksPages;