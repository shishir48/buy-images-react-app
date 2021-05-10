import React,{useState,useContext} from 'react'
import {Context} from './Context'



const Images = ({image,className}) => {
    const {toggleFavorite,cartItems,toggleCart} = useContext(Context)
    const [onHover,setOnHover] = useState(false)

    const heartIcon = () => {
        if(image.isFavorite)
        return <i class="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id) }></i>
        else if(onHover)
        return <i class="ri-heart-line favorite" onClick={() => toggleFavorite(image.id) }></i>
    }

    const cartIcon = () => {
        const checkInCart = cartItems.some( img => img.id===image.id)
        if(checkInCart){
            return <i class="ri-shopping-cart-2-fill cart" onClick={() => toggleCart(image)}></i>
        }
        else if(onHover){
            return <i class="ri-shopping-cart-2-line cart" onClick={() => toggleCart(image)}></i>
        }
    }

    return(
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setOnHover(true)} 
            onMouseLeave={() => setOnHover(false)}
        >
            <img src={image.url} alt="" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Images