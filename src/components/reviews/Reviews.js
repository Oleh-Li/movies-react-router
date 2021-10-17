import { Component, Fragment } from "react";
import Loader from "react-loader-spinner";
import * as movieApi from "../../services/movies-api";
import ReviewsList from "./reviewsList/ReviewsList";

export default class Reviews extends Component {
  state = {
    data: [],
    isLoadind: false,
  };

  componentDidMount() {
    this.setState({ isLoadind: true });
    movieApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((data) => this.setState({ data: [...data] }));
    this.setState({ isLoadind: false });
  }

  render() {
    const { data, isLoadind } = this.state;
    return (
      <Fragment>
        {isLoadind && <Loader />}
        {data && <ReviewsList items={data} />}
        {data.length<=0 && <p><b>No Reviews</b></p>}
      </Fragment>
    );
  }
}
