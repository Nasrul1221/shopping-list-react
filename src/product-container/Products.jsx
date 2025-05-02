import React, { useEffect, useContext } from "react";
import Card from "../product-card/Card.jsx";
import './styles.css'
import {CartContext} from "../CardProvider.jsx";

function Products() {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const { setProductsInCart } = useContext(CartContext);

    const addToCart = (product) => {
        setProductsInCart(prev => [...prev, product]);
        setVisible(true);
    };

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)

                console.log(data)
            }
            catch (error) {
                console.error('Error fetching products:', error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 2000); // 2 seconds

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (loading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={'Products'}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    addToCard={() => addToCart(product)}
                />
            ))}
            <div className={'pop-up'} style={{opacity: visible ? 1 : 0}}>
                <p>Added to cart ✅</p>
            </div>
        </div>
    )
}

export default Products