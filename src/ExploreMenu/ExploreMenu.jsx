import { useEffect, useRef } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../assets/assets";
import { gsap } from "gsap";

const ExploreMenu = ({ category, setCategory }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const menuItems = menuRef.current.querySelectorAll(
            ".explore-menu-list-item img"
        );
        gsap.fromTo(
            menuItems,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="explore-menu" id="explore-menu" ref={menuRef}>
            <h1>Explore our menu</h1>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        onClick={() =>
                            setCategory((prev) =>
                                prev === item.menu_name ? "All" : item.menu_name
                            )
                        }
                        className="explore-menu-list-item"
                        key={index}
                    >
                        <img
                            className={
                                category === item.menu_name ? "active" : ""
                            }
                            src={item.menu_image}
                            alt=""
                        />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
