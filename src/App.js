import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage.page";
import ProjectTablePage from "./pages/ProjectTable.page";
import { getProjData } from "./actions";

function App() {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.projectData.data);

  useEffect(() => {
    dispatch(getProjData());
  }, []);

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
