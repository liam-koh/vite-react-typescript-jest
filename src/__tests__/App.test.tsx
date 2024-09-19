import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Renders main page correctly', () => {
  render(<App />);
  const button =  screen.getByRole('button');
  expect(button.innerHTML).toBe('count is 0');
  console.log(import.meta.env.MODE)
  fireEvent.click(button);
  fireEvent.click(button);
  expect(button.innerHTML).toBe('count is 2');
});
