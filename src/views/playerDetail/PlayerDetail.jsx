import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getPlayerById } from "../../services/players"

export const PlayerDetail = () => {
    const{ id } = useParams()
    const[player, setPlayer] = useState(null)
   
    useEffect(() => {
        getPlayerById(id).then((res) => setPlayer(res))
    }, [id])

    if(!player) return <h2>Loading...</h2>

    return (
        <div>
              <h1>{player.name}</h1>
        <Link className='link' to={`/teams/${player.team.id}`}>
            <h3>{player.team.name}</h3>
        </Link>
        <h3>{player.team.city}, {player.teams.state}</h3>        
        <h3>{player.position}</h3>
        <Link className='link' to='/playerlist'><p>Player Information</p></Link>
        </div>
    )
}
