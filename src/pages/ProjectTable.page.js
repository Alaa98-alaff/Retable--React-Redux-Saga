import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spreadsheet from "react-spreadsheet";

import { getProjData } from "../actions";

function ProjectTablePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.projectData.data.data?.data);

  let tableData = [];

  for (let i = 0; i < data?.length; i++) {
    tableData.push([{ value: data[i][3] }, { value: data[i][4] }]);
  }

  useEffect(() => {
    dispatch(getProjData());
  }, []);

  return (
    <div>
      <h1>Project Table page</h1>
      {data && <Spreadsheet data={tableData} />}
    </div>
  );
}

export default ProjectTablePage;
