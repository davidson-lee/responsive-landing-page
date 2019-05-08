import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutContext'
import './styles.css';

const Footer = (props) => {
    const isMobile = useContext(LayoutContext)

    return (
        <div className='footer'>
            <div className='footer-terms'>
                Terms and Conditions
            </div>
            {!isMobile ? 
                <div className='footer-links'>
                        Link
                        Link
                        Link
                        Icon
                        Icon
                        Icon
                        Name
                </div>
                : null
            }
        </div>
    )
}

export default Footer