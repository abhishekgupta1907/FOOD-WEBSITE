import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>Foodie's Paradise</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias exercitationem nihil dolorum voluptatem beatae
                        ipsum inventore vitae ipsa eligendi quo, perspiciatis
                        suscipit sequi modi corrupti voluptates hic explicabo
                        distinctio. Corrupti.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 234 567 890</li>
                        <li>abhishekGupta@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright &copy; 2022. All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
