import React, { useState } from 'react'
import AddProductMobile from './mobile/AddProductMobile';
import AddProductDesktop from './desktop/AddProductDesktop';

function AddProduct() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    
    return width < breakpoint ? <AddProductMobile /> : <AddProductDesktop/>;
}

export default AddProduct