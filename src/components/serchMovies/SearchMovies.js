import React, { Component } from "react";
import styles from "./searchMovies.module.css";

export default class SearchMovies extends Component {
  render() {
    return (
      <form>
        <input className={styles.movieInput} autoComplete="off" type="text" placeholder="Movie Name" />
        <button className={styles.movieInputBtton} type="submit">Search</button>
      </form>
    );
  }
}
