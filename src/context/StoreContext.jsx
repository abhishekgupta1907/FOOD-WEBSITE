import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
    console.log(children);
    const [cartItem, setCartItem] = useState({});
    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((x) => x._id === item);

                totalAmount += itemInfo.price * cartItem[item];
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        setCartItem,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;

// import React, { createContext, useState, useEffect } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItem, setCartItem] = useState(() => {
//         const savedCart = localStorage.getItem("cartItem");
//         return savedCart ? JSON.parse(savedCart) : {};
//     });

//     useEffect(() => {
//         localStorage.setItem("cartItem", JSON.stringify(cartItem));
//     }, [cartItem]);

//     const addToCart = (itemId) => {
//         setCartItem((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1,
//         }));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItem((prev) => ({
//             ...prev,
//             [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//         }));
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItem) {
//             if (cartItem[item] > 0) {
//                 let itemInfo = food_list.find((x) => x._id === item);
//                 totalAmount += itemInfo.price * cartItem[item];
//             }
//         }
//         return totalAmount;
//     };

//     const contextValue = {
//         food_list,
//         cartItem,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
