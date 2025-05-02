import React, {useContext} from "react";
import './styles.css';
import {CartContext} from "../CardProvider.jsx";

function SummarySide() {
    const [quantity, setQuantity] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const productsInCart = useContext(CartContext).productsInCart;

    React.useEffect(() => {
        productsInCart.forEach((product) => {
            setQuantity(quantity + 1);
            setTotal(total + product.price);
        })
    }, [productsInCart]);

    return (
        <div className="SummarySide">
            <h1>🛒 Cart</h1>
            <div>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Total:</strong> ${total.toFixed(2)}</p>
                <button className={'more-info-button'}>More info</button>
            </div>
        </div>
    )
}

export default SummarySide;