import { HashRouter, Routes, Route } from "react-router";

import Home from "../../pages/Home";

import Navigation from "../../components/Navigation";
import Counter from "../../pages/Counter";
import Profile from "../../pages/Profile";
import Products from "../../pages/Products";
import Todo from "../../pages/Todo";
import WeatherApp from "../../pages/Weather";
import Comments from "../../pages/Comments";
import ButtonPage from "../../pages/Button/Button.index";

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/weather",
    element: <WeatherApp />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/buttons",
    element: <ButtonPage />,
  },
];

function AppRoutes() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
