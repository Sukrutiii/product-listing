import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Loading from '../../loading/Loading'
import LoginMobilePopUp from '../login/LoginMobilePopUp';
import { useNavigate } from 'react-router-dom';


function SignupMobilePopUp({button_name}) {
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
            const response = await axios.post('https://product-listing-40mx.onrender.com/user/register',user);
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
      trigger={<button className="button add__product">{button_name}</button>}
      modal
      nested
    >
      <div className="add__product__popup__container">
        <div className="left__container__addproduct__popup__mb">
          <p>SignUp</p>
          <input type="text" name='name' onChange={onChangeInput} placeholder='Name' />
          <input type="text" name='email' onChange={onChangeInput} placeholder='Email' />
          <input type="text" name='phone' placeholder='Phone' />
          <input type="text" name='password' placeholder='Password' />
          <p className="left_container_link">Already have an account?<LoginMobilePopUp>Login</LoginMobilePopUp></p>
          <button onClick={submitData}>{(loading)? <Loading/> :'Signup'}</button>
        </div>
      </div>
    </Popup>
  )
}

export default SignupMobilePopUp