import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { PlayerList } from './PlayerList';

it('Should render a list of players to the screen', async () => {
    const {container} = render(
        <MemoryRouter>
            <Route path="/players">
                <PlayerList />
            </Route>
        </MemoryRouter>
    )
    // screen.getByText('Players')
    expect(container).toMatchSnapshot()
})