import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPge";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import LogoutPopup from "./components/LogoutPopup/LogoutPopup";
import Dishes from "./components/Homepage/Dishes";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Testimonial from "./components/Testimonials/Testimonial";
import Restaurants from "./components/PopularRestaurant/Restaurants";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import DiscountOffers from "./components/DiscountOffers/DiscountOffers";
const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [cart, showCart] = useState(false);

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
                    cart={cart}
                    showCart={showCart}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage showCart={showCart} />}
                    />
                    <Route
                        path="/Dishes"
                        element={<Dishes showCart={showCart} />}
                    />
                    <Route
                        path="/about"
                        element={<AboutUs showCart={showCart} />}
                    />
                    <Route
                        path="/login"
                        element={
                            <LoginPage
                                onLoginSuccess={handleLoginSuccess}
                                showCart={showCart}
                            />
                        }
                    />
                    <Route
                        path="/contact"
                        element={<ContactPage showCart={showCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart showCart={showCart} />}
                    />
                    <Route
                        path="/testimonials"
                        element={<Testimonial showCart={showCart} />}
                    />
                    <Route
                        path="/restaurant"
                        element={<Restaurants showCart={showCart} />}
                    />
                    <Route
                        path="/order"
                        element={<PlaceOrder showCart={showCart} />}
                    />
                    <Route
                        path="/resdetails/:name"
                        element={<Dishes showCart={showCart} />}
                    />
                    <Route
                        path="/discount"
                        element={<DiscountOffers showCart={showCart} />}
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default Main;
