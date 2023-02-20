import { Link, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPages from "./features/TasksPages";
import TaskPages from "./features/tasks/TaskPages";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPages />
        </Route> 
        <Route path="/zadania">
          <TasksPages />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route exact path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)

export default App;