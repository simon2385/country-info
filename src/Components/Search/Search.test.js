import {
  render,
  screen,
} from '@testing-library/react';

import Search from './Search';
import { CountryContextProvider } from '../../context/context-country';
import useCountryContext from '../../Hooks/useCountryContext';
import userEvent from '@testing-library/user-event';

let state = {
  enteredCountry: '',
  isLoading: false,
  hasError: false,
  showCounty: false,
  message: '',
};

const Wrapper = ({ children }) => {
  state = useCountryContext();
  return <CountryContextProvider>{children}</CountryContextProvider>;
};

describe('Search Component', () => {
  test('shoulds renders loading component', async () => {
    render(<Search />, { wrapper: Wrapper });
    const inputElement = screen.getByPlaceholderText(/Type a country.../i);
    const submitButtonElement = screen.getByRole('button', { name: /Search/i });
    userEvent.type(inputElement, 'Panama');
    userEvent.click(submitButtonElement);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test(`shoulds renders: input field is empty', error message`, () => {
    render(<Search />, { wrapper: Wrapper });
    const submitButtonElement = screen.getByRole('button', { name: /Search/i });
    userEvent.click(submitButtonElement);

    expect(
      screen.getByText(/The input field is empty. Please enter a country/i)
    ).toBeInTheDocument();
  });

  test(`should renders: 'Country not found', error message`, async () => {
    render(<Search />, { wrapper: Wrapper });
    userEvent.type(
      screen.getByPlaceholderText(/Type a country.../i),
      'asddsas'
    );
    userEvent.click(screen.getByRole('button', { name: /Search/i }));
    expect(await screen.findByText(/Country not found/i)).toBeInTheDocument();
  });
});
