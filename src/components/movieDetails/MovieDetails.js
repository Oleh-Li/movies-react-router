import React from "react";
import styles from "./MovieDetails.module.css";
import shortid from "shortid";

const MovieDetails = ({poster_path, original_title, vote_average, overview, genres, onGoBack}) => {
  return (
    <div>
      <button onClick={onGoBack} className={styles.backButton} type="button">Go Back</button>
    <div className={styles.container}>
      <img
        className={styles.posterImg}
        src={
          "https://www.themoviedb.org/t/p/w300_and_h450_face" +
          poster_path
        }
        alt="poster"
      />
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {vote_average}</p>
        <p>
          <b>Overview</b>
        </p>
        <p>{overview}</p>
        <p>
          <b>Genres</b>
        </p>
        {genres.map((item) => (
          <span key={shortid.generate()}>{item.name} </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
