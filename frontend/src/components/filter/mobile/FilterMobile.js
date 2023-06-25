import React, { useState } from 'react'
import './FilterMobile.css'
import { useDispatch } from 'react-redux'
import { SetCategory } from '../../../features/productSlice';

function FilterMobile() {
  const dispatch = useDispatch();
  const [filter,setFilter] = useState('All')
  const selectFilter = (filterData)=>{
    setFilter(filterData);
    dispatch(SetCategory({category:filterData}))
  }
  return (
    
      <div className="filter__main__container__mb">
          <p>Filter :</p>
          {(filter==='All') ? <p className='selected__filter__mb' onClick={()=>selectFilter('All')}>All</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('All')} >All</p>}

          {(filter==='Fintech') ? <p className='selected__filter__mb' onClick={()=>selectFilter('Fintech')}>Fintech</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('Fintech')} >Fintech</p>}

          {(filter==='Edtech') ? <p className='selected__filter__mb' onClick={()=>selectFilter('Edtech')}>Edtech</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('Edtech')} >Edtech</p>}

          {(filter==='B2B') ? <p className='selected__filter__mb' onClick={()=>selectFilter('B2B')}>B2B</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('B2B')} >B2B</p>}

          {(filter==='Saas') ? <p className='selected__filter__mb' onClick={()=>selectFilter('Saas')}>Saas</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('Saas')} >Saas</p>}

          {(filter==='MediTech') ? <p className='selected__filter__mb' onClick={()=>selectFilter('MediTech')}>MediTech</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('MediTech')} >MediTech</p>}

          {(filter==='AgriTech') ? <p className='selected__filter__mb' onClick={()=>selectFilter('AgriTech')}>AgriTech</p> : <p className='not__selected__filter__mb' onClick={()=>selectFilter('AgriTech')} >AgriTech</p>}

      </div>
  )
}

export default FilterMobile