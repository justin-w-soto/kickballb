import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <div>
            <h1>Kickball</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/teamlist">
                    <li>Teams</li>
                </Link>
                
                <Link to="/playerlist">
                    <li>Players</li>
                </Link>
            </ul>
        </div>
    )
}
