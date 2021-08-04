import { call, put, takeLatest } from "redux-saga/effects";
import fetchProjData from "../requests/fetchProjData";

// Generator fun
function* handleGetData() {
  try {
    const data = yield call(fetchProjData);
    yield put({ type: "GET_DATA_SUCCESS", data: data });
  } catch (err) {
    yield put({ type: "GET_DATA_FAILED", message: err.message });
  }
}

function* watcherDataSaga() {
  yield takeLatest("GET_DATA_REQUESTED", handleGetData);
}

export default watcherDataSaga;
