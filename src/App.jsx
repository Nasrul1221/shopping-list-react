import Products from "./product-container/Products.jsx";
import SummarySide from "./summary-side/SummarySide.jsx";
import {CartProvider} from "./CardProvider.jsx";
import './app.css'

function App() {
    return (
        <>
            <CartProvider>
                <div className="App">
                    <Products />
                    <SummarySide />
                </div>
            </CartProvider>
        </>
    )
}

export default App
