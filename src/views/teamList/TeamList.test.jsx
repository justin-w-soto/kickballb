import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { TeamList } from './TeamList';

// const mockTeam1 = {
//     id: 1,
//     created_at: '2021-12-08T20:26:24.408898+00:00',
//     name: 'My Team',
//     city: 'Anytown',
//     state: 'US',
//     players: [],
//   };
  
//   const mockTeam2 = {
//     id: 2,
//     created_at: '2021-12-08T20:26:24.408898+00:00',
//     name: 'My Other Team',
//     city: 'Littleville',
//     state: 'US',
//     players: [],
//   };
  
//   const server = setupServer(
//     rest.get('https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams', (req, res, ctx) => {
//       return res(ctx.json([mockTeam1, mockTeam2]));
//     }),
//     rest.delete('https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams', (req, res, ctx) => {
//       return res(ctx.json(mockTeam2));
//     })
//   );
  
//   beforeAll(() => {
//     server.listen();
//   });
  
//   afterAll(() => {
//     server.close();
//   });
  
  it('should list some teams', async () => {
    const { container } = render(
      <MemoryRouter>
        <TeamList />
      </MemoryRouter>
    );
  
   
  
    expect(container).toMatchSnapshot();
  });