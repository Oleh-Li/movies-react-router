import React from "react";
import { Route, NavLink } from "react-router-dom";
import * as moviesApi from "../services/movies-api";
import MovieDetails from "../components/movieDetails/MovieDetails";
import Cast from "../components/cast/Cast";
import Reviews from "../components/reviews/Reviews";

export default class MoviesPageDetails extends React.Component {
  state = {
    data: null,
  };
  componentDidMount() {
    moviesApi
      .fetchMovieWithId(this.props.match.params.movieId)
      .then((data) => this.setState({ data }));
  }

  onGoBack=()=>{
    console.log("onGoBack",this.props)
    this.props.history.push("/movies")
  }

  render() {
    const { data } = this.state;
    console.log("MoviesPage Data", data);
    return (
      <div>
        {data && <MovieDetails {...data} onGoBack={this.onGoBack}/>}
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
