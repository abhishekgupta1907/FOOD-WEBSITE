import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPge";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import SingleDish from "./components/Homepage/SingleDish";
import AboutUs from "./components/AboutUs";
import LogoutPopup from "./components/LogoutPopup/LogoutPopup";
import Dishes from "./components/Homepage/Dishes";
import Footer from "./components/Footer/Footer";
const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLoginSuccess = (userId) => {
        setLoggedInUser(userId);
    };

    const [showLogin, setShowLogin] = useState(false);
    const handleLogout = () => {
        setLoggedInUser(null);
        setShowLogin(false);
    };
    return (
        <>
            {showLogin ? (
                <LogoutPopup
                    setShowLogin={setShowLogin}
                    loggedInUser={loggedInUser}
                    onLogout={handleLogout}
                />
            ) : (
                <></>
            )}
            <Router>
                <Navbar
                    loggedInUser={loggedInUser}
                    setShowLogin={setShowLogin}
                    onLogout={handleLogout}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Dishes" element={<Dishes />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/Dishes/:category" element={<SingleDish />} />
                    <Route
                        path="/login"
                        element={
                            <LoginPage onLoginSuccess={handleLoginSuccess} />
                        }
                    />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default Main;
