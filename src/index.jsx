import "bootstrap";
import "babel-polyfill";
import React from "react";
import ReactDOM, {render} from "react-dom";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import formsSaga from "./sagas/usersForm";
import reducer from "./reducers";
import App from "./containers/App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(formsSaga);


store.dispatch({type: 'GET_DATA', payload: null});
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
