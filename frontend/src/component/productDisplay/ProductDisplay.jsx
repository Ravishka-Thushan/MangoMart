import { useContext } from 'react';
import './ProductDisplay.css'
import { StoreContext } from '../context/StoreContext'
import MangoItem from '../mangoItem/MangoItem'
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';



function ProductDisplay() {
    const context = useContext(StoreContext);

    if (!context) {
        return <div>Loading...</div>; // Handle the case when context is null
    }
    const { mango_list } = context;

  return (
    <>
    <NavigationBar/>
    <div className='app'>
    <div className='mango-display' id='mango-display'>
      <h2 className='title'>Fresh Mangoes near you.</h2>
        <div className="mango-display-list">
            {mango_list.map((item, index) => (
               (<MangoItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />)
            ))}
        </div>
    </div>
    </div>
    <Footer/>
    </>

  )
}

export default ProductDisplay