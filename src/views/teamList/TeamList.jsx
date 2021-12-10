import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';

export const TeamList = () => {
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);
        
    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
        .finally(() => setLoading(false))
    }, [])

    const handleDelete = () => {
        const shoulDelete = window.confirm('Are you sure that you want to delete this team?')
    }

    if(loading) return <h1>Loading teams...</h1>
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
                    <button type="button" onClick={handleDelete}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    )
}
