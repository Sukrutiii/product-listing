import React, { useState } from 'react'
import HomeMobile from './mobile/HomeMobile';
import HomeDesktop from './desktop/HomeDesktop';

function Home() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);    
    return width < breakpoint ? <HomeMobile /> : <HomeDesktop />;
}

export default Home