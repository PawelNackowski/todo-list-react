import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Author from "./features/authorPages";
import TasksPages from "./features/TasksPages";
import TaskPages from "./features/TasksPages/Tasks/TaskPages";

import { StyledList, StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <StyledList>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </StyledList>
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