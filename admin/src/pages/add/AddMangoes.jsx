import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function AddMangoes() {

  const url = 'http://localhost:4000';

  const [image, setImage] = useState(null);

  const onChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const [data,setData] = useState({
    name: '',
    price: '',
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', Number(data.price));
    formData.append('image', image);
    const response = await axios.post(`${url}/api/mango/add`, formData);

    if (response.data.success) {
      setData({
        name: '',
        price: '',
      })
      setImage(false)
      toast.success(response.data.message)
    } 
    else{
      toast.error(response.data.message)
    }
  }

  return (
    <>
    <div className="addMangoes">
        <form className="flex-col" onSubmit={onSubmitHandler}>
        <p className="title">Add Mangoes</p>
            <div className="add-img-upload flex-col">
              <p>Upload Image</p>
              <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
              </label>
              <input onChange={onChange} type='file' id='image' hidden required/>
            </div>
            <div className="add-mango-name flex-col">
              <p>Mango Name</p>
              <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required/>
            </div>
            <div className="add-mango-price flex-col">
              <p>Mango Price</p>
              <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='RS.100' />
            </div>
            <button type='submit' className='add-btn' > ADD </button>
        </form>
    </div>
    </>
  )
}

export default AddMangoes