import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = () => {
  return (
    <section>
      <div className="border flex justify-evenly px-2 py-4 shadow-md">
        <Link to="/">Home</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/netflix">Netflix</Link>
      </div>
    </section>
  );
};

export default Navbar;
