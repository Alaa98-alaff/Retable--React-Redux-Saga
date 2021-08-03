import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage.page";
import ProjectTablePage from "./pages/ProjectTable.page";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/project-table">
          <ProjectTablePage></ProjectTablePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
