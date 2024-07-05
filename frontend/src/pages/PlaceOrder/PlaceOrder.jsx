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















































/* import React from 'react'
import NavigationBar from '../../component/common/NavigationBar'
import alphonso from '../../assets/alphonso.png'

function Ordering() {
  return (
    <>
    <NavigationBar/>
    <div className="container mx-auto p-4 md:p-6 lg:p-12 flex flex-col md:flex-row items-center justify-center">
        <div className="bg-white p-8 border border-red-800 md:w-1/2 mx-4 mb-4">
          <img src={alphonso} alt="Mango" className="w-full h-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Alphonso Mango</h1>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Price
              </label>
              <p className="text-gray-700">Rs. 599</p>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Quantity Available
              </label>
              <p className="text-gray-700">500 KG</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 border border-red-800 md:w-1/2 mx-4 mb-4">
          <h1 className="text-3xl text-red-800 font-bold mb-4">Place Your Order</h1>
          <form className="flex flex-col">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Select Grade
              </label>
              <select className="block w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 mb-2 rounded focus:outline-none focus:bg-white" id="grade">
                <option value="A1+">A1+</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Select Time Period
              </label>
              <select
                className="block w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 mb-2 rounded focus:outline-none focus:bg-white"
                id="timePeriod"
              >
                <option value="23 March to 29 March (Week 2)">08 May to 22 March </option>
                <option value="23 March to 29 March (Week 2)">22 May to 05 June </option>
                <option value="23 March to 29 March (Week 2)">05 June to 19 June </option>

              </select>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Quantity KG.
              </label>
              <input
                type="number"
                className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-2 rounded focus:outline-none"
                id="quantity"/>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit">
              Buy Now
            </button>
          </form>
        </div>
      </div>
  </>
  )
}

export default Ordering */

