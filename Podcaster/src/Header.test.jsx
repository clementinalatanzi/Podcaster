import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Header', () => {
  test('renders "Hola mundo" text', () => {
    render(<Header />);
    const textElement = screen.getByText('Hola mundo');
    expect(textElement).toBeInTheDocument();
  });
});
