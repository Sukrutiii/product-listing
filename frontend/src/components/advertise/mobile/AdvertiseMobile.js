import React from 'react'
import './AdvertiseMobile.css'
import AdvertiseImage from '../../../assets/advertiseImage.png'

function AdvertiseMobile() {
  return (
    <div className="advertise__container__mb">
      <img src={AdvertiseImage} alt="" className="advertise__image__mb" />
      <div className="advertise__text__mb">
        <p className='advertise__text__main__mb'>Add your products and give your valuable feedback</p>
        <p className='advertise__text__sub__mb'>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</p>
      </div>
    </div>
  )
}

export default AdvertiseMobile