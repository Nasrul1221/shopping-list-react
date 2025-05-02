import './styles.css'

function Card(props) {
    return (
        <div className="card">
            <img className={'product-image'} src={props.image} alt={props.title} />
            <div className="card-content">
                <h2 className={'product-title'}>{props.title}</h2>
                <p className={'product-price'}>${props.price}</p>
                <button onClick={props.addToCard} className={'add-to-cart-btn'}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;