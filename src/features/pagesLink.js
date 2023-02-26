import { Redirect, Route, Switch } from "react-router-dom"
import Author from "./authorPages";
import TasksPages from "./TasksPages";
import TaskPages from "./TasksPages/Tasks/TaskPages"

const PagesLink = () => {
  return (
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
  )
}

export default PagesLink;