import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
});

test('strike button is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/btnStrike/i);
});

test('hit button is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/btnHit/i);
});

test('ball button is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/btnBall/i);
});

test('foul button is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/btnFoul/i);
});

