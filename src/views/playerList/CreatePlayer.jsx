import React from 'react'

export const CreatePlayer = () => {
    return (
        <>
        <fieldset>
            <legend>Add a Player</legend>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text"/>

                <label htmlFor="teamId">Team ID</label>
                <input id="teamId" teamId="teamId" type="text"/>

                <label htmlFor="position">Position</label>
                <input id="position" position="position" type="text"/>
                
                <input type="submit" value="Add a Team" />
            </form>
        </fieldset>
        </>
    )
}
