import React, { useState } from 'react'
import ProductCardMobile from './mobile/ProductCardMobile';
import ProductCardDesktop from './desktop/ProductCardDesktop';

function ProductCard({product}) {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return width < breakpoint ? < ProductCardMobile product={product} /> : <ProductCardDesktop product={product} />;
}

export default ProductCard