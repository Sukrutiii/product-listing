import React from 'react'
import './AddProductDesktop.css'
import AddProductPopUp from '../../pop-ups/addProduct/AddProductPopUp'
import 'reactjs-popup/dist/index.css';
import { useSelector } from 'react-redux';
import SignupPopUp from '../../pop-ups/signup/SignupPopUp';
import { useDispatch } from 'react-redux';
import { SortByComment } from '../../../features/productSlice';

function AddProductDesktop() {
  const login = useSelector(state => state.user.login)
  const suggestions = useSelector(state=>state.product.suggestions);
  const dispatch = useDispatch()

  const onChangeFeature=(e)=>{
    dispatch(SortByComment({feature:e.target.value}));
  }
  
  return (
    <div className="add__product__container__dk">
      <div className="add__product__subcontainer__dk">
        <p className='suggestions__dk' style={{marginLeft:"10px",fontWeight:"bold"}}> {suggestions} <span style={{fontWeight:"normal"}}>Suggestions</span> </p>
        <div className="sort__by__dk">
          <p>SortBy  </p>
          <select className='filter__item__dk' onChange={onChangeFeature}>
            <option defaultChecked  value='comment'  name="comment">Comments</option>
            <option  value='upvote' name="upvote">UpVotes</option>
          </select>
        </div>
      </div>
      {
        (login) ? <AddProductPopUp/> : <SignupPopUp button_name="+ Add Product"/>
      }
      
    </div>
  )
}

export default AddProductDesktop