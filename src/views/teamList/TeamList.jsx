import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../services/teams';

export const TeamList = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] =useState(true)
 
    const loadTeams = async () => {
        const res = await getTeams()
        setTeams(res)
        setLoading(false)
    }

    useEffect(() => {loadTeams()},[])

    const handleDelete = async ({id, name}) => {
        const shouldDelete = window.confirm(`Are you sure you want to delete the ${name} from the roster?`)
        
        if (shouldDelete) 
        await deleteTeamById(id)
        await loadTeams()
    }
    
    if (loading) return <p>Loading Teams...</p>

    return (
        <div>
            <h1>Teams</h1>
            <Link to='/teams/new' className='App-link'>Add a Team</Link>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>

                        <Link className='link' to={`/teams/${team.id}`}>
                            <li>{team.name}</li>
                        </Link>

                        <Link className='link' to={`teams/${team.id}/update`}>
                            <button>Edit</button>
                        </Link>
                                        
                        <button 
                        type="button" aria-label={`Delete ${team.name}`}
                        onClick={() => handleDelete({ id: team.id, name: team.name })}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
