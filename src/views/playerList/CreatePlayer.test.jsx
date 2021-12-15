/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
// import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {  Router, Route } from 'react-router-dom'
import { CreatePlayer } from './CreatePlayer';
import { createMemoryHistory } from 'history'
import { PlayerDetail } from '../playerDetail/PlayerDetail';
import userEvent from '@testing-library/user-event';

const mockPlayer = {"id":38,"created_at":"2021-12-08T20:09:51+00:00","name":"B. Homesoon","position":"3rd base","team_id":5,"teams":{"id":5,"created_at":"2021-12-08T19:50:27+00:00","name":"Pizza Party Shredders","city":"NYC","state":"NY"}}

const server = setupServer()
rest.get('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/players', (res, req, ctx) => {
    return res(ctx.json(mockPlayer))
})
rest.post('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/players', (res, req, ctx) => {
    return res(ctx.json(mockPlayer))
})

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

it('should add a new player to the league', async () => {
    const history = createMemoryHistory()
    history.push('/players/new')
    render(
        // <MemoryRouter>
        //     <CreatePlayer />
        // </MemoryRouter>
        <Router history={history}>
        <Route path="/players/new">
            <CreatePlayer />
        </Route>
        <Route path="/players/:id" component={PlayerDetail} />
    </Router>
    )

    const nameField = screen.getByText(/name/i)
    const positionField = screen.getByText(/position/i)
    const submitBtn = screen.getByRole('button', { name: 'Add a Player' })

    userEvent.type(nameField, 'Barry Buntcakes')
    userEvent.type(positionField, '3rd base')
    userEvent.click(submitBtn)
})