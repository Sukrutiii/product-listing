import React from 'react'
import './HomeMobile.css'
import Header from '../../../components/header/Header'
import Advertise from '../../../components/advertise/Advertise'
import Filter from '../../../components/filter/Filter'
import AddProduct from '../../../components/addProduct/AddProduct'
import ProductList from '../../../components/productList/ProductList'

function HomeMobile() {
  return (
    <div className="home__container__mb">
      <div className="home__container__header__mb">
        <Header/>
      </div>
      <div className="home__container__advertise__mb">
        <Advertise/>
      </div>
      <div className="home__container__productlist__mb">
        <div >
          <AddProduct/>
          <Filter/>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default HomeMobile