import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTeamById } from "../../services/teams";


export const TeamDetail = () => {
    const { teamId } = useParams()
    const[team, setTeam] = useState(null)

    useEffect(() => {
        getTeamById(teamId)
        .then((res) => setTeam(res))
    }, [teamId])

    if(!team) return <h2>Loading...</h2>

    return (
        <div>
           <h4>Team</h4>
      <p>
        <Link to='/teams' className='link'>
          Back to Teams
        </Link>
      </p>
      <h1>{team.name}</h1>
      <p>
        From {team.city}, {team.state}
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {player.name}
            </li>
          );
        })}
      </ul>
        </div>
    )
}
