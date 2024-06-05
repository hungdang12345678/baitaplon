import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const { getTotalWhitlistAmount } = useContext(StoreContext);
    return (
        <div className='navbar'>
            <Link><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search} alt="" />
                <Link to='/whitlist' className='navbar-search-icon'>
                    <img src={assets.basket_1} alt="" />
                    <div className={getTotalWhitlistAmount() > 0 ? "dot" : ""}></div>
                </Link>
                <button onClick={() => setShowLogin(true)}>Đăng nhập/Đăng ký</button>
            </div> 
        </div>
    
    )
}

export default Navbar
