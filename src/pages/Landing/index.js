import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SubPromo from '../../components/SubPromo'
import Carousel from '../../components/Carousel'
import InfoLarge from '../../components/InfoLarge'
import InfoSmall from '../../components/InfoSmall'

import mockPromoData from './mockPromoData'

import './styles.css'

const Landing = (props) => {
    const mainPromos = mockPromoData.filter(el => el.title.includes('Main Promo'))
    const subPromos = mockPromoData.filter(el => el.title.includes('Sub Promo'))

    return (
        <div className={'landing'}>
            <Navbar />
            <Carousel data={mainPromos}/>
            <div className='responsive-flex-container'>
                {subPromos.map(el => {
                    return <SubPromo data={el}/>
                })}
            </div>
            <InfoLarge />
            <div className='responsive-flex-container-sm'>
                <InfoSmall title='Info Small 1' description='Info Small Description' color='rgb(236, 124, 35)'/>
                <InfoSmall title='Info Small 2' description='Info Small Description' color='rgb(48, 125, 191)'/>
            </div>
            <Footer />
        </div>
    )
}

export default Landing