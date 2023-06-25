import React from 'react'
import './HomeDesktop.css'
import Header from '../../../components/header/Header'
import Advertise from '../../../components/advertise/Advertise'
import Filter from '../../../components/filter/Filter'
import AddProduct from '../../../components/addProduct/AddProduct'
import ProductList from '../../../components/productList/ProductList'

function HomeDesktop() {
  return (
    <div className="home__container__dk">
      <div className="home__container__header__dk">
        <Header/>
      </div>
      <div className="home__container__advertise__dk">
        <Advertise/>
      </div>
      <div className="home__container__productlist__dk">
        <div className="home__container__filter__dk">
          <Filter/>
        </div>
        <div className="home__container__addproduct__productlist__dk">
          <AddProduct/>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default HomeDesktop