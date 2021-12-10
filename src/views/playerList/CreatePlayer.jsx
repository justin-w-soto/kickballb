import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createPlayer } from '../../services/players'

export const CreatePlayer = () => {
    const [name, setName] = useState('')
    const [teamId, setTeamId] = useState('')
    const [position, setPosition] = useState('')
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await createPlayer({ name, teamId, position })
        history.push(`/players/${res[0].id}`)
    }

    return (
        <>
        <fieldset>
            <legend>Add a Player</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="teamId">Team ID</label>
                <input id="teamId" teamId="teamId" type="text" value={teamId} onChange={(e) => setTeamId(e.target.value)}/>

                <label htmlFor="position">Position</label>
                <input id="position" position="position" type="text" value={position} onChange={(e) => setPosition(e.target.value)}/>
                
                <input type="submit" value="Add" aria-label="Add a Player" />
            </form>
        </fieldset>
        </>
    )
}
