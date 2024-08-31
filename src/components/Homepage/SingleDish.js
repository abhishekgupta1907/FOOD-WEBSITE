import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./style.css";
const SingleDish = () => {
    const { category } = useParams();
    const { state } = useLocation();
    const data = state && state.find((el) => el.strCategory === category);
    console.log(state, data);
    return (
        <div className="cart">
            <img src={data.strCategoryThumb} alt="" />
            <h1>{data.strCategory}</h1>
            <button> add to cart</button>

            {/* <p>{data.strCategoryDescription}</p> */}
        </div>
    );
};

export default SingleDish;
