import { assets } from "../../assets/assets";
import "./LogoutPopup.css";
import React from "react";

const LogoutPopup = ({ loggedInUser, setShowLogin, onLogout }) => {
    const handleLogout = (event) => {
        event.preventDefault();
        onLogout();
    };

    return (
        <div className="logout-popup">
            <form
                action=""
                onSubmit={handleLogout}
                className="logout-popup-container"
            >
                <div className="logout-popup-title">
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

export default LogoutPopup;
