import React from 'react'
import './styles.css'
import Button from '../Button'

const InfoSmall = ({ title, description, color }) => {
    return (
        <div className='info-small'>
            {title === 'Info Small 1'
                ? <img className='info-small-img' src='https://picsum.photos/id/119/1920/1080' alt='info-small-img' />
                : null
            }
            <div className={`info-small-text-container`}>
                <h1 style={{color: color}}>
                    {title}
                </h1>
                <h3 style={{color: 'rgb(87,87,87)'}}>
                    {description}
                </h3>
                <Button title='Learn More' color={title === 'Info Small 1' ? 'rgb(236, 124, 35)' : 'rgb(0,0,0)'} />
            </div>
        </div>
    )
}

export default InfoSmall