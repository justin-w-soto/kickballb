import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createTeam } from '../../services/teams'

export const CreateTeam = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

       const res = await createTeam({ name, city, state })
       history.push(`/teams/${res[0].id}`) 
    }

    return (
        <>
        <fieldset>
            <legend>Add a Team</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="city">City</label>
                <input id="city" city="city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                <label htmlFor="state">State</label>
                <input id="state" state="state" type="text" value={state} onChange={(e) => setState(e.target.value)}/>

                <input type="submit" value="Add" />
            </form>
        </fieldset>
        </>
    )
}
