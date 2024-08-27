import React from "react";
import { useLocation, useParams } from "react-router-dom";

const SingleDish = () => {
    const { category } = useParams();
    const { state } = useLocation();
    const data = state && state.find((el) => el.strCategory === category);
    console.log(state, data);
    return <div>SingleDish</div>;
};

export default SingleDish;
