import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the app', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Country Info App')
  });
});
