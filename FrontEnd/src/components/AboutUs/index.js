import React, { useEffect } from "react";
import "./style.css";

const teamMembers = [
    {
        name: "Abhishek Gupta",
        role: "Frontend Developer",
        description:
            "Abhishek specializes in creating responsive and intuitive user interfaces. He has a keen eye for detail and a passion for turning ideas into reality.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Akash Parmar",
        role: "Backend Developer",
        description:
            "Akash is a backend wizard, ensuring that everything runs smoothly behind the scenes. He enjoys solving complex problems and optimizing performance.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Deepak",
        role: "Full Stack Developer",
        description:
            "Deepak is versatile, working on both frontend and backend aspects of the project. His adaptability and problem-solving skills are invaluable to the team.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Mohit",
        role: "UI/UX Designer",
        description:
            "Member 4 is dedicated to crafting user experiences that are both beautiful and functional. They excel in creating designs that are user-centric.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Prakash",
        role: "Proble Solving",
        description:
            "Member 5 keeps the team on track, managing timelines, and ensuring that the project meets its goals. Their leadership keeps the team motivated and focused.",
        image: "https://via.placeholder.com/150",
    },
];

const AboutUs = ({ showCart }) => {
    useEffect(() => {
        showCart(false);
    });
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Meet the talented team behind this project. We are a group of
                passionate individuals committed to delivering the best
                experience possible.
            </p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member-card">
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
