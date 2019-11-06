import axios from "axios";

const urlAPI = "https://api.themoviedb.org/3/";
const apikey = "67f2745bfbab836b3214ba02776d32ba";
const language = "language=pt-br";

const api = axios.create({
    baseURL: urlAPI
});

export default api;

export const movies = {
    options: {
        url: `search/movie?api_key=${apikey}&${language}&query=`
    }
};

export const movie = id => ({
    options: {
        url: `movie/${id}?api_key=${apikey}&${language}&append_to_response=videos`
    }
});

export const genres = {
    options: {
        url: `genre/movie/list?api_key=${apikey}&${language}`
    }
};
