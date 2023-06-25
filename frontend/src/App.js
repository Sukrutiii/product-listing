import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/home/Home';
import Login from './layout/auth/Login';
import Signup from './layout/auth/Signup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { AddProducts } from './features/productSlice';
import { Authorization } from './features/userSlice';
import Loading from './components/loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('https://product-listing-40mx.onrender.com/user/verify', {
        headers: {
          'Authorization': token,
        }
      });
      if (response.data.success === true) {
        const data = response.data;
        const user = {
          email: data.user.email,
          name: data.user.name,
          login: data.success,
          id: data.user._id
        }
        dispatch(Authorization(user));
      }
    }
  }

  const loadProducts = async () => {
    const response = await axios.get('https://product-listing-40mx.onrender.com/product');
    const productsData = response.data.products
    const data = {
      productsData: productsData,
      getProducts: true
    }
    dispatch(AddProducts(data))
    setLoading(false);
  }


  useEffect(() => {
    auth();
    loadProducts();
  }, [])


  return (
    <div className="App">
      {
        (loading) ? <div className="loading__container__homepage">
          <p style={{ fontSize: "20px", marginTop: "50px" }}>Product Listing</p>
          <Loading /> </div> :
          <>
            <div id="popup-root" />
            <ToastContainer/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </BrowserRouter>
          </>
      }
    </div>
  );
}

export default App;
