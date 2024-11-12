import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const LoginPage = ({ onLoginSuccess, showCart }) => {
    useEffect(() => {
        showCart(false);
    }, [showCart]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/users/login", { email, password });

            if (response.data) {
                onLoginSuccess(email);
                navigate("/"); // Redirect to homepage
            }
        } catch (err) {
            setError("Invalid Email or Password");
        }
    };

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:5000/users/register", { email, password, name });
            alert("Registration successful! You can now log in.");
            setIsRegistering(false);
            setError("");
        } catch (err) {
            setError("User already exists or registration failed");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            handleRegister();
        } else {
            handleLogin();
        }
    };

    return (
        <div className="login-page">
            <h1>{isRegistering ? "Sign Up" : "Sign In"}</h1>
            <form onSubmit={handleSubmit}>
                {isRegistering && (
                    <>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {isRegistering && (
                    <>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </>
                )}
                {error && <p className="error">{error}</p>}
                <button type="submit">
                    {isRegistering ? "Sign Up" : "Sign In"}
                </button>
            </form>
            <div
                className="toggle"
                onClick={() => {
                    setIsRegistering(!isRegistering);
                    setError("");
                }}
            >
                {isRegistering
                    ? "Already have an account? Sign In"
                    : "Don’t have an account? Sign Up"}
            </div>
        </div>
    );
};

export default LoginPage;
