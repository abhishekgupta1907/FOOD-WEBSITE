import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const initialUsers = [
    { id: "user1", password: "pass1", name: "User One" },
    { id: "user2", password: "pass2", name: "User Two" },
    { id: "user3", password: "pass3", name: "User Three" },
    { id: "user4", password: "pass4", name: "User Four" },
    { id: "user5", password: "pass5", name: "User Five" },
];

const LoginPage = ({ onLoginSuccess, showCart }) => {
    useEffect(() => {
        showCart(false);
    });

    const [users, setUsers] = useState(initialUsers);
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        const user = users.find(
            (user) => user.id === id && user.password === password
        );
        if (user) {
            onLoginSuccess(id);
            navigate("/"); // Redirect to homepage
        } else {
            setError("Invalid ID or Password");
        }
    };

    const handleRegister = () => {
        if (users.find((user) => user.id === id)) {
            setError("User already exists");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setUsers([...users, { id, password, name }]);
            alert("Registration successful! You can now log in.");
            setIsRegistering(false);
            setError("");
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
                    type="text"
                    placeholder="User ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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
