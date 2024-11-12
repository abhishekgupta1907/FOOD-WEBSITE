import React, { useState } from "react";
import "./DiscountOffers.css"; // Assuming you style the component separately

const DiscountOffers = () => {
    // Sample state for discounts and offers
    const [offers] = useState([
        {
            id: 1,
            title: "20% Off on All Pizzas",
            description: "Get 20% off on any pizza orders over $15!",
            code: "PIZZA20",
            validity: "Valid until September 30, 2024",
        },
        {
            id: 2,
            title: "Free Delivery on Orders Above $30",
            description: "Enjoy free delivery when you spend more than $30.",
            code: "FREESHIP",
            validity: "Valid until October 15, 2024",
        },
        {
            id: 3,
            title: "Buy 1 Get 1 Free on Burgers",
            description: "Order one burger and get another one free.",
            code: "BURGERBOGO",
            validity: "Valid only on weekends",
        },
        {
            id: 4,
            title: "50% Off for New Users",
            description:
                "First-time customers get a 50% discount on their first order.",
            code: "NEW50",
            validity: "Valid for first order only",
        },
    ]);

    return (
        <div className="discount-offers">
            <h2>Discounts & Offers</h2>
            <div className="offers-list">
                {offers.map((offer) => (
                    <div className="offer-card" key={offer.id}>
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                        <div className="offer-code">
                            <strong>Use Code:</strong> <span>{offer.code}</span>
                        </div>
                        <p className="offer-validity">{offer.validity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountOffers;
