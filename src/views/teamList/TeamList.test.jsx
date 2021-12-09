import { render } from '@testing-library/react';
import { TeamList } from './TeamList';

it('should render a TeamList page', () => {
  const { container } = render(<TeamList />);
  expect(container).toMatchSnapshot();
});