import React from 'react'
import kickball from '../../assets/kickball.png'


export const Home = () => {
    return (
        <div>
            <img className="Ball" src={kickball} alt='red ball'/>
            <h1 className="title">Kickball</h1>
          
        </div>
    )
}
