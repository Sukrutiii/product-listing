import React, { useEffect, useState } from 'react'
import './ProductListMobile.css'
import ProductCard from '../../productCard/ProductCard'
import { useSelector,useDispatch } from 'react-redux'
import Loading from '../../loading/Loading'
import { SetSuggestions } from '../../../features/productSlice'

function ProductListMobile() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.productList);
  const feature = useSelector((state) => state.product.feature);
  const category = useSelector((state)=>state.product.category);
  const [loading,setLoading] = useState(false);
  const [productData,setProductData] = useState([]);
  const sortProducts = () => {
    if (feature === "comment") {
      const filterData = products.slice().sort((a, b) => {
        if (a.comments.length > b.comments.length) {
          return -1;
        }
        if (a.comments.length < b.comments.length) {
          return 1;
        }
        return 0;
      });
      setProductData(filterData)
    }
    else {
      const filterData = products.slice().sort((a, b) => {
        if (a.upVotes_id.length > b.upVotes_id.length) {
          return -1;
        }
        if (a.upVotes_id.length < b.upVotes_id.length) {
          return 1;
        }
        return 0;
      });
      setProductData(filterData);
    }
    
  }


  const setCount = ()=>{
    let count = 0;
    for(let i = 0;i<products.length;i++){
      console.log("JHHHHHH");
      if(category.toString()==='All') {
        count++
      }
      else{
        console.log("JHHHHHH");
        if(products[i].tag === category) count++;
      }
    }
    dispatch(SetSuggestions({count:count}))
  }
 

  useEffect(() => {
    setLoading(true)
    sortProducts();
    setLoading(false);
    setCount();
  },[feature])
  useEffect(() => {
    setLoading(true)
    sortProducts();
    setCount();
    setLoading(false);
  },[products])
  useEffect(() => {
    setLoading(true)
    sortProducts();
    setCount();
    setLoading(false);
  },[category])

  return (
    <div className='product__list__dk'>
      {
        (productData.length > 0) ?
          productData.map((product) => <ProductCard product={product} />)
          : (loading) ? <Loading/> : <div/>
      }
    </div>
  )
}

export default ProductListMobile