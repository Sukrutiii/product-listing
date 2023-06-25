import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import Loading from '../../loading/Loading'
import {  EditProduct } from '../../../features/productSlice';

function EditProductPopUp({name,tag,description,id}) {
  const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const [product,setProduct] = useState({
        name:name,
        tag:tag,
        description:description,
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
            const response = await axios.put(`https://product-feedback-aaxq.onrender.com/product/${id}`,product,{
              headers:{
                'Authorization':token
              }
            });
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                dispatch(EditProduct({name:product.name,description:product.description,tag:product.tag,id:id}));
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }   
      }
  return (
    
    <Popup
      trigger={<button className="button edit__button__mb">Edit</button>}
      modal
      nested
    >
    {close =>
      <div className="add__product__popup__container">
        <div className="left__container__addproduct__popup__mb">
          <p>Edit your product</p>
          <input type="text" name='name' value={product.name} onChange={onChangeInput} placeholder='Name of Product' />
          <select name="tag" value={product.tag} onChange={onChangeInput}>
                            <option value="Fintech">Fintech</option>
                            <option value="Edtech">Edtech</option>
                            <option value="B2B">B2B</option>
                            <option value="Saas">Saas</option>
                            <option value="AgriTech">AgriTech</option>
                            <option value="MediTech">MediTech</option>
                        </select>
          <input type="text" name='logourl' placeholder='Add Logo url' />
          <input type="text" name='link' placeholder='Link of Product' />
          <input type="text" name='description' value={product.description} onChange={onChangeInput} placeholder='Add Description' />
          <button onClick={()=>{
            submitData();
            if(!loading){
            close();
            }
          }}>{(loading)? <Loading/> :'Edit'}</button>
        </div>
      </div>
    }
    </Popup>
    )
    
}

export default EditProductPopUp