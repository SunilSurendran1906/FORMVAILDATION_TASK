import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav-bar">
      <div className="title-head">
        <p className="title-text">Laibrary Management System</p>
      </div>
      <div className="nav-Bar">
        <ul className="list-navbar">
          <Link to="/" className="list-items">
            <li>Home</li>
          </Link>
          <Link to="/book" className="list-items">
            <li>Books</li>
          </Link>
          <Link to="/author" className="list-items">
            <li>Author</li>
          </Link>
          <Link to="/bookStore" className="list-items">
            <li>BookStore</li>
          </Link>
          <Link to="/authorCollection" className="list-items">
            <li>Authors Collection</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
