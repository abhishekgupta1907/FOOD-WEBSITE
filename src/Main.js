// src/Main.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPge";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import { Dishes } from "./components/Homepage/dishes";
import SingleDish from "./components/Homepage/SingleDish";
const Main = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Dishes" element={<Dishes />} />
                <Route path="/Dishes/:category" element={<SingleDish />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default Main;
