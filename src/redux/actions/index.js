const Types = {
    REQUEST_SEARCH: "REQUEST_SEARCH",
    REQUEST_GENRE: "REQUEST_GENRE",
    REQUEST_MOVIE: "REQUEST_MOVIE",
};

export const getSearch = e => ({
    type: Types.REQUEST_SEARCH,
    payload: { searchValue: e.target.value }
});

export const getGenre = () => ({
    type: Types.REQUEST_GENRE
});

export const getMovie = id => ({
    type: Types.REQUEST_MOVIE,
    payload: { id }
});

