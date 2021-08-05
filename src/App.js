import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage.page";
import ProjectTablePage from "./pages/ProjectTable.page";

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
