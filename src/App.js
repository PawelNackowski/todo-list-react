import { useState } from "react"
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useTasks } from "./useTasks";
import { Footer, Container } from "./styled";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hidenDone => !hidenDone);
  };

  const {
    tasks,
    addNewTask,
    setAllDone,
    toggleTaskDone,
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
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />
      <Footer>
        Ⓒ Lista zadań stworzona przez Paweł Nackowski (ver. 1.1.0)
      </Footer>
    </Container>
  );
}

export default App;