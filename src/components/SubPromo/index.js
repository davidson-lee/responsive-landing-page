import React from 'react'
import './styles.css'


const Promo = ({ data }) => {
    return (
        <div className={`sub-promo`} style={{
            backgroundImage: `url("${data.image}")`
        }}>
            <div className={`sub-promo-text-container`}>
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