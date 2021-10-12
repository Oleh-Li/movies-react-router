import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFound from "./pages/NotFound";
import Nav from "./components/nav/Nav";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MoviesPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
