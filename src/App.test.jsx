// import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('button click flow', () => {
  // const { container } = render(<App />);
  // logRoles(container);
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  expect(buttonElement).toHaveClass('red');

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass('blue');
  expect(buttonElement).toHaveStyle({ 'background-color': 'rgb(0, 0, 255)' });
});
