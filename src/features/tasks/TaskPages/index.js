import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Container, Footer } from "../../../styled";
import { getTaskById } from "../tasksSlice";

const TaskPages = () => {
  const { id } = useParams();
const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
        }
      />
      <Footer>
        Ⓒ Lista zadań stworzona przez Paweł Nackowski (ver. 1.1.0)
      </Footer>
    </Container>
  )
}

export default TaskPages;