import React, { useEffect } from 'react'
import Icons from '../../assets'
import './styles.css'

const Nav = ({ position, isPlaying, dispatch, promoNumber }) => { 
    const handleNavClick = (pos) => {
        dispatch({ type: 'setPosition', value: pos })
    }

    const handlePlayClick = () => {
        dispatch({ type: 'setIsPlaying', value: !isPlaying})
    }

    return (
        <div className='carousel-nav'>
            <button className='nav-control-container' onClick={() => handleNavClick(0)}>
                <div className={`carousel-nav-${position === 0 ? 'active' : 'inactive'}`} />
            </button>
            <button className='nav-control-container' onClick={() => handleNavClick(1)}>
                <div className={`carousel-nav-${position === 1 ? 'active' : 'inactive'}`} />
            </button>
            <button className='nav-control-container' onClick={() => handleNavClick(2)}>
                <div className={`carousel-nav-${position === 2 ? 'active' : 'inactive'}`} />
            </button>
            <button className='nav-control-container' onClick={handlePlayClick}>
                <img className='play-control' src={Icons[isPlaying ? 'pause' : 'play']} alt='play-controls' />
            </button>
        </div>
    )
}

export default Nav