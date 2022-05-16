import React from 'react'
import popcorn from '../../assets/popcorn.png'

export const ContentHome = () => {
    return (
        <>
            <div className='container'>
                <img src={popcorn} alt="" className='logo' />
                <h1>MoviePop!</h1>
            </div>
        </>
    )
}
