import { call, put, takeLatest } from "redux-saga/effects";
import fetchProjData from "../requests/fetchProjData";

// Generator fun
function* handleGetData() {
  try {
    const response = yield call(fetchProjData);

    const hiddenColumns = [];

    const columns = response.info.columns
      .filter((col, key) => {
        const hidden = col.type === "hidden";
        if (hidden) {
          hiddenColumns.push(key);
        }
        return !hidden;
      })
      .map((col) => col.title);

    const data = response.data.map((row) =>
      row
        .filter((_col, key) => hiddenColumns.indexOf(key) < 0)
        .map((col) => ({ value: col }))
    );

    yield put({ type: "GET_DATA_SUCCESS", data: { columns, data } });
  } catch (err) {
    yield put({ type: "GET_DATA_FAILED", message: err.message });
  }
}

function* watcherDataSaga() {
  yield takeLatest("GET_DATA_REQUESTED", handleGetData);
}

export default watcherDataSaga;
