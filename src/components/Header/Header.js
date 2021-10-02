import { useLocation } from 'react-router';
import { useContext } from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';
import { MdShoppingCart } from 'react-icons/md'
import CartContext from '../../contexts/CartContext';

const Header = () => {
    let { pathname } = useLocation()
    let title = ''
    const  {carts} = useContext(CartContext) 
    if(pathname === '/') title = 'Shop'
    if(pathname === '/about') title = 'About'
    if(pathname === '/contact') title = 'Contact'
    if(pathname === '/blog') title = 'Blog'
    if(pathname.includes('product')) title = 'Shop'
    
    return(
        <><NavBar />
        <div className="Cart">
          {carts.length}<MdShoppingCart />
        </div>
        <h3>{title}</h3></>
    )
}

export default Header