import React from "react";
import styles from "./MovieDetailsPage.module.css";
import shortid from "shortid";

const MovieDetailsPage = (props) => {
  console.log("props data", props.data);
  return (
    <div>
      <button className={styles.backButton} type="button">Go Back</button>
    <div className={styles.container}>
      <img
        className={styles.posterImg}
        src={
          "https://www.themoviedb.org/t/p/w300_and_h450_face" +
          props.data.poster_path
        }
        alt="poster"
      />
      <div>
        <h2>{props.data.original_title}</h2>
        <p>User Score: {props.data.vote_average}</p>
        <p>
          <b>Overview</b>
        </p>
        <p>{props.data.overview}</p>
        <p>
          <b>Genres</b>
        </p>
        {props.data.genres.map((item) => (
          <span key={shortid.generate()}>{item.name} </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieDetailsPage;
