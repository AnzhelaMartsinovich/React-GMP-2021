import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddMovie } from '../AddMovie';

describe('addMovie popup testing', () => {
  const postMovieDataRequest = jest.fn();
  const setModalIsOpen = jest.fn();

  it('check title of the popup', () => {
    const { getByText } = render(
      <AddMovie
        postMovieDataRequest={postMovieDataRequest}
        setModalIsOpen={setModalIsOpen}
      />
    );
    const linkElement = getByText(/Add movie/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should change value in the input', () => {
    render(
      <AddMovie
        postMovieDataRequest={postMovieDataRequest}
        setModalIsOpen={setModalIsOpen}
      />
    );

    const titleInput = screen.getByPlaceholderText(/title/i);
    const testTitle = 'New movie title';

    expect(titleInput).toBeEmptyDOMElement();
    expect(screen.queryByText(testTitle)).toBeNull();

    userEvent.type(titleInput, testTitle);

    // fireEvent.change(titleInput, {
    //   target: { value: testTitle },
    // });

    expect(titleInput.getAttribute('value')).toEqual(testTitle);
  });
});
