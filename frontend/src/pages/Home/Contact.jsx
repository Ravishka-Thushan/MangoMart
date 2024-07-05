import React from 'react'
import NavigationBar from '../../component/common/NavigationBar'
import BodyContent from '../../component/body/BodyContent'
import Cform from './Cform'
import Footer from '../../component/common/Footer'


function Contact() {
  return (
    <>
      <NavigationBar />
      <div className="app">
        <BodyContent>
          <Cform />
        </BodyContent>
      </div>
      <Footer/>
    </>
  );
}

export default Contact