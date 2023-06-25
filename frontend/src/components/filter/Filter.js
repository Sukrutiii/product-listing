import React, { useState } from 'react'
import FilterMobile from './mobile/FilterMobile';
import FilterDesktop from './desktop/FilterDesktop';

function Filter() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);    
    return width < breakpoint ? < FilterMobile /> : <FilterDesktop />;
}

export default Filter