const Types = {
    HANDLE_SEARCH: "HANDLE_SEARCH",
    REQUEST_GENRE_API: "REQUEST_GENRE_API",
    REQUEST_MOVIE_API: "REQUEST_MOVIE_API",
};

export const handleSearch = e => ({
    type: Types.HANDLE_SEARCH,
    payload: {
        searchValue: e.target.value
    }
});

export const getApiGenres = () => ({
    type: Types.REQUEST_GENRE_API
});

export const getApiMovie = id => ({
    type: Types.REQUEST_MOVIE_API,
    payload: { id }
  });
