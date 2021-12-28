import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "store/context";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
  const { darkMode, darkModeToggle } = useContext(AppContext);

  const btnText = darkMode ? (
    <span className={styles.toggleText} style={{ color: "yellow" }}>
      ☀︎
    </span>
  ) : (
    <span className={styles.toggleText} style={{ color: "#6237a0" }}>
      ☽
    </span>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>De'Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={styles.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={styles.active}>
              New Quote
            </NavLink>
          </li>
          <li>
            <div
              className={styles.toggleDiv}
              style={{ backgroundColor: darkMode ? "#313131" : "white" }}
            >
              <button
                style={{ backgroundColor: darkMode ? "#313131" : "white" }}
                onClick={darkModeToggle}
                className={styles.toggleBtn}
              >
                {btnText}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
