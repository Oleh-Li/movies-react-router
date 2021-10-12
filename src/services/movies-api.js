import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
const key = "?api_key=faecebaadcb183e9b442760c4032cc63";

export const fetchMovies = () => {
  return axios.get(`/popular${key}`).then((response) => response.data);
};

export const fetchMovieWithId = (id) => {
  return axios.get(`/${id}${key}`).then(response=>response.data);
};
