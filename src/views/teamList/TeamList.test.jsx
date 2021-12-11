import { render, screen } from '@testing-library/react';
import { TeamList } from './TeamList';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { Route, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/react'

const mockTeam1 = {
  "id":1,
  "created_at":"2021-12-10T05:58:53.980677+00:00",
  "name":"Hero Ballers From OuterSpace",
  "city":"Kent",
  "state":"WA",
  "players": [],
}

const mockTeam2 = {
  "id":2,
  "created_at":"2021-12-10T05:58:53.980677+00:00",
  "name":"Magic Mazoos",
  "city":"Kalamazoo",
  "state":"MI",
  "players": [],
}

const server = setupServer(
  rest.get('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json([mockTeam1, mockTeam2]))
}))

  rest.delete('https://pzqhqmkdmqivtsvqgatr.supabase.co/rest/v1/teams', (req, res, ctx) => {
      return res(ctx.json(mockTeam2))
  })

  beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})


it('should render a TeamList page', async () => {
  const { container } = render(
    <MemoryRouter>  
      <TeamList /> 
    </MemoryRouter>
  );
  await screen.findByText(/Hero Ballers From OuterSpace/i)
  expect(container).toMatchSnapshot();
});

it('should delete a team from the list', async () => {
  render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
  )
  await screen.findByText(/Magic Mazoos/i)
  const deleteBtn = screen.getByRole('button', { name: 'Delete Magic Mazoos' });

  // userEvent.click(deleteBtn)
})

