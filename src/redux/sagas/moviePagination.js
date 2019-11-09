const pagination = response => {
    const pagination = response.data.results.length / 5;
    var totalPag = [];
    for (let pag = 1; pag <= pagination; pag++) {
        totalPag.push(pag);
    }

    var moviePagined = [];
    var tempArray = [];
    response.data.results.map((item, index, array) => {
        tempArray.push(item);
        if (index === 0) {
            moviePagined.push([undefined]);
        }
        if ((index + 1) % 5 === 0) {
            moviePagined.push(tempArray);
            tempArray = [];
        }
        return false;
    });

    return {
        pagination: {
            totalPag,
            movies: moviePagined,
            paginationActual: 1
        }
    };
};

export default pagination;
