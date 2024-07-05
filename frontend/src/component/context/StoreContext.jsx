import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem,setCartItem] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [mango_list,setMangolist] = useState([])
    

    const addToCart = async (itemId) => {
        console.log(itemId);
        if (!cartItem[itemId]){
            setCartItem((prev)=> ({...prev,[itemId]:1}));
        }
        else {
            setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]+1}));
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItem) {
            if (cartItem[itemId] > 0) {
                const itemInfo = mango_list.find((product) => product._id.toString() === itemId.toString());
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItem[itemId];
                }
            }
        }
        return totalAmount;
    };

    const fetchMangolist = async () => {
        const response = await axios.get(url+"/api/mango/list");
        setMangolist(response.data.data);
    }

    const loadCartData = async(token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItem(response.data.cartData);
    }

    useEffect(() => {
        
        async function loadData(){
            await fetchMangolist();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        mango_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;