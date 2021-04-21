import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render button in the App', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render textbox in the App', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render Card after enter city and click on the button', async () => {
    render(<App />);
    fireEvent.blur(screen.getByRole('textbox'), {
      target: { value: 'Lviv' },
    });
    fireEvent.click(screen.getByRole('button'));
    await screen.findByText(/Lviv/i);
    expect(screen.queryByText(/Lviv/i)).toBeInTheDocument();
  });
  it('should be enter uncorrect city', async () => {
    render(<App />);
    fireEvent.blur(screen.getByRole('textbox'), {
      target: { value: 'Lvivsdfsdsdf' },
    });
    fireEvent.click(screen.getByRole('button'));
    await screen.findByText(/Error! Please, enter the correct city name!/i);
    expect(
      screen.queryByText(/Error! Please, enter the correct city name!/i)
    ).toBeInTheDocument();
  });
});
