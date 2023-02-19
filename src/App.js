import { Link, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from './features/TasksPages';

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
        <Route exact path="/zadania">
          <Tasks />
        </Route>
        <Route exact path="/autor">
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