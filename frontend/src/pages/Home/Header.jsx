import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


function Header() {

    const navigate = useNavigate();

  return (

    <div>

        <div className="relative flex h-1/2 w-auto overflow-hidden">

            {/* Background Image */}
            <div className="header-background">

                {/* Left Container */}
                <div className="w-2/3 bg-transparent top-20 left-54 flex justify-center items-center p-4 relative z-10">
                    <div className="container text-center ">
                        <h1 className="aj-page-title text-4xl text-lime-600 font-bold text-wrap mb-4">A Basket Full of <br/> Mango Love!</h1>
                        <p className="aj-banner-feature-content text-lg mb-4 text-red-800"> 100% Authentic mangoes, </p>
                        <p className="aj-banner-feature-content text-lg mb-4 text-red-800">Carbide & chemical free, </p>
                        <p className="aj-banner-feature-content text-lg mb-4 text-red-800">Farm to home delivery. </p>
            
                        <button onClick={()=> navigate('/ProductDisplay')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Order Now →</button>
                    </div>
                </div>

            </div>
                {/*<div className="w-1/2 bg-orange-100 flex justify-center items-center bg">
                    <div className="container mx-auto p-4">
                        <h1 className="text-4xl text-lime-600 font-bold mb-4">A Basket Full of Mango Love!</h1>
                        <p className="text-lg mb-8 text-red-800">100% Authentic mangoes, <br/>Carbide & chemical free, <br/>Farm to home delivery</p>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Order Now →</button>
                    </div>
                </div>*/}

                {/* Right Container 
                <div className="w-1/2 bg-transparent flex justify-center items-center p-4 relative z-10">
                    <div className="container mx-auto">
                        <img src={mango6} alt="Mango" className="w-auto rounded-2xl" />
                    </div>
                </div>

                {/*<div className="w-1/2 bg-gray-100 flex justify-center items-center">
                    <div className="container mx-auto p-4">   
                        <img src={mango6} alt="Mango" className="w-auto"/>
                    </div>
                </div>*/}
      </div>
  </div>
    
  )
}

export default Header