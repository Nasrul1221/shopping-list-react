import React, {useContext} from "react";
import './styles.css';
import {CartContext} from "../CardProvider.jsx";

function SummarySide() {
    const [productQuantity, setProductQuantity] = React.useState(0);
    const productsInCart = useContext(CartContext).productsInCart;

    React.useEffect(() => {
        productsInCart.forEach(() => {
            setProductQuantity(productQuantity + 1);
        })
    }, [productsInCart]);

    return (
        <div className={'SummarySide'}>
            <h1>Cart</h1>
            <div>
                <p>Quantity: {productQuantity}</p>
            </div>
        </div>
    )
}

export default SummarySide;