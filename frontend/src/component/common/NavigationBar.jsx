import  { useContext } from 'react'
import PropTypes from 'prop-types';
import './CssNavb.css'
import mango1 from '../../assets/mango1.png'
import Links from '../links/Links';
import { FaUserCircle } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

 function NavigationBar ({setShowLogin}) {

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const hasItemsInCart = getTotalCartAmount() > 0;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

  return (
    <>
    <div className='mx-12 my-4'>
    <header className="sticky top-0 bg-white shadow">

        <Navbar fluid rounded>
            <NavbarBrand href="#" className="flex items-center gap-10">
                    <img src={mango1} alt="Mango Logo" className="w-15 h-15 logo" />
                   <div className="font-bold text-xl">
                      <Links />
                    </div>
            </NavbarBrand>
          <NavbarToggle />
            <NavbarCollapse className="justify-between items-center">
                <div className="flex items-center gap-10">
                    <div className="rounded-full w-8 h-8 bg-slate-50 text-red-800 text-3xl">
                        <Link to="/CartPage">
                        <GiBasket />
                        </Link>
                        <div className='basket'>
                        {hasItemsInCart && <div className="dot"></div>}
                        </div>
                        
                    </div>
                    
                    {/*<Link to="/ProductDisplay">
                    <button type="button" 
                        className="inline-flex items-center rounded-md bg-orange-500 px-4 py-3 
                        text-sm font-bold text-white shadow-sm hover:bg-[#49B403]">
                            Order Mangoes
                    </button>
                    </Link>*/}
                    <div className=''>
                        {!token ? <button onClick={() => setShowLogin(true)} className="sign-in-button">Sign in</button>
                        : <div className="login-btn">
                            <button ><FaUserCircle /> </button>
                            <ul className='nav-dropdown'>
                                <li  onClick={()=> navigate('/myorders')}> <button><BsBasket /></button> <p>Orders</p> </li>
                                <hr/>
                                <li onClick={logout}> <button ><MdLogout /></button> <p>Sign out</p> </li>
                            </ul>
                        </div>}
                        
                    </div>
                </div>
            </NavbarCollapse>
        </Navbar>

    </header>
    </div>
    </>
  )
}
NavigationBar.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
};

export default NavigationBar;