import { render, screen } from '@testing-library/react';

import Search from './Search';
import { CountryContextProvider } from '../../context/context-country';
import useCountryContext from '../../Hooks/useCountryContext';
import userEvent from '@testing-library/user-event';

let state = null;

const Wrapper = ({ children }) => {
  state = useCountryContext();
  return <CountryContextProvider>{children}</CountryContextProvider>;
};



describe('Search Component', () => {
  test('testing the loading message', () => {
    render(<Search />, { wrapper: Wrapper });
    
  });
});
