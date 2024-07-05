import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../component/context/StoreContext";
import NavigationBar from "../../component/common/NavigationBar";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/common/Footer";

function CartPage() {
  const { cartItem, mango_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
    <NavigationBar/>
    <div className="app">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-item-title">
            <p>Mangoes</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {mango_list.map((item, index) => {
            console.log(mango_list);
            if (cartItem[item._id]> 0) {
              return (
                <>
                <div key={index}>
                  <div className="cart-item-title cart-item-items">
                    <img src={url+"/images/"+item.image} alt="mango_image" />
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <p>{cartItem[item._id]} Kg</p>
                    <p>Rs.{item.price * cartItem[item._id]}</p>
                    <img onClick={() => removeFromCart(item._id)} className="remove" src={assets.remove_icon_red} alt="remove_icon"/> 
                  </div>
                  <hr />
                </div>
                </>
              )
            }
            return null;
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>Rs.{getTotalCartAmount() === 0 ? 0 : 350}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+350}</b>
              </div>
            </div>
            <button onClick={()=> navigate('/Order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promo">
            <div>
              <p>If you have a promo code, Enter it here.</p>
              <div className="cart-promo-input">
                <input type="text" placeholder="Promo code"/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default CartPage;
