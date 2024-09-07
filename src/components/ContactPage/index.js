import React, { useEffect } from "react";
import "./style.css";

const ContactPage = ({ showCart }) => {
    useEffect(() => {
        showCart(false);
    });
    return (
        <div className="contact-container">
            <p>
                If you have any questions, feel free to reach out to us. We're
                here to help!
            </p>
            <div className="contact-form">
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </div>
            <div className="contact-info">
                <h2>Our Contact Information</h2>
                <p>
                    <i className="fa-solid fa-phone"></i> Phone: (123) 456-7890
                </p>
                <p>
                    <i className="fa-solid fa-envelope"></i> Email:
                    abhishekgupta8967@gmail.com
                </p>
                <p>
                    <i className="fa-solid fa-map-marker-alt"></i> Address: 123
                    Street Name, City, Country
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
