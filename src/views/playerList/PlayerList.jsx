import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayers } from "../../services/players"
import './PlayerList.css'


export const PlayerList = () => {
    const[loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayers()
        .then((res) => setPlayers(res))
        .finally(() => setLoading(false))
    }, []) 
    if(loading) return <h1>Loading players...</h1>

    return (
        <div className="Playerlist">
              <h1>Player List</h1>
              <ul>
            {players.map((player) => (
                <li key={player.id}>
                    <Link className='link' to={`/players/${player.id}`}>
                        <p>{player.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}
