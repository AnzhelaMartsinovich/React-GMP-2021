import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { DeleteMovie } from '../DeleteMovie';
import { initialState } from 'appState';

describe('deleteMovie popup testing', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);

  const renderAddMovie = () =>
    render(
      <Provider store={store}>
        <DeleteMovie />
      </Provider>
    );

  it('check title of the popup', () => {
    const { getByText } = renderAddMovie();
    const linkElement = getByText(/Delete movie/i);
    expect(linkElement).toBeInTheDocument();
  });
});
