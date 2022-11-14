import { render, screen } from '@testing-library/react';
import Countdown from '../Countdown';

test('renders Countdown page', () => {
  render(<Countdown />);
  const linkElement = screen.getByText(/Upcoming/i);
  expect(linkElement).toBeInTheDocument();
});
