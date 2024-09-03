import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ loggedInUser, setShowLogin, cart, showCart }) => {
    const initials = loggedInUser ? loggedInUser.slice(0, 2) : "";
    const { getTotalCartAmount } = useContext(StoreContext);
    console.log(getTotalCartAmount());
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" onClick={() => showCart(false)}>
                    Foodie's Paradise
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" onClick={() => showCart(false)}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => showCart(false)}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => showCart(false)}>
                        Contact
                    </Link>
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
                {cart ? (
                    <div>
                        {" "}
                        <li className="cart-img">
                            <Link to="/cart" onClick={() => showCart(false)}>
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
