import React, {useContext} from "react";
import './styles.css';
import {CartContext} from "../CardProvider.jsx";

function SummarySide() {
    const productsInCart = useContext(CartContext).productsInCart;
    const list = productsInCart.map((product, index) => {
        return (
            <p key={index}>{product.title}</p>
        )
    })

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {list}
            </div>
        </div>
    )
}

export default SummarySide;