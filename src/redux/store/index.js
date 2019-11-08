import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import root from "../reducers";
import helloSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    root,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga)

export default store;
