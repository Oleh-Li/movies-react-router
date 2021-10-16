import React from "react";
import { Route, NavLink } from "react-router-dom";
import * as moviesApi from "../services/movies-api";
import MovieDetails from "../components/movieDetails/MovieDetails";
import Cast from "../components/cast/Cast";
import Reviews from "../components/reviews/Reviews";
import Loader from "react-loader-spinner";

export default class MoviesPageDetails extends React.Component {
  state = {
    data: null,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    moviesApi
      .fetchMovieWithId(this.props.match.params.movieId)
      .then((data) => this.setState({ data }));
    this.setState({ isLoading: false });
  }

  onGoBack = () => {
    console.log("onGoBack", this.props);
    this.props.history.push("/movies");
  };

  render() {
    const { data, isLoading } = this.state;
    console.log("MoviesPage Data", data);
    return (
      <div>
        {isLoading && <Loader />}
        {data && <MovieDetails {...data} onGoBack={this.onGoBack} />}
        <ul>
          {data && (
            <li>
              <NavLink
                to={"/movies/" + this.props.match.params.movieId + "/cast"}
              >
                Cast{" "}
              </NavLink>
            </li>
          )}
          {data && (
            <li>
              <NavLink
                to={"/movies/" + this.props.match.params.movieId + "/reviews"}
              >
                Reviews{" "}
              </NavLink>
            </li>
          )}
        </ul>
        {data && (
          <Route
            path={"/movies/" + this.props.match.params.movieId + "/cast"}
            component={Cast}
          />
        )}
        {data && (
          <Route
            path={"/movies/" + this.props.match.params.movieId + "/reviews"}
            component={Reviews}
          />
        )}

        {!data && <h2>Movies!!1</h2>}
      </div>
    );
  }
}
