import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './AddProductPopUp.css'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import Loading from '../../loading/Loading'
import { AddProduct } from '../../../features/productSlice';

function AddProductPopUp() {
  const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const [product,setProduct] = useState({
        name:'',
        tag:'Fintech',
        description:'',
      })
    
      const onChangeInput = e =>{
        const {name,value}= e.target
        setProduct({...product,[name]:value})
      }

      const submitData = async (e)=>{
        setLoading(true)
        console.log(product);
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('https://product-listing-40mx.onrender.com/product',product,{
              headers:{
                'Authorization':token
              }
            });
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                const product = response.data.Product;
                dispatch(AddProduct({product:product}));
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }   
      }
  return (
    
    <Popup
      trigger={<button className="button add__product">+ Add Product</button>}
      modal
      nested
    >
    {close =>
      <div className="add__product__popup__container">
        <div className="left__container__addproduct__popup">
          <p>Add your product</p>
          <input type="text" name='name' onChange={onChangeInput} placeholder='Name of Product' />
          <select name="tag" onChange={onChangeInput}>
                            <option value="Fintech">Fintech</option>
                            <option value="Edtech">Edtech</option>
                            <option value="B2B">B2B</option>
                            <option value="Saas">Saas</option>
                            <option value="AgriTech">AgriTech</option>
                            <option value="MediTech">MediTech</option>
                        </select>
          <input type="text" name='logourl' placeholder='Add Logo url' />
          <input type="text" name='link' placeholder='Link of Product' />
          <input type="text" name='description' onChange={onChangeInput} placeholder='Add Description' />
          <button onClick={()=>{
            submitData();
            if(!loading){
            close();
            }
          }}>{(loading)? <Loading/> :'+Add'}</button>
        </div>
        <div className="right__container__addproduct__popup">
            <p>Feedback</p>
            <article>Add your product and rate other items.............</article>
        </div>
      </div>
    }
    </Popup>
    )
    
}

export default AddProductPopUp