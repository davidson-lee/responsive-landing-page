import React, { useEffect, useReducer } from 'react'
import CarouselPromo from '../CarouselPromo'
import CarouselNav from '../CarouselNav'
import './styles.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'setPosition':
            return {...state, position: action.value}
        case 'setIsPlaying':
            return {...state, isPlaying: action.value}
        default:
            return state
    }
}

const initialState = {
    position: 0,
    navChanged: false,
    isPlaying: true,
    stopPlaying: false
}

const Carousel = ({ data }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(data)

    useEffect(() => {
        if (state.isPlaying) {
            const timeout = setTimeout(() => {
                state.position === data.length - 1
                    ? dispatch({type: 'setPosition', value: 0})
                    : dispatch({type: 'setPosition', value: (state.position + 1)})
            }, 5000);
            return () => clearTimeout(timeout)
        }
    }, [state.currentIndex, state.isPlaying, data.length, state.position])

    return (
        <div className='carousel-container'>
            <div className='carousel-nav-container'>
                <CarouselNav 
                    position={state.position}
                    isPlaying={state.isPlaying}
                    promoNumber={data.length} 
                    dispatch={dispatch}
                />
            </div>
            <button className='carousel-promo-container'>
                <CarouselPromo data={data[state.position]} />
            </button>
        </div>
    )
}

export default Carousel