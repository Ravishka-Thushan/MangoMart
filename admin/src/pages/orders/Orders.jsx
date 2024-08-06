import React from 'react'
import './Orders.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';

function Orders() {
  const url = 'http://localhost:4000';
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async() => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[url])

  return (
    <>
    <div className="order add">
      <h2>Orders Page</h2>
      <div className="order-list">
          {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
            <p>{order.items.map((item,itemIndex)=>{
              if(itemIndex===order.items.length-1){
                return item.name+" x "+item.quantity+"Kg";
              }
              else{
                return item.name+" x "+item.quantity+"Kg"+",";
              }
            })}</p>
            <p className='order-item-name'>{order.firstName+" "+order.lastName}</p>
            <div className="order-item-address">
            <p>{order.street+", "}</p>
            <p>{order.city+", " + order.state+", " + order.country+", " +  order.zipcode+", "}</p>
            </div>
            <p className='order-item-phone'>{order.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Rs.{order.amount}.00</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Mango Processing">Mango Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Diliverd">Diliverd</option>
            </select>
          </div>
        ))};
      </div>
      </div>
    </>
  )
}

export default Orders