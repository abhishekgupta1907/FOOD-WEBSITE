import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPge";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import { Dishes } from "./components/Homepage/dishes";
import SingleDish from "./components/Homepage/SingleDish";
import AboutUs from "./components/AboutUs";

const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLoginSuccess = (userId) => {
        setLoggedInUser(userId);
    };

    return (
        <Router>
            <Navbar loggedInUser={loggedInUser} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Dishes" element={<Dishes />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/Dishes/:category" element={<SingleDish />} />
                <Route
                    path="/login"
                    element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
                />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default Main;
