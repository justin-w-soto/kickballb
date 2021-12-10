/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { CreatePlayer } from './CreatePlayer';
import userEvent from '@testing-library/user-event';

const server = setupServer()

rest.post('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/players', (res, req, ctx) => {
    return res(
        ctx.json(
            {"id":38,"created_at":"2021-12-08T20:09:51+00:00","name":"B. Homesoon","position":"3rd base","team_id":5,"teams":{"id":5,"created_at":"2021-12-08T19:50:27+00:00","name":"Pizza Party Shredders","city":"NYC","state":"NY"}}
        )
    )
})

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

it('should add a new player to the league', async () => {
    render(
        <MemoryRouter>
            <CreatePlayer />
        </MemoryRouter>
    )

    const nameField = screen.getByText(/name/i)
    const positionField = screen.getByText(/position/i)
})