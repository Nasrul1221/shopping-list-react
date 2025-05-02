import React, {useContext} from "react";
import './styles.css';
import {CartContext} from "../CardProvider.jsx";

function SummarySide() {
    const [productList, setProductList] = React.useState([]);
    const productsInCart = useContext(CartContext).productsInCart;

    React.useEffect(() => {
        const list = productsInCart.map((product) => {
            return (
                <div className={'summary-object'}>
                    <img src={product.image} alt={product.name} className={'summary-image'} />
                    <h2 className={'summary-object-title'}>{product.title}</h2>
                </div>
            )
        })
        setProductList(list);
    }, [productsInCart]);

    return (
        <div className={'SummarySide'}>
            <h1>Cart</h1>
            <div>
                {productList}
            </div>
        </div>
    )
}

export default SummarySide;