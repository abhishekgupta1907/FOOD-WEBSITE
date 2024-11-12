import { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ showCart }) => {
    const { cartItem, food_list, removeFromCart, getTotalCartAmount } =
        useContext(StoreContext);
    const navigate = useNavigate();
    useEffect(() => {
        showCart(false);
    });
    return (
        <div className="carts">
            <div className="carts-items">
                <div className="carts-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div
                                    className="carts-items-title carts-items-item"
                                    key={index}
                                >
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p
                                        className="cross"
                                        onClick={() => removeFromCart(item._id)}
                                    >
                                        x
                                    </p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="carts-bottom">
                <div className="carts-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="carts-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="carts-total-details">
                            <p>Delivery Fees</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="carts-total-details">
                            <b>Total</b>
                            <b>
                                $
                                {getTotalCartAmount() === 0
                                    ? 0
                                    : getTotalCartAmount() + 2}
                            </b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>
                        Proceed to CheckOut
                    </button>
                </div>
                <div className="carts-promocode">
                    <div>
                        <p>If You Have a promocode Enter it Here</p>
                        <div className="carts-promocode-input">
                            <input type="text" placeholder="Promocode" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
