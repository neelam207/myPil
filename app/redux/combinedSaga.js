import {takeLatest } from 'redux-saga/effects'

import { loginRequest } from './modules/login/saga'

export function * sagaListener (){
    yield takeLatest ("LOGIN_ATTEMPT", loginRequest)
}
