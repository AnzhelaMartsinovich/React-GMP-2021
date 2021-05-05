import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from 'appState';
import { Header } from 'components/topContent/header/Header';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

describe('customHook tests', () => {
  it('should open/hide popup', () => {
    const { queryByRole } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const btn = screen.getByRole('button', { name: /Add movie/i });
    const popupTitle = queryByRole('heading', {
      name: /Add movie/i,
    });

    expect(popupTitle).not.toBeInTheDocument();
    userEvent.click(btn);

    expect(
      queryByRole('heading', {
        name: /Add movie/i,
      })
    ).toBeInTheDocument();
    userEvent.click(btn);

    expect(popupTitle).not.toBeInTheDocument();
  });
});
