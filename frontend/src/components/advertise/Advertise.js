import React, { useState } from 'react'
import AdvertiseMobile from './mobile/AdvertiseMobile';
import AdvertiseDesktop from './desktop/AdvertiseDesktop';

function Advertise() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    
    return width < breakpoint ? <AdvertiseMobile /> : <AdvertiseDesktop />;
}

export default Advertise