import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./style.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ loggedInUser, setShowLogin, cart, showCart }) => {
    const linkClass = ({ isActive }) => (isActive ? "active" : "");
    const initials = loggedInUser ? loggedInUser.slice(0, 2) : "";
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" onClick={() => showCart(false)}>
                    Foodie's Paradise
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/"
                        onClick={() => showCart(false)}
                        className={linkClass}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => showCart(false)}
                        className={linkClass}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        onClick={() => showCart(false)}
                        className={linkClass}
                    >
                        Contact
                    </NavLink>
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
                        <NavLink
                            to="/login"
                            onClick={() => showCart(false)}
                            className={linkClass}
                        >
                            Login
                        </NavLink>
                    </li>
                )}
                {cart || getTotalCartAmount() ? (
                    <div>
                        <li className="cart-img">
                            <Link to="/cart" className={linkClass}>
                                {<img src={assets.basket_icon} alt="" />}{" "}
                            </Link>
                        </li>
                        <div
                            className={getTotalCartAmount() === 0 ? "" : "dot"}
                        ></div>
                    </div>
                ) : (
                    <></>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
