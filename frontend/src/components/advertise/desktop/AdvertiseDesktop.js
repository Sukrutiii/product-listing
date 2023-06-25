import React from 'react'
import './AdvertiseDesktop.css'
import AdvertiseImage from '../../../assets/advertiseImage.png'

function AdvertiseDesktop() {
  return (
    <div className="advertise__container__dk">
      <img src={AdvertiseImage} alt="" className="advertise__image__dk" />
      <div className="advertise__text__dk">
        <p className='advertise__text__main__dk'>Add your products and give your valuable feedback</p>
        <p className='advertise__text__sub__dk'>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</p>
      </div>
    </div>
  )
}

export default AdvertiseDesktop