import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamById } from "../../services/teams";


export const TeamDetail = () => {
    const { id } = useParams()
    const[team, setTeam] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeamById(id)
        .then((res) => setTeam(res))
        .finally(() => setLoading(false));
        }, [id])

    if (loading) return <h2>Loading...</h2>

    return (
        <div>
            <h4>Team</h4>
            <h1>{team.name}</h1>
            <div>{team.city} {team.state}</div>
           
        <ul>
            {team.players.map((player) => {
            return (
            <li key={player.id}>{player.position} {player.name}</li>
          );
        })}
      </ul>
        </div>
    )
}
