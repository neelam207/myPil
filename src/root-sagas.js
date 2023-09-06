import { all, fork } from "redux-saga/effects";
import { watchsignInUser } from "../app/module/login/saga";

const rootSaga = function* () {
  yield all([
    fork(watchsignInUser),
    // Other forks
  ]);
};

export default rootSaga;