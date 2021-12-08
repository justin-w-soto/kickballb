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

    if(loading) return <h1>Loading teams...</h1>
    return (
        <div>
            <h1>Team List</h1>
            <ul>
            {teams.map((team) => (
                <li key={team.id}>
                    <Link className='link' to={`/teams/${team.id}`}>
                    {team.name}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}
