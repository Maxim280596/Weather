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
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Kyiv' },
    });
    fireEvent.click(screen.getByRole('button'));
    await screen.findByText(/Kyiv/i);
    expect(screen.queryByText(/Kyiv/i)).toBeInTheDocument();
  });
});
