import React, { useState } from 'react'
import './Login.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill,BsPhone} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Authorization } from '../../features/userSlice'
import { toast } from 'react-toastify'
import Loading from '../../components/loading/Loading'

function Signup() {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        password:'',
        name:'',
        phone:''
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
            const response1 = await axios.post('https://product-feedback-aaxq.onrender.com/user/register',user);
            const user1 = {
                email:user.email,
                password:user.password
            }
            const response = await axios.post('https://product-feedback-aaxq.onrender.com/user/login',user1);
            if(response1.data.success === 'false'){
                toast.error(response1.data.msg,{
                    position: toast.POSITION.TOP_CENTER
                })
            }
            else{
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
                        <BsFillPersonFill/>
                        <input type="text" name='name' onChange={onChangeInput} placeholder='Name' />
                    </div>
                    <div className="input__container">
                        <MdOutlineEmail/>
                        <input type="text" name='email' onChange={onChangeInput} placeholder='Email' />
                    </div>
                    <div className="input__container">
                        <BsPhone/>
                        <input type="text" name='phone' onChange={onChangeInput} placeholder='Phone no' />
                    </div>
                    <div className="input__container">
                        <RiLockPasswordFill/>
                        <input type="text" name='password' onChange={onChangeInput} placeholder='Password' />
                    </div>
                    <p>Already have an account ? <Link to='/login' >Login</Link></p>
                    <button>{ (loading) ? <Loading/> : <p>Signup</p>}</button>
                </form>
            </div>
        </div>
    )
}

export default Signup