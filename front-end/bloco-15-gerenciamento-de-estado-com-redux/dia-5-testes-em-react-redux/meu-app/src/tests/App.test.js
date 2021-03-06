import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import sumReducer from '../';
import App from '../App';

const mockInitialState = {
  value1: 0,
  value2: 0,
  value3: 0,
};

afterEach(cleanup);

function renderWithRedux(
  component,
  { initialState, store = createStore(sumReducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}

it('can render with redux defaults', () => {
  const screen.getByTestId = renderWithRedux(<App />,
  { initialState: mockInitialState },
);
const firstField = screen.getByTestId('input1');
expect(firstField).toBeInTheDocument();
});

it('typing numbers', () => {
  const { getByTestId, getByText } = renderWithRedux(
    <App />,
    { initialState: mockInitialState },
  );
  const firstField = getByTestId('input1');
  expect(firstField).toBeInTheDocument();
  fireEvent.change(firstField, { target: { value: 1 } });
  const secondField = getByTestId('input2');
  fireEvent.change(secondField, { target: { value: 6 } });
  expect(getByText('7')).toBeInTheDocument();
  const thirdField = getByTestId('input3');
  fireEvent.change(thirdField, { target: { value: 12 } });
  expect(getByText('19')).toBeInTheDocument();
});
