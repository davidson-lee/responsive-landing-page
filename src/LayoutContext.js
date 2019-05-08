import React, { useState, createContext } from 'react'

export const LayoutContext = createContext();

export const LayoutProvider = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480 ? true : false)

    window.addEventListener('resize', () => {
        let throttled = false;

        if(!throttled) {
            if (isMobile && window.innerWidth >= 480) {
            throttled= true
            setTimeout(() => {
                throttled = false
            }, 200)
            setIsMobile(false)
            } else if (!isMobile && window.innerWidth <= 480) {
            throttled= true
            setTimeout(() => {
                throttled = false
            }, 200)
            setIsMobile(true)
            }
        }
    });

    return(
        <LayoutContext.Provider value={isMobile}>
            {props.children}
        </LayoutContext.Provider>
    )
}