import React from 'react'
import mango1 from '../../assets/mango1.png'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Cform() {
  return (
    <div className="container mx-auto px-4 flex h-1/4">
        <div className="bg-white p-2 border border-red-500 w-1/2">
            <div className="max-w-md mx-auto p-4 pt-4 md:p-3 lg:p-6">
                <h1 className="text-2xl text-lime-500 font-bold mb-4">Contact Us</h1>
                <div>
                <p className="text-red-800 mb-4"><IoCall /> Phone: +94 711313440 </p>
                </div>
                <p className="text-red-800 mb-4"><MdEmail />Email: <a href="mangoMart@gmail.com" className="text-blue-600 hover:text-blue-800">hello@mangoMart.com</a></p>
                <p className="text-red-800 mb-4"><FaLocationDot />Address: <br/>GT Mango store, 
                <be/>Omaragolla, <br/>Panliyadda, <br/>Melsiripura, <br/>North Western Province, <br/>Sri Lanka</p>
                <img src={mango1} alt="Contact Us Image" className="w-full h-64 mb-4" />
            </div>
        </div>
        <div className="bg-white p-4 border border-red-500 w-1/2">
            <div className="max-w-md mx-auto p-4 pt-4 md:p-6 lg:p-12">
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name*</label>
                    <input type="text" id="name" className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email address*</label>
                    <input type="email" id="email" className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Mobile Number*</label>
                    <input type="tel" id="phone" className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message*</label>
                    <textarea id="message" className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none" />
                </div>
                <button type="submit" className="bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                 Send
                </button>
           </form>
           </div>
        </div>
    </div>
  )
}

export default Cform