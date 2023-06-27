import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';



describe('Header', () => {
  test('renders header with link correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );


    expect(screen.getByText('Podcaster')).toBeInTheDocument();
  });
});
