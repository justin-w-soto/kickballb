import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { CreateTeam } from './CreateTeam';

const server = setupServer()

rest.post('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(
        ctx.json(
            [{"id":6,"created_at":"2021-12-10T05:58:53.980677+00:00","name":"","city":"","state":""}]
        )
    )
})

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

it('should add a new team to the the team detail page', async () => {
    render(
        <MemoryRouter>
            <CreateTeam />
        </MemoryRouter>
    )

    screen.getByText('Add a Team')

    const nameField = screen.getByLabelText(/name/i)
    const cityField = screen.getByLabelText(/city/i)
    const stateField = screen.getByLabelText(/state/i)
})