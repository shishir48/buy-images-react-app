import React,{useContext} from 'react'
import {Context} from './Context'

const CartItem = ({item}) => {
    const {deleteCartItem} = useContext(Context)
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => deleteCartItem(item)}></i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem