import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { Footer, Container } from "../../styled";
import TaskList from "./TaskList";

function Tasks() {

  const {
    addNewTask,
    setAllDone,
    removeTask
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />}
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />}
      />
      <Footer>
        Ⓒ Lista zadań stworzona przez Paweł Nackowski (ver. 1.1.0)
      </Footer>
    </Container>
  );
}

export default Tasks;