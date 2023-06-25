import React from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Authorization } from '../../features/userSlice'

function Header() {
  const login = useSelector((state) => state.user.login)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = ()=>{
    console.log("dvfs");
    navigate('/login/');
  }

  const signUpUser = ()=>{
    navigate('/signup')
  }

  const logOut = ()=>{
    localStorage.setItem('token','');
    const data ={
      login:false,
      email:'',
      name:'',
      id:''
    }
    dispatch(Authorization(data))
  }

  return (
    <div className="header__container">
      <p>Feedback</p>
      <div className="header__subcontainer">
        {
          (login) ? <><div className='login__signup' onClick={logOut}><p>Logout</p></div>
            <p>Hello</p>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" className='header__subcontainer__logo' alt="" /></> :<> <div className='login__signup' onClick={loginUser}> <p> Login</p></div><div onClick={signUpUser}> <p> Signup</p></div></>
        }
      </div>
    </div>
  )
}

export default Header