import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spreadsheet from "react-spreadsheet";

import { getProjData } from "../actions";

function ProjectTablePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.projectData.data.data?.data);
  const loading = useSelector((state) => state.projectData.loading);
  const error = useSelector((state) => state.projectData.error);

  let tableData = [];

  const dataHandler = () => {
    for (let i = 0; i < data?.length; i++) {
      tableData.push([
        { value: data[i][3] },
        { value: data[i][4] },
        { value: data[i][5] },
        { value: data[i][6] },
      ]);
    }
  };

  dataHandler();

  useEffect(() => {
    dispatch(getProjData());
  }, []);

  return (
    <div>
      <h1>Project Table page</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {data && <Spreadsheet data={tableData} />}
    </div>
  );
}

export default ProjectTablePage;
