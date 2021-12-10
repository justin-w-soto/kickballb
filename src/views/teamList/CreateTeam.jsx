import React from 'react'

export const CreateTeam = () => {
    return (
        <>
        <fieldset>
            <legend>Add a Team</legend>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text"/>

                <label htmlFor="city">City</label>
                <input id="city" city="city" type="text"/>

                <label htmlFor="state">State</label>
                <input id="state" state="state" type="text"/>
                
                <input type="submit" value="Add a Team" />
            </form>
        </fieldset>
        </>
    )
}
