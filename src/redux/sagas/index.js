import api from '../../services/api';
import { all } from 'redux-saga/effects';
import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { movies, genres, movie } from '../../services/api';
import moviePagination from './moviePagination';

const Types = {
    REQUEST_SEARCH: 'REQUEST_SEARCH',
    REQUEST_API: 'REQUEST_API',
    REQUEST_SUCESS: 'REQUEST_SUCESS',
    REQUEST_FAILED: 'REQUEST_FAILED',
    REQUEST_GENRE: 'REQUEST_GENRE',
    REQUEST_MOVIE: 'REQUEST_MOVIE',
    GENRES_SUCESS: 'GENRES_SUCESS',
    MOVIE_SUCESS: 'MOVIE_SUCESS',
    MOVIE_FAILED: 'MOVIE_FAILED'
};

// Our worker Saga: will perform the async increment task
function* getRequestSearch(data) {
    try {
        const query = data.payload.searchValue;
        if (query === '') {
            return;
        }
        yield put({ type: Types.REQUEST_API });
        yield delay(1000);
        const response = yield call(api.get, movies.options.url + query);

        const moviesPagination = moviePagination(response);

        yield put({
            type: Types.REQUEST_SUCESS,
            payload: { movies: response.data, ...moviesPagination }
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_FAILED,
            payload: { error }
        });
    }

}

function* getRequestGenre() {
    try {
        const response = yield call(api.get, genres.options.url);
        yield put({
            type: Types.GENRES_SUCESS,
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

function* getRequestMovie({ payload }) {
    try {
        const { options } = movie(payload.id);
        const response = yield call(api.get, options.url);
        yield put({
            type: Types.MOVIE_SUCESS,
            payload: {
                movieDetails: response.data
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
function* watchIncrementAsync() {
    yield takeLatest(Types.REQUEST_SEARCH, getRequestSearch)
}
function* watchgetRequestGenre() {
    yield takeLatest(Types.REQUEST_GENRE, getRequestGenre);
}

function* watchgetRequestMovie() {
    yield takeLatest(Types.REQUEST_MOVIE, getRequestMovie);
}

export default function* helloSaga() {
    yield all([watchIncrementAsync(), watchgetRequestGenre(), watchgetRequestMovie()]);
}
