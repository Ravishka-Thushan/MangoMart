import { useState } from 'react'
import NavigationBar from '../src/component/common/NavigationBar'
import BodyContent from './component/body/BodyContent'
import Footer from './component/common/Footer'
import Home from './pages/Home/Home'
import Login from './component/Login/Login'
import StoreContextProvider from './component/context/StoreContext'



function App() {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <StoreContextProvider>
    {showLogin && <Login setShowLogin={setShowLogin} />}

        <div className='app'>

          <NavigationBar setShowLogin={setShowLogin}/>
            <BodyContent>
              <Home/>
            </BodyContent>

        </div>
            <Footer/>
    </StoreContextProvider>
    </>
  )
}

export default App
