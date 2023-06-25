import React, { useState } from 'react'
import ProductListMobile from './mobile/ProductListMobile';
import ProductListDesktop from './desktop/ProductListDesktop';

function ProductList() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);    
    return width < breakpoint ? <ProductListMobile/> : <ProductListDesktop />;
}

export default ProductList