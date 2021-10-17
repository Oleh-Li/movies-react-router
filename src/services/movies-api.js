import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "?api_key=faecebaadcb183e9b442760c4032cc63";

export const fetchMovies = () => {
  return axios.get(`/movie/popular${key}`).then((response) => response.data);
};

export const fetchMovieWithId = (id) => {
  return axios.get(`/movie/${id}${key}`).then((response) => response.data);
};

export const fetchSearchMovies = (query) => {
  return axios
    .get(`/search/movie${key}&query=${query}`)
    .then((response) => response.data);
};

export const fetchMovieCast = (id) => {
  return axios
    .get(`/movie/${id}/credits${key}`)
    .then((response) => response.data.cast);
};

export const fetchMovieReviews = (id) => {
  return axios
    .get(`/movie/${id}/reviews${key}`)
    .then((response) => response.data.results);
};

//https://api.themoviedb.org/3/movie/550988/reviews?api_key=faecebaadcb183e9b442760c4032cc63&language=en-US&page=1
