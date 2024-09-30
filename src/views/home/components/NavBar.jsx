import { NavLink } from "react-router-dom";

import styles from "../styles/home.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src="" alt="" />
      </div>
      <div className={styles.navContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/nuestra-historia"
        >
          Nuestra historia
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/el-camping"
        >
          El camping
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/como-llegar"
        >
          Cómo llegar
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/contacto"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};
