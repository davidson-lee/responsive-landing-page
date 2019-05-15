import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutContext'
import './styles.css'

const Navbar = (props) => {
    const isMobile = useContext(LayoutContext)

    return (
        <div className='navbar-wrapper'>
            <div className='navbar'>
                <div className='navbar-logo-container'>
                    <img className='navbar-logo' alt='logo' src='https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' />
                </div>
            </div>
        </div>
    )
}

export default Navbar