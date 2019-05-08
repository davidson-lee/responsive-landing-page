import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Promo from '../../components/Promo'

import { LayoutContext } from '../../LayoutContext'
import mockPromoData from './mockPromoData'

import './styles.css'

const Landing = (props) => {
    const isMobile = useContext(LayoutContext)

    const topPromo = mockPromoData.find(el => el.type === 'top')
    const mainPromos = mockPromoData.filter(el => el.type === 'main')
    const subSmallPromos = mockPromoData.filter(el => el.type === 'sub-small')
    const subLargePromos = mockPromoData.filter(el => el.type === 'sub-large')

    return (
        <div className={`landing${isMobile ? ' mobile' : ''}`}>
            <Navbar />
            <Promo data={topPromo}/>
            {mainPromos.map((el, i) => {
                return <Promo key={i} data={el}/>
            })}
            <div className={`sub-promo-container${isMobile ? ' mobile' : ''}`}>
                {subSmallPromos.map((el, i) => {
                    return <Promo key={i} data={el}/>
                })}
            </div>
            {subLargePromos.map((el, i) => {
                return <Promo key={i} data={el}/>
            })}
            <Footer />
        </div>
    )
}

export default Landing