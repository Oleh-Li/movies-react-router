import { Link } from "react-router-dom";

const MoviesList = ({ items = [] }) => (
  <ul>
    {items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      );
    })}
  </ul>
);

export default MoviesList;
