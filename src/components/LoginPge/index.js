import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "./style.css";

const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleForm = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`container ${isActive ? "active" : ""}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form action="/">
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <span>or use your email account</span>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <a href="*">Forgot Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            Enter your personal details to access all the site's
                            features
                        </p>
                        <button
                            className="hidden"
                            id="login"
                            onClick={toggleForm}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>
                            Register with your personal details to access all
                            the site's features
                        </p>
                        <button
                            className="hidden"
                            id="register"
                            onClick={toggleForm}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
