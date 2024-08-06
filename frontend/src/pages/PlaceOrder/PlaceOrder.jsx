import { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../component/context/StoreContext'
import NavigationBar from '../../component/common/NavigationBar';
import Footer from '../../component/common/Footer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {

  const { cartItem, mango_list, removeFromCart, getTotalCartAmount, token, url } = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data,[name]:value})
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if (!token) {
      navigate('/CartPage')
    }
    else if(getTotalCartAmount() === 0)
      {
        navigate('/CartPage')
      }
  },[token])


  const addMangodata = async (e)=>{
    e.preventDefault();
    let orderItems = [];
    if (mango_list) {
      mango_list.map((item) => {
          if (cartItem[item._id] !== undefined && cartItem[item._id] > 0) {
              let itemInfo = { ...item };
              itemInfo["quantity"] = cartItem[item._id];
              orderItems.push(itemInfo);
          }
      });
      console.log(orderItems);
     }

    let finaldata = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      street: data.street,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      country: data.country,
      phone: data.phone,
      order: orderItems,
      total: getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+350
    }
    
    console.log(token);
     await axios.post(url + "/api/order/place", finaldata, { headers: { token } });
  }

  
  return (
    <>
    <NavigationBar/>
    <div className="app">
      <form onSubmit={addMangodata} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='LastName' />
          </div>
            <input required name='email' onChange={onChangeHandler} value={data.email} type='text' placeholder='Email address' />
            <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' />
          <div className="multi-fields">
            <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' />
          </div>
          <div className="multi-fields">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zio code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>Rs.{getTotalCartAmount() === 0 ? 0 : 350}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+350}</b>
              </div>
            </div>
            <button type='Submit'>PROCEED TO ORDER</button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default PlaceOrder
