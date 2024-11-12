import React, { useEffect } from "react";
import "./Restaurant.css";
import Data from "../../assets/assets";
import { Link } from "react-router-dom";

const Restaurants = ({ showCart }) => {
    useEffect(() => {
        showCart(false);
    });
    return (
        <div className="restaurants-container">
            <div className="restaurants-cards">
                {Data.map((item) => (
                    <Link
                        to={`/resdetails/${item.name}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div key={item.id} className="restaurant-details">
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.address}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
