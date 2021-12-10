import { useState } from 'react'

export const CreateTeam = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    return (
        <>
        <fieldset>
            <legend>Add a Team</legend>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="city">City</label>
                <input id="city" city="city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                <label htmlFor="state">State</label>
                <input id="state" state="state" type="text" value={state} onChange={(e) => setState(e.target.value)}/>

                <input type="submit" value="Add a Team" />
            </form>
        </fieldset>
        </>
    )
}
