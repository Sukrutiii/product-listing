import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Loading from '../../loading/Loading'
import { Link, useNavigate } from 'react-router-dom';
import SignupPopUp from '../signup/SignupPopUp';


function LoginPopUp() {
  const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState({
        name:'',
        phone:'',
        email:'',
        password:''
      })
    
      const onChangeInput = e =>{
        const {name,value}= e.target
        setUser({...user,[name]:value})
      }

      const submitData = async ()=>{
        setLoading(true)
        console.log(user);
        try{
            const response = await axios.post('https://product-feedback-aaxq.onrender.com/user/register',user);
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                navigate('/login',{replace:true})
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }  
        setLoading(false); 
      }
  return (
    <Popup
      trigger={<button className="button add__product">Login</button>}
      modal
      nested
    >
      <div className="add__product__popup__container">
        <div className="left__container__addproduct__popup">
          <p>Login to continue</p>
          <input type="text" name='email' onChange={onChangeInput} placeholder='Email' />
          <input type="text" name='password' placeholder='Password' />
          <p className="left_container_link">Don't have an account?<SignupPopUp button_name="Sign up"></SignupPopUp></p> 
          <button onClick={submitData}>{(loading)? <Loading/> :'Login'}</button>
        </div>
        <div className="right__container__addproduct__popup">
            <p>Feedback</p>
            <article>Add your product and rate other items.............</article>
        </div>
      </div>
    </Popup>
  )
}

export default LoginPopUp