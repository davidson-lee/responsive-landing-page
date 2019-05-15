import React from 'react'
import './styles.css'
import Button from '../Button'

const Promo = ({ data }) => {
    return (
        <div className='sub-promo'>
            <img className='sub-promo-img' src={data.image} alt='sub-promo' />
            <div className='sub-promo-text-container'>
                <h1>
                    {data.title}
                </h1>
                <h3>
                    {data.description}
                </h3>
                <Button title='Learn More' color='rgb(236, 124, 35)' />
            </div>
        </div>
    )
}

export default Promo