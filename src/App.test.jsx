// import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, expect, test } from 'vitest';
import { kebabCaseToTitleCase } from './helpers';

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

test('checkbox flow', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});

test('check if button is gray after disable', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveStyle({
    'background-color': 'rgb(128, 128, 128)',
  });

  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveStyle({ 'background-color': 'rgb(255, 0, 0)' });
});

test('checkbox flow after button click', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  fireEvent.click(buttonElement);

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray');

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('blue');
});

describe('kebabCaseToTitleCase', () => {
  test('works for no hyphens', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });
  test('works for one hyphens', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  });
  test('works for multiple hyphens', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  });
});
