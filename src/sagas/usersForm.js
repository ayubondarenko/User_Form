/**
 * Created by alexander on 22.01.18.
 */
import axios from "axios";
import {delay} from "redux-saga";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";

//

function* searchProfessions(action) {
    try {
        let data = yield action.payload ?
            call(axios.get, 'Professions?name_like=^' + action.payload) : {};
        yield delay(action.payload ? 500 : 0); // todo for emulating respond delay

        yield put({type: "SEARCH_PROFESSION_SUCCESS", payload: data.data});
    } catch
        (e) {
        yield put({type: "SEARCH_PROFESSION_FAILED", message: e.message});
    }
}
function* professionSearchSaga() {
    yield takeLatest('SEARCH_PROFESSION_DATA', searchProfessions);
}


function* getData(action) {
    try {
        let data = yield  call(axios.get, 'Countries') ;
        yield delay(500 ); // todo for emulating respond delay

        yield put({type: "GET_COUNTRIES_SUCCESS", payload: data.data});
    } catch
        (e) {
        yield put({type: "GET_COUNTRIES_FAILED", message: e.message});
    }
}
function* dataGetSaga() {
    yield takeLatest('GET_DATA', getData);
}


export default function* rootUFormSaga() {
    yield all([
        fork(professionSearchSaga),
        fork(dataGetSaga)
    ])
}