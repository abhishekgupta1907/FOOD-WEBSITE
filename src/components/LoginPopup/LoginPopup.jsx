import { assets } from "../../assets/assets";
import "./LoginPopup.css";
import React from "react";
const LoginPopup = ({ loggedInUser, setShowLogin }) => {
    return (
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{loggedInUser}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <button type="submit">LogOut</button>
            </form>
        </div>
    );
};

export default LoginPopup;
