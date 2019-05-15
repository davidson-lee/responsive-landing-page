import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SubPromo from '../../components/SubPromo'
import Carousel from '../../components/Carousel'

import { LayoutContext } from '../../LayoutContext'
import mockPromoData from './mockPromoData'

import './styles.css'

const Landing = (props) => {
    const isMobile = useContext(LayoutContext)

    const mainPromos = mockPromoData.filter(el => el.title.includes('Main Promo'))
    const subPromos = mockPromoData.filter(el => el.title.includes('Sub Promo'))

    return (
        <div className={`landing${isMobile ? ' mobile' : ''}`}>
            <Navbar />
            <Carousel data={mainPromos}/>
            <div className='sub-promo-container'>
                {subPromos.map(el => {
                    return <SubPromo data={el}/>
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Landing