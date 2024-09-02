import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ loggedInUser, setShowLogin }) => {
    const initials = loggedInUser ? loggedInUser.slice(0, 2) : "";
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Foodie's Paradise</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {loggedInUser ? (
                    <li
                        className="user-info"
                        onClick={() => setShowLogin(true)}
                    >
                        {initials}
                    </li>
                ) : (
                    <li>
                        <a href="/login">Login</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
