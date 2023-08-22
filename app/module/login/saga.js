import { call , put } from 'redux-saga/ellefts'
import request from '../../webserviceRequest/requestAxios'

export function * loginRequest (action) {
    try {
        const response = yield call (request, data);
        // for storing the data to redux - yield put (reducerAction)
    }
    catch {
        // Error handler 
    }
}
