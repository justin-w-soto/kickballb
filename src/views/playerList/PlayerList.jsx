import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deletePlayerById, getPlayers } from "../../services/players"
import './PlayerList.css'


export const PlayerList = () => {
    const [players, setPlayers] = useState([])

    const loadPlayer = async () => {
        const res = await getPlayers()
        setPlayers(res)
    }

    useEffect(() => {loadPlayer()},[])

    

    const handleDelete = async ({id, name}) => {
        const shoulDelete = window.confirm(`Are you sure you want to delete ${name} from the roster?`)

        if(shoulDelete) await deletePlayerById(id)
        await loadPlayer()
    }

    return (
        <div className="Playerlist">
              <h1>Players</h1>
              <Link to='/players/new' className='App-link'>Add a Player</Link>
              <ul>
                {players.map((player) => (
                <li key={player.id}>
                    <Link className='link' to={`/players/${player.id}`}>
                        <li>{player.name}</li>
                    </Link>
                    <button type="button" onClick={() => handleDelete({ id: player.id, name: player.name })}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    )
}
