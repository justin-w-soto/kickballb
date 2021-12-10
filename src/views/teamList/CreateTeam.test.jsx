/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Router, Route } from 'react-router-dom';
import { CreateTeam } from './CreateTeam';
import { TeamDetail } from '../teamDetail/TeamDetail';
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event';

const mockTeam =  [{"id":6,"created_at":"2021-12-10T05:58:53.980677+00:00","name":"","city":"","state":""}]

const server = setupServer()
rest.get('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam))
})
rest.post('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam))
})

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

it('should add a new team & redirect to the the team detail page', async () => {
    const history = createMemoryHistory()
    history.push('/teams/new')
    render(
        // <MemoryRouter>
        //     <CreateTeam />
        // </MemoryRouter>

        <Router history={history}>
            <Route path="/teams/new">
                <CreateTeam />
            </Route>
            <Route path="/teams/:id" component={TeamDetail} />
        </Router>
    )

    screen.getByText('Add a Team')

    const nameField = screen.getByLabelText(/name/i)
    const cityField = screen.getByLabelText(/city/i)
    const stateField = screen.getByLabelText(/state/i)
    const submitBtn = screen.getByRole('button', { name: 'Add a Team' })

    userEvent.type(nameField, 'Baltimore Buckets')
    userEvent.type(cityField, 'Baltimore')
    userEvent.type(stateField, 'MD')
    userEvent.click(submitBtn)
})