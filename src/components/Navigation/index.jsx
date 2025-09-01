import clsx from "clsx";
import styles from "./Navigation.module.scss";

import { NavLink } from "react-router";

const routes = [
  { path: "/", name: "Home" },
  { path: "/counter", name: "Counter" },
  { path: "/todo", name: "Todo List" },
  { path: "/profile", name: "Profile Card" },
  { path: "/products", name: "Products List" },
  { path: "/comments", name: "Comment System" },
  { path: "/weather", name: "Weather App" },
  { path: "/buttons", name: "Buttons" },
];

function Navigation() {
  return (
    <ul className={styles.list}>
      {routes.map((route) => (
        <li key={route.path} className={clsx(styles.item)}>
          <NavLink
            className={({ isActive }) => clsx(isActive && styles.active)}
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
