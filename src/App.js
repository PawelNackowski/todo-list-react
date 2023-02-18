import { Link, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import Author from "./features/author/Author";
import Tasks from './features/tasks/Tasks';

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
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)

export default App;