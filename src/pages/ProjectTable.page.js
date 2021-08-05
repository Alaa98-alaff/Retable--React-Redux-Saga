import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getProjData } from "../actions";

function ProjectTablePage() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.projectData.data.data?.data);

  console.log(data);

  useEffect(() => {
    dispatch(getProjData());
  }, []);

  return (
    <div>
      {data && data.map((data, i) => <p key={i}>{data}</p>)}
      <h1>Project Table page</h1>
    </div>
  );
}

export default ProjectTablePage;
