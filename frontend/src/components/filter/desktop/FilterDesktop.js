import React, { useState } from 'react'
import './FilterDesktop.css'
import { useDispatch } from 'react-redux'
import { SetCategory } from '../../../features/productSlice';

function FilterDesktop() {
  const dispatch = useDispatch();
  const [filter,setFilter] = useState('All')
  const selectFilter = (filterData)=>{
    setFilter(filterData);
    dispatch(SetCategory({category:filterData}))
  }
  return (
    <div className="filter__container__dk">
      <div className="apply__filter__container__dk">
        <p>Feedback</p>
        <article>Apply Filter</article>
      </div>
      <div className="filter__main__container__dk">
          {(filter==='All') ? <p className='selected__filter' onClick={()=>selectFilter('All')}>All</p> : <p className='not__selected__filter' onClick={()=>selectFilter('All')} >All</p>}

          {(filter==='Fintech') ? <p className='selected__filter' onClick={()=>selectFilter('Fintech')}>Fintech</p> : <p className='not__selected__filter' onClick={()=>selectFilter('Fintech')} >Fintech</p>}

          {(filter==='Edtech') ? <p className='selected__filter' onClick={()=>selectFilter('Edtech')}>Edtech</p> : <p className='not__selected__filter' onClick={()=>selectFilter('Edtech')} >Edtech</p>}

          {(filter==='B2B') ? <p className='selected__filter' onClick={()=>selectFilter('B2B')}>B2B</p> : <p className='not__selected__filter' onClick={()=>selectFilter('B2B')} >B2B</p>}

          {(filter==='Saas') ? <p className='selected__filter' onClick={()=>selectFilter('Saas')}>Saas</p> : <p className='not__selected__filter' onClick={()=>selectFilter('Saas')} >Saas</p>}

          {(filter==='MediTech') ? <p className='selected__filter' onClick={()=>selectFilter('MediTech')}>MediTech</p> : <p className='not__selected__filter' onClick={()=>selectFilter('MediTech')} >MediTech</p>}

          {(filter==='AgriTech') ? <p className='selected__filter' onClick={()=>selectFilter('AgriTech')}>AgriTech</p> : <p className='not__selected__filter' onClick={()=>selectFilter('AgriTech')} >AgriTech</p>}

      </div>
    </div>
  )
}

export default FilterDesktop