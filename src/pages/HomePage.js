import React, { Fragment } from "react";
import MoviesList from "../components/movieList/MovieList";
import * as moviesApi from "../services/movies-api";

// const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=faecebaadcb183e9b442760c4032cc63`;

export default class HomePage extends React.Component {
  state = { items: [] };

  componentDidMount() {
    moviesApi
      .fetchMovies()
      .then((data) => this.setState({ items: [...data.results] }));
  }

  render() {
    const { items } = this.state;
    return (
      <Fragment>
        <h2>Popular Movies Today</h2>
        <MoviesList items={items} />
      </Fragment>
    );
  }
}
