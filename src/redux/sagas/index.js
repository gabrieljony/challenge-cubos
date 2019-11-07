import { all } from "redux-saga/effects";
import { put, takeLatest, call, delay } from 'redux-saga/effects'
import api from "../../services/api";
import { movies, genres } from "../../services/api";

const Types = {
    HANDLE_SEARCH: "HANDLE_SEARCH",
    REQUEST_DATA_API: "REQUEST_DATA_API",
    REQUEST_SUCESS: "REQUEST_SUCESS",
    REQUEST_FAILED: "REQUEST_FAILED",
    REQUEST_GENRE_API: "REQUEST_GENRE_API",
    SUCESS_GENRES_API: "SUCESS_GENRES_API",
};

// Our worker Saga: will perform the async increment task
export function* getDataApi(data) {
    try {
        yield delay(1000);
        const query = data.payload.searchValue;
        yield put({ type: Types.REQUEST_DATA_API });
        const response = yield call(api.get, movies.options.url + query);
        yield put({
            type: Types.REQUEST_SUCESS,
            payload: { movies: response.data }
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_FAILED,
            payload: { error }
        });
    }

}

function* getApiGenres() {
    try {
        const response = yield call(api.get, genres.options.url);
        yield put({
            type: Types.SUCESS_GENRES_API,
            payload: {
                genres: response.data.genres
            }
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_FAILED,
            payload: {
                error
            }
        });
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeLatest(Types.HANDLE_SEARCH, getDataApi)
}
export function* watchGetApiGenres() {
    yield takeLatest(Types.REQUEST_GENRE_API, getApiGenres);
}

export default function* helloSaga() {
    yield all([watchIncrementAsync(), watchGetApiGenres()]);
}


