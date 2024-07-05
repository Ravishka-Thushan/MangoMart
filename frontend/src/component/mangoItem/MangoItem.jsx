import { useContext } from 'react'
import PropTypes from 'prop-types';
import './MangoItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext';


function MangoItem({id,name,price,image}) {

    const {cartItem,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='mango-item'>
        <div className="mango-item-img-container">
            <img className='mango-item-image' src={url+"/images/"+image} alt=""/>
            {!cartItem[id] ? (
                <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add_button"/>
                ):(<div className='mango-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon"/>
                        <p>{cartItem[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="plus_icon"/> 
                    </div>
            )}
        </div>
        <div className="mango-item-info">
            <div className="mango-item-name-rating">
                <p>{name}</p>
                <img src = {assets.rating_starts} alt="rating"/>
            </div>
            <p className='mango-item-price'>Rs.{price} per 1KG</p>
        </div>
    </div>
  )
}

MangoItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default MangoItem