import { Link, useLocation } from "react-router-dom";
import React from "react";
const menu = [
  { path: "/", name: "Home" },
  { path: "/about", name: "Sobre" },
];

const List = ({ path, name }) => {
  const { pathname } = useLocation();

  return (
    <li
      className={`py-2 inline-block hover:bg-pink-300 p-1 text-cyan-700 ${
        pathname === path ? `bg-pink-300` : ""
      }`}
    >
      <Link to={path}> {name} </Link>
    </li>
  );
};

const Header = () => (
  <div className="w-full">
    <nav className="bg-pink-100">
      <ul className="flex justify-end row-auto px-3">
        {menu.map(({ path, name }) => (
          <List key={name} path={path} name={name} />
        ))}
      </ul>
    </nav>
  </div>
);

export { Header };
