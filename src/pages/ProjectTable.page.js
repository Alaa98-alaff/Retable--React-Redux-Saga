import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spreadsheet from "react-spreadsheet";

import NavbarProjects from "../components/Navbar Projects/NavbarProjects.component";
import SpinnerComponent from "../components/Spinner/Spinner.component";
import { getProjData } from "../actions";

function ProjectTablePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.projectData.data.data);
  const columns = useSelector((state) => state.projectData.data.columns);
  const loading = useSelector((state) => state.projectData.loading);
  const error = useSelector((state) => state.projectData.error);

  useEffect(() => {
    dispatch(getProjData());
  }, [dispatch]);

  return (
    <div>
      <NavbarProjects />
      <div className="scrollable_container">
        {loading && <SpinnerComponent />}
        {error && !loading && <h2>{error}</h2>}
        {data && <Spreadsheet data={data} columnLabels={columns} />}
      </div>
    </div>
  );
}

export default ProjectTablePage;
