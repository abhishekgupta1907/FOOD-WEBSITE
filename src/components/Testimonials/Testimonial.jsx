import React, { useEffect } from "react";
import "./Testimonial.css";
import men1 from "./person1.webp";
import men2 from "./person2.webp";
import men3 from "./person3.webp";
import men4 from "./person4.webp";
import men5 from "./person5.webp";
import women1 from "./women1.webp";
import women2 from "./women2.webp";
const testimonials = [
    {
        name: "John Doe",
        feedback:
            "This website is fantastic! The user interface is so easy to navigate.",
        designation: "Food Blogger",
        image: men1,
    },
    {
        name: "Jane Smith",
        feedback:
            "Great service and amazing food quality! I would highly recommend it to everyone.",
        designation: "Chef",
        image: men2,
    },
    {
        name: "Mark Johnson",
        feedback:
            "The customer support is top-notch. They really care about their customers.",
        designation: "Restaurant Owner",
        image: men3,
    },
    {
        name: "Emily Davis",
        feedback:
            "A seamless experience from start to finish. The dishes are always fresh and delicious.",
        designation: "Food Critic",
        image: women1,
    },
    {
        name: "Michael Brown",
        feedback:
            "I love how easy it is to place an order. The delivery is always on time!",
        designation: "Customer",
        image: men5,
    },
    {
        name: "Sarah Wilson",
        feedback:
            "The best food delivery service I’ve used. The variety of dishes is impressive.",
        designation: "Home Cook",
        image: women2,
    },
    {
        name: "David Lee",
        feedback:
            "Highly recommend this site. It has everything a foodie needs!",
        designation: "Gourmet Enthusiast",
        image: men4,
    },
];

const Testimonial = ({ showCart }) => {
    useEffect(() => {
        showCart(false);
    });
    return (
        <div className="testimonial-container">
            <h1>What Our Users Say</h1>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt="" />
                        <p className="feedback">"{testimonial.feedback}"</p>
                        <h3 className="name">{testimonial.name}</h3>
                        <p className="designation">{testimonial.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
