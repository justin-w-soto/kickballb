import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PlayerDetail } from './PlayerDetail';

it('Should render a players team info on the screen', async () => {
    const {container} = render(
        <MemoryRouter>
           
                <PlayerDetail />
          
        </MemoryRouter>
    )
    screen.getByText('Loading...')
    expect(container).toMatchSnapshot();
})