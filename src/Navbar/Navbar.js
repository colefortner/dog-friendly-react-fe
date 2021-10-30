import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Future Navbar</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Login/SignUp</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Wildcard</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
