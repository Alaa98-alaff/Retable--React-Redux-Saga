import { all } from "redux-saga/effects";
import watcherDataSaga from "./handlers/fetchProjData";

function* rootSaga() {
  yield all([watcherDataSaga()]);
}

export default rootSaga;
