import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to='/'>Pic Some</Link>
            <Link to='/cart'><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        </header>
    )

}

export default Header