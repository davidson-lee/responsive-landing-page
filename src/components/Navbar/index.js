import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutContext'
import './styles.css'

const Navbar = (props) => {
    const isMobile = useContext(LayoutContext)

    return (
        <div className={`navbar${isMobile ? ' mobile' : ''}`}>
            <div className='navbar-title'>
                Hello
            </div>
            <div className='navbar-menu'>
                <div className='menu-item'>
                    Item
                </div>
                <div className='menu-item'>
                    Item
                </div>
                <div className='menu-item'>
                    Item
                </div>
                <div className='menu-item'>
                    Item
                </div>
            </div>
            <div className='navbar-icons'>
                <div className='navbar-myaccount'>
                    My Account
                </div>
                <div className='navbar-find'>
                    My Account
                </div>
            </div>
        </div>
    )
}

export default Navbar