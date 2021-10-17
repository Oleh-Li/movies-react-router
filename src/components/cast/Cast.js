import React, { Component, Fragment } from "react";
import Loader from "react-loader-spinner";
import * as moviesApi from "../../services/movies-api";
import CastList from "./castList/CastList";

export default class Cast extends Component {
  state = {
    data: null,
    isLoadind: false,
  };

  componentDidMount() {
    this.setState({ isLoadind: true });
    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((data) => this.setState({ data: [...data] }));
    this.setState({ isLoadind: false });
  }

  render() {
    const { isLoadind, data } = this.state;
    return (
      <Fragment>
        <h2>Cast</h2>
        {data&&<CastList items={data}/>}
        {isLoadind && <Loader />}
      </Fragment>
    );
  }
}
