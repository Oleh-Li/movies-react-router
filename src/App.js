import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";
import Nav from "./components/nav/Nav";
import styles from "./App.module.css";
import SearchMovies from "./components/serchMovies/SearchMovies";

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={SearchMovies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
