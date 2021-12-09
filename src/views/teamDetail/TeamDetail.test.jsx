import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { TeamDetail } from './TeamDetail'

it('Should render a list of players to the page', async () => {
    const {container} = render(
        <MemoryRouter >
            <Route path="/teams/:id">
                <TeamDetail />
            </Route>
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
})