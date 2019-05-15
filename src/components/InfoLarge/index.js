import React from 'react'
import Button from '../Button'
import './styles.css'


const InfoLarge = ({ data }) => {
    return (
        <div className='info-large'>
            <img className='info-large-img' src='https://picsum.photos/id/120/1920/540' alt='info-large' />
            <div className={`info-large-text-container`}>
                <h1>
                    Large Info
                </h1>
                <h3>
                    Large Info Description
                </h3>
                <Button title='Learn More' color='rgb(236, 124, 35)' />
            </div>
        </div>
    )
}

export default InfoLarge