import { combineReducers } from "redux";

const Types = {
    HANDLE_SEARCH: "HANDLE_SEARCH",
    REQUEST_DATA_API: "REQUEST_DATA_API",
    REQUEST_SUCESS: "REQUEST_SUCESS",
    REQUEST_FAILED: "REQUEST_FAILED"
};

const init = {
    searchValue: "",
    movies: null,
    error: false,
    loading: false
};

const movieReducer = (state = init, action) => {
    switch (action.type) {
        case Types.HANDLE_SEARCH: {
            return { ...state, ...action.payload };
        }
        case Types.REQUEST_DATA_API: {
            return { ...state, loading: true };
        }
        case Types.REQUEST_SUCESS: {
            return { ...state, ...action.payload };
        }
        case Types.REQUEST_FAILED: {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
};


const rootReducer = combineReducers({ movieReducer: movieReducer });

export default rootReducer;
