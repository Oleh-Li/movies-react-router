import React, { Component } from "react";
import styles from "./searchMovies.module.css";

export default class SearchMovies extends Component {
  state = {
    value: "",
  };
  handleChange=(e)=>{
    this.setState({value: e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onSearch(this.state.value)
    this.setState({value: ""})
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        onChange={this.handleChange}
          className={styles.movieInput}
          value={value}
          autoComplete="off"
          type="text"
          placeholder="Movie Name"
        />
        <button className={styles.movieInputBtton} type="submit">
          Search
        </button>
      </form>
    );
  }
}
