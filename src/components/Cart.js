import React,{useContext,useState} from 'react'
import CartItem from './CartItem'
import {Context} from './Context'

const Cart = () => {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems,emptyCart} = useContext(Context)
    const cartArray = cartItems.map( item => {
        return <CartItem item={item} key={item.id}/>
    })
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    return (
        <main className="cart-page">
            <h1>Check Out</h1>
            {cartArray}
            <p className="total-cost">Total:{totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )

}

export default Cart