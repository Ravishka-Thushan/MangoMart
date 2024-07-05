import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Login.css';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

function Login({setShowLogin}) {
    
    const {url, setToken} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Login");
    const [data,setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangeHandler =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if(currState === "Login"){
            newUrl += "/api/user/login";
        }else{
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            alert(response.data.message);
        }
    }


  return (
    <div className='login-popup'>
        <div className='login-popup-container'>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-red-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <div className='btn-img-container'>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-red-800 md:text-2xl dark:text-white">
                    {currState}
                </h1>
                <img className='close-btn' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close_icon"/>
                </div>

                <form onSubmit={onLogin} className="space-y-4 md:space-y-6">
                <div>
                    {currState==="Login" ? null :
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    } 
                    {currState==="Login" ? null :
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                    }
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input name="email" onChange={onChangeHandler} value={data.email} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="terms" name="terms" aria-describedby="terms-description" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link to="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</Link></label>
                    </div>
                </div>

                <button type="submit" className="w-full text-white bg-orange-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {currState==="Sign Up" ? "Create an account" : "Login"}
                </button>

                {currState==="Login"
                ? <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Create an new account? <Link onClick={()=>setCurrState("Sign Up")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</Link>
                  </p>
                : <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link onClick={()=>setCurrState("Login")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
                }
                </form>
            </div>
          </div>
        </section>
        </div>
    </div>
  )
}

Login.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
};

export default Login