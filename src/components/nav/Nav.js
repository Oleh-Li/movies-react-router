import { NavLink } from "react-router-dom";
import styles from './nav.module.css'

const activeStyle = {
  color: "palevioletred",
};

const Nav = () => {
  return (
    <ul className={styles.listContainer}>
      <li className={styles.listItem}>
        <NavLink className={styles.linkItem} to="/" exact activeStyle={activeStyle}>
          Home{" "}
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink  to="/movies" activeStyle={activeStyle}>
          Movies{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
