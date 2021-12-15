import React from 'react'
import kickball from '../../assets/kickball.png'


export const Home = () => {
    return (
        <div className='Ballcontainer'>
            <img className="Ball" src={kickball} alt='red ball'/>
            <h1 className="title">Kickball</h1>
          
        </div>
    )
}
