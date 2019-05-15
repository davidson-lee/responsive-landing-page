import React from 'react'
import './styles.css'

const Promo = ({ data }) => {
    return (
        <div className={`carousel-promo`} >
            <div className='img-container'>
                <img className='carousel-promo-img' src={data.image} alt='Kitten-placeholder' />
            </div>
            <div className={`carousel-promo-text-container`}>
                <h1>
                    {data.title}
                </h1>
                <h3>
                    {data.description}
                </h3>
            </div>
        </div>
    )
}

export default Promo