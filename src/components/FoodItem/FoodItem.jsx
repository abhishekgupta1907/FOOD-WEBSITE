import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { useContext, useRef, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { gsap } from "gsap"; // Import GSAP

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

    // Refs for animations
    const foodItemRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the entire card fade-in
        gsap.fromTo(
            foodItemRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // GSAP animation for the image scaling in
        gsap.fromTo(
            imageRef.current,
            { scale: 0 },
            {
                scale: 1,
                duration: 5,
                ease: "elastic.out(0.8, 0.75)",
                delay: 0.2,
            }
        );
    }, []);

    return (
        <div className="food-item" ref={foodItemRef}>
            <div className="food-item-img-container">
                <img
                    src={image}
                    alt=""
                    className="food-item-img"
                    ref={imageRef}
                />
                {!cartItem[id] ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt=""
                        />
                        <p>{cartItem[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
