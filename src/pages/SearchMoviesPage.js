import { Component, Fragment } from "react";
import SearchMovies from "../components/serchMovies/SearchMovies";
import * as moviesApi from "../services/movies-api";
import Loader from "../components/loader/Loader";
import MoviesList from "../components/movieList/MovieList";

export default class SearchMoviesPage extends Component {
  state = {
    items: [],
    isLoading: false,
    query: "",
  };

  onSearch = (string) => {
    this.setState({ query: string });
  };

  componentDidMount() {
    const localStorageMovieQuery = localStorage.getItem("movieQuery");
    if (localStorageMovieQuery) {
      this.setState({ query: localStorageMovieQuery });
    }
    this.setState({ isLoading: true });
    if (this.state.query) {
      moviesApi
        .fetchSearchMovies(this.state.query)
        .then((data) => this.setState({ items: [...data.results] }));
    }
    this.setState({ isLoading: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ isLoading: true });
      localStorage.setItem("movieQuery", this.state.query);
      moviesApi
        .fetchSearchMovies(this.state.query)
        .then((data) => this.setState({ items: [...data.results] }));
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { items, isLoading } = this.state;
    return (
      <Fragment>
        {isLoading && Loader}
        <SearchMovies onSearch={this.onSearch} />
        {items.length > 0 && <MoviesList items={items} />}
      </Fragment>
    );
  }
}
