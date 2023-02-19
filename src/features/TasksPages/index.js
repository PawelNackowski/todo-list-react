import Form from "./Form";
import Buttons from "./Buttons";
import { Footer, Container } from "../../styled";
import TaskList from "./TaskList";
import Header from "../../common/Header";
import Section from "../../common/Section";

function TasksPages() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
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