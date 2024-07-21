import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Greater text', () => {
  render(<App />);
  screen.debug();  // Print the rendered output to the console
  const linkElement = screen.getByText(/First Page/i);
  expect(linkElement).toBeInTheDocument();
});
