import React, { useState } from 'react'
import './Login.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Link, useNavigate} from 'react-router-dom'
import { Authorization } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Loading from '../../components/loading/Loading'

function Login() {

    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        password:'',
      })
    
      const onChangeInput = e =>{
        const {name,value}= e.target
        setUser({...user,[name]:value})
      }

      const submitData = async (e)=>{
        e.preventDefault();
        setLoading(true)
        console.log(user);
        try{
            const response = await axios.post('https://product-listing-40mx.onrender.com/user/login',user);
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                console.log(response.data)
                const token = response.data.token;
                localStorage.setItem("token",token);
                const userData = {
                    email:response.data.email,
                    name:response.data.name,
                    id:response.data.user_id,
                    login:true,
                }
                dispatch(Authorization(userData))
                navigate('/',{replace:true})
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }   
      }
    return (
        <div className="login__container">
            <div className="login__form__container">
                <p>Feedback</p>
                <article>Add your products and give us your valuable feedback</article>
                <form action="" className='login__form' onSubmit={submitData}>
                    <div className="input__container">
                        <MdOutlineEmail/>
                        <input type="text" name='email' placeholder='Email' onChange={onChangeInput} />
                    </div>
                    <div className="input__container">
                        <RiLockPasswordFill/>
                        <input type="text" name='password' placeholder='Password' onChange={onChangeInput} />
                    </div>
                    <p>Don't have an account ? <Link to='/signup' >Signup</Link></p>
                    <button>{
                        (loading) ? <Loading/> : <p>Login</p>
                    }</button>
                </form>
            </div>
        </div>
    )
}

export default Login