import React, { useState } from 'react'
import './AddProductMobile.css'
import AddProductMobilePopUp from '../../pop-ups/addProduct/AddProductMobilePopUp'
import 'reactjs-popup/dist/index.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SortByComment } from '../../../features/productSlice';
import SignupMobilePopUp from '../../pop-ups/signup/SignupMobilePopUp';

function AddProductMobile() {
  const login = useSelector(state => state.user.login)
  const suggestions = useSelector(state=>state.product.suggestions);
  const dispatch = useDispatch()
  const [feature,setFeature] = useState('comment');

  const onChangeFeature=(e)=>{
    setFeature(e.target.value);
    dispatch(SortByComment({feature:e.target.value}));
  }
  
  return (
    <div className="add__product__container__mb">
      <div className="add__product__subcontainer__mb">
        <p className='suggestions__mb' style={{marginLeft:"10px",fontWeight:"bold"}}> {suggestions} <span style={{fontWeight:"normal"}}>Suggestions</span> </p>
        <div className="sort__by__mb">
          <p>SortBy  </p>
          <select className='filter__item__mb' onChange={onChangeFeature}>
            <option defaultChecked  value='comment'  name="comment">Comments</option>
            <option  value='upvote' name="upvote">UpVotes</option>
          </select>
        </div>
      </div>
      {
        (login) ? <AddProductMobilePopUp/> : <SignupMobilePopUp/>
      }
      
    </div>
  )
}

export default AddProductMobile