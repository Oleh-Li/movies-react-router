import React from "react";
import { Route, NavLink } from "react-router-dom";
import * as moviesApi from "../services/movies-api";
import MovieDetailsPage from "../components/movieDetailsPage/MovieDetailsPage";
import Cast from "../components/cast/Cast";
import Reviews from "../components/reviews/Reviews";

export default class MoviesPage extends React.Component {
  state = {
    data: null,
  };
  componentDidMount() {
    moviesApi
      .fetchMovieWithId(this.props.match.params.movieId)
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    console.log("Data", data);
    return (
      <div>
        {data && <MovieDetailsPage data={data} />}
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
