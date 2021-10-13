import React, { Component } from "react";
import styles from "./searchMovies.module.css";

export default class SearchMovies extends Component {
  render() {
    return (
      <form>
        <input autoComplete="off" type="text" placeholder="Movie Name" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
