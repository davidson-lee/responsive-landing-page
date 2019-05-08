import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutContext'
import './styles.css'


const Promo = ({ data }) => {
    const isMobile = useContext(LayoutContext)

    console.log(data.type)

    return (
        <div className={`promo-${data.type}${isMobile ? '-mobile' : ''}`} style={{
            background: data.bg,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {data.type === 'top' || data.type === 'sub-large' ? 
            <div className='img-container'>
                <img className='top-promo-hero-img' src='http://placekitten.com/500/500' alt='Kitten-placeholder' />
            </div>
            : null}
            <div className={`promo-${data.type}-text-container`}>
                <h1>
                    {data.title}
                </h1>
                <h3>
                    {data.description}
                </h3>
            </div>
            {data.type === 'main' ? 
            <div className='img-container'>
                <img className='top-promo-hero-img' src='http://placekitten.com/500/500' alt='Kitten-placeholder' /> 
            </div>
            : null}
        </div>
    )
}

export default Promo