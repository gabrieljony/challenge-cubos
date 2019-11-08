import { combineReducers } from "redux";

const Types = {
    REQUEST_SEARCH: "REQUEST_SEARCH",
    REQUEST_GENRE: "REQUEST_GENRE",
    REQUEST_MOVIE: "REQUEST_MOVIE",
    REQUEST_API: "REQUEST_API", 
    REQUEST_FAILED: "REQUEST_FAILED",
    REQUEST_SUCESS: "REQUEST_SUCESS",
    MOVIE_FAILED: "MOVIE_FAILED",
    MOVIE_SUCESS: "MOVIE_SUCESS",
    GENRES_SUCESS: "GENRES_SUCESS",
};

const init = {
    searchValue: "",
    movies: null,
    error: false,
    loading: false,
    genres: null,
};

const reducers = (state = init, action) => {
    switch (action.type) {
        case Types.REQUEST_SEARCH: {
            return { ...state, ...action.payload };
        }
        case Types.REQUEST_API: {
            return { ...state, loading: true };
        }
        case Types.REQUEST_SUCESS: {
            return { ...state, ...action.payload };
        }
        case Types.REQUEST_FAILED: {
            return { ...state, ...action.payload };
        }
        case Types.GENRES_SUCESS: {
            return { ...state, ...action.payload };
        }
        case Types.MOVIE_SUCESS: {
            return { ...state, ...action.payload };
          }
        default:
            return state;
    }
};


const root = combineReducers({ reducers: reducers });

export default root;
