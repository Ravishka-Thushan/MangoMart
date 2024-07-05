import React from 'react'
import NavigationBar from '../../component/common/NavigationBar'
import BodyContent from '../../component/body/BodyContent'
import { Card } from "flowbite-react";
import about1 from '../../assets/about1.png'
import Footer from '../../component/common/Footer';

function About() {
  return (
    <>
    <NavigationBar/>
    <div className="app">
    <BodyContent>
        <div>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-semibold text-center mb-8 text-lime-600">About Us</h1>
                <div className="max-w-2xl mx-auto text-justify">
                    <p className="text-lg text-gray-700 mb-4">
                    Mango Basket is your way to goodness of Sri Lankan mangoes,
                     Mango is considered the king of fruits and is one of the most widely produced fruit in Sri Lanka. 
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                    It doesn’t matter which type of mango you love because at MangoMart you will find all of them in one place.</p>
                    <p className="text-lg text-gray-700">
                    We are a brand focusing on delivering all types of authentic Sri Lankan residue free mangoes to you.
                    If you are in the mood for a juicy mango, choose the type of mango you are craving for and buy it now. </p>
                    <img src={about1} alt="About Us" className="mx-auto mt-8" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>

    </BodyContent>
    </div>
    <Footer/>
    </>

  )
}

export default About