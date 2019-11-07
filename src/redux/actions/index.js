const Types = {
    HANDLE_SEARCH: "HANDLE_SEARCH",
};

export const handleSearch = e => ({
    type: Types.HANDLE_SEARCH,
    payload: {
        searchValue: e.target.value
    }
});
