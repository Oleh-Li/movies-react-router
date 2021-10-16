import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/loader/Loader";
import NotFound from "./pages/NotFound";
import Nav from "./components/nav/Nav";
import styles from "./App.module.css";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import SearchMoviesPage from "./pages/SearchMoviesPage";

const AsyncHomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

const AsyncSearchMoviesPage = lazy(() =>
  import("./pages/SearchMoviesPage" /* webpackChunkName: "SearchMoviesPage" */)
);

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      <Suspense fallback={Spinner}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncSearchMoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
