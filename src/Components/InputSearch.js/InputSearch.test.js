import { render, screen } from '@testing-library/react';

import InputSearch from './InputSearch';
import { CountryContextProvider } from '../../context/context-country';
import userEvent from '@testing-library/user-event';

const Wrapper = ({ children }) => (
  <CountryContextProvider>{children}</CountryContextProvider>
);

describe('InputSearch', () => {
  test('Input field work correctly when the field is empty', () => {
    render(<InputSearch />, { wrapper: Wrapper });

    const inputElement = screen.getByRole('textbox');
    const submitButtonElement = screen.getByRole('button');

    userEvent.click(submitButtonElement);
    expect(inputElement).toHaveTextContent('');

    userEvent.type(inputElement, 'panama');
    userEvent.click(submitButtonElement);
    expect(inputElement).toHaveTextContent('');
  });
});
