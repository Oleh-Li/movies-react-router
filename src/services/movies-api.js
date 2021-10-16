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
    .get(
      `/search/movie${key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data);
};

//https://api.themoviedb.org/3/search/movie?api_key=faecebaadcb183e9b442760c4032cc63&language=en-US&query=Wild&page=1&include_adult=false
