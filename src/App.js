import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zadanie niewykonane", done: false },
  { id: 2, content: "zadanie wykonane", done: true },
];

const hidenDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hidenDoneTasks={hidenDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hidenDoneTasks={hidenDoneTasks} />}
      />
      <Footer />
    </Container>
  );
}

export default App;