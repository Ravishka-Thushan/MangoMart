import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../component/context/StoreContext'
import axios from 'axios';
import NavigationBar from '../../component/common/NavigationBar';
import Footer from '../../component/common/Footer';
import { assets } from '../../assets/assets';
import { GrStatusGoodSmall } from "react-icons/gr";

function MyOrders() {

  const {url,token} = useContext(StoreContext);
  const [data,setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(`${url}/api/order/userorders`, { headers: { token }})
    setData(response.data.data);
  }
  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])
  
  return (
    <>
    <NavigationBar/>
    <div className='app'>
    <div className='my-orders'> 
    <h2 className='title'>My Orders</h2>
    <div className="container">
      {data.map((order,index)=>{
        return(
          <div key={index} className="my-orders-order">
            <img src={assets.parcel} alt="" />
            <p>{order.items.map((items,index)=>{
              if(index === order.items.length-1){
                return items.name+" x "+items.quantity+"Kg"
              }
              else{
                return items.name+" x "+items.quantity+"Kg"+","
              }
            })}</p>
            <p>Rs.{order.amount}.00</p>
            <p>Items: {order.items.length} </p>
            <p><span><GrStatusGoodSmall /></span> <b>{order.status}</b></p>
            <button>Track Order</button>
          </div>
        )
      })}
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default MyOrders