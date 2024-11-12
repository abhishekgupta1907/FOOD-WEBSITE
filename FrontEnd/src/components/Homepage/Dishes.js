import React, { useEffect, useState } from "react";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
const Dishes = ({ showCart }) => {
    const [category, setCategory] = useState("All");
    useEffect(() => {
        showCart(true);
    });
    return (
        <div>
            {" "}
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    );
};

export default Dishes;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// const Dishes = () => {
//     const [status, setStatus] = useState("");
//     const [DishesData, setProductData] = useState([]);

//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 setStatus("loading");
//                 const response = await fetch(
//                     `https://www.themealdb.com/api/json/v1/1/categories.php`
//                 );
//                 const jsonresponse = await response.json();
//                 setProductData(jsonresponse.categories);
//                 setStatus("success");
//             } catch (error) {
//                 setStatus("error");
//             }
//         };
//         getProducts();
//     }, []);
//     if (status === "loading") {
//         return <h4>Loading ...</h4>;
//     }
//     if (status === "error") {
//         return <h4>Error ...</h4>;
//     }
//     return (
//         <>
//             <div className="card-container">
//                 {DishesData && DishesData.length !== 0 ? (
//                     DishesData.map((item, index) => (
//                         <div key={item.id}>
//                             <Link
//                                 to={`/Dishes/${item.strCategory}`}
//                                 state={DishesData}
//                                 key={index}
//                                 style={{
//                                     textDecoration: "none",
//                                     color: "inherit",
//                                 }}
//                             >
//                                 <div className="category">
//                                     <img src={item.strCategoryThumb} alt="" />
//                                     <h1>{item.strCategory}</h1>
//                                 </div>
//                             </Link>
//                         </div>
//                     ))
//                 ) : (
//                     <></>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Dishes;
