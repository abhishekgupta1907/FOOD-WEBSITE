import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { gsap } from "gsap"; // Import GSAP
import image1 from "./food.webp";
import image2 from "./restaarant.jpg";
import image3 from "./testinomial.jpg";
import image4 from "./discount.jpg";

const HomePage = ({ showCart }) => {
    const cardRefs = useRef([]); // Ref to store card elements

    useEffect(() => {
        showCart(false);

        // GSAP animation for cards
        gsap.from(cardRefs.current, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, [showCart]);

    return (
        <div className="home-container">
            <h2>Welcome to Foodie's Paradise</h2>
            <div className="card-container">
                <Link
                    to={`/Dishes`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => showCart(true)}
                >
                    <div
                        className="card"
                        ref={(el) => (cardRefs.current[0] = el)}
                    >
                        <img src={image1} alt="" />
                        <h3>Popular Dishes</h3>
                        <p>Explore our top-rated dishes.</p>
                    </div>
                </Link>
                <Link
                    to={`/restaurant`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        className="card"
                        ref={(el) => (cardRefs.current[1] = el)}
                    >
                        <img src={image2} alt="" />
                        <h3>Popular Restaurants</h3>
                        <p>Check out the best restaurants around you.</p>
                    </div>
                </Link>
                <Link
                    to={`/discount`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        className="card"
                        ref={(el) => (cardRefs.current[2] = el)}
                    >
                        <img src={image4} alt="" />
                        <h3>Discounts & Offers</h3>
                        <p>Save more with exclusive discounts.</p>
                    </div>
                </Link>
                <Link
                    to={`/testimonials`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        className="card"
                        ref={(el) => (cardRefs.current[3] = el)}
                    >
                        <img src={image3} alt="" />
                        <h3>Testimonials</h3>
                        <p>See what our customers have to say.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
