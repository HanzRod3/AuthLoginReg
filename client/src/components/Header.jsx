import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <nav className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold"> Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/signin">
            <li>Sign In</li>
          </Link>

          <Link to="/signup">
            <li>Sign Up</li>
          </Link>

          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
