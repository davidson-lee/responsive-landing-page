import React from 'react'
import './styles.css'

const Button = ({ title, color }) => {
    return (
        <button className='button' style={{backgroundColor: color}}>
            <h4>
                {title}
            </h4>
        </button>
    )
}

export default Button