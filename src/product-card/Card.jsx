import './styles.css'

function Card(props) {
    return (
        <div className="card">
            <img className={'product-image'} src={props.image} alt={props.title} />
            <h2 className={'product-title'}>{props.title}</h2>
            <p className={'product-price'}>${props.price}</p>
            <button onClick={props.addToCard}>Add to Cart</button>
        </div>
    );
}

export default Card;


const cart = JSON.parse(localStorage.getItem('cart')) || [];