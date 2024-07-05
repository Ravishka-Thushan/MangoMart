import React from 'react'
import './Varieties.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaDeleteLeft } from "react-icons/fa6";

function Varieties() {

  const url = 'http://localhost:4000';
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/mango/list`);

    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else{
      toast.error("Error")
    }
  }

  const removeMango = async(mangoId) =>{
    const response = await axios.post(`${url}/api/mango/remove`, {id:mangoId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
    }, []);

  return (
    <>
    <div className='list add flex-col'>
      <p className='title'>All Mango Varieties</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image} alt='mango_img' />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p onClick={() => removeMango(item._id)}><FaDeleteLeft className='imgg'/></p>
            </div> 
            )
        })}
      </div>

    </div>
    </>
  )
}

export default Varieties