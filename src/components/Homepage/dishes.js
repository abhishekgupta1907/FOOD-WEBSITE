import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const Dishes = () => {
    const [status, setStatus] = useState("");
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setStatus("loading");
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/categories.php`
                );
                const jsonresponse = await response.json();
                setProductData(jsonresponse.categories);
                setStatus("success");
            } catch (error) {
                setStatus("error");
            }
        };
        getProducts();
    }, []);
    if (status === "loading") {
        return <h4>Loading ...</h4>;
    }
    if (status === "error") {
        return <h4>Error ...</h4>;
    }
    return (
        <>
            <div className="card-container">
                {productData && productData.length !== 0 ? (
                    productData.map((item, index) => (
                        <div key={item.id}>
                            <Link
                                to={`/Dishes/${item.strCategory}`}
                                state={productData}
                                key={index}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <div className="category">
                                    <img src={item.strCategoryThumb} alt="" />
                                    <h1>{item.strCategory}</h1>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};
