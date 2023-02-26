import { HashRouter } from "react-router-dom";
import PagesLink from "./features/pagesLink";
import Navigation from "./features/TasksPages/Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <PagesLink />
  </HashRouter>
)

export default App;