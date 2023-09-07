import { all, fork } from "redux-saga/effects";
import { watchsignInUser } from "../module/login/saga";

const rootSaga = function* () {
  yield all([
    fork(watchsignInUser),
    // Other forks
  ]);
};

export default rootSaga;