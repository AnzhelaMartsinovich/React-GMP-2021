import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddMovie } from '../AddMovie';
import { mockMovieData } from 'baseTypes/mockData';
import { addFormPlaceholderData } from 'utils/addMovieData';

describe('addMovie popup testing', () => {
  const postMovieDataRequest = jest.fn();
  const setModalIsOpen = jest.fn();
  const renderAddMovie = () =>
    render(
      <AddMovie
        postMovieDataRequest={postMovieDataRequest}
        setModalIsOpen={setModalIsOpen}
      />
    );

  it('check title of the popup', () => {
    const { getByText } = renderAddMovie();
    const linkElement = getByText(/Add movie/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should change value in the input', () => {
    renderAddMovie();

    const titleInput = screen.getByPlaceholderText(/title/i);
    const testTitle = mockMovieData.title;

    expect(titleInput).toBeEmptyDOMElement();
    expect(screen.queryByText(testTitle)).toBeNull();
    userEvent.type(titleInput, testTitle);
    expect(titleInput.getAttribute('value')).toEqual(testTitle);
  });

  it('check multiple select options', () => {
    const { getByRole } = renderAddMovie();
    userEvent.selectOptions(getByRole('listbox'), [
      'horror',
      'comedy',
      'science',
    ]);

    expect(screen.getByText(/horror/i).selected).toBeTruthy();
    expect(screen.getByText(/drama/i).selected).toBeFalsy();
    expect(screen.getByText(/comedy/i).selected).toBeTruthy();
    expect(screen.getByText(/science/i).selected).toBeTruthy();
  });

  it('should send correct form', async () => {
    const { getByRole } = renderAddMovie();
    const submitHandler = jest.fn();

    userEvent.type(
      screen.getByPlaceholderText(addFormPlaceholderData[0].placeholder),
      mockMovieData.title
    );
    userEvent.type(
      screen.getByPlaceholderText(addFormPlaceholderData[1].placeholder),
      mockMovieData.release_date
    );
    userEvent.type(
      screen.getByPlaceholderText(addFormPlaceholderData[2].placeholder),
      mockMovieData.poster_path
    );
    userEvent.type(
      screen.getByPlaceholderText(addFormPlaceholderData[3].placeholder),
      mockMovieData.overview
    );
    userEvent.type(
      screen.getByPlaceholderText(addFormPlaceholderData[4].placeholder),
      mockMovieData.runtime.toString()
    );
    userEvent.selectOptions(getByRole('listbox'), mockMovieData.genres);

    const form = screen.getByTestId('form');
    form.onsubmit = submitHandler;

    fireEvent.submit(form);
    expect(submitHandler).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });
  });
});
