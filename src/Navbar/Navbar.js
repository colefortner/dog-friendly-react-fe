import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Future Navbar</div>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="#">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="#">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="#">
            Login/SignUp
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="#">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/showpage">
            B Show Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
