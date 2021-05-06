import { initialState } from 'appState';
import { mockInitialState } from 'baseTypes/mockData';

import {
  getTotalAmountSelector,
  getMoviesDataSelector,
  getMovieFormSelector,
  getFilterValueSelector,
  getSortValueSelector,
  sortDescValueSelector,
  searchValueSelector,
  getMovieDataSelector,
  getMovieDataIdSelector,
} from '../selectors';

describe('selectors mainPage', () => {
  it('sliderDataSelector', () => {
    const data = getTotalAmountSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        totalAmount: mockInitialState.totalAmount,
      },
    });

    expect(data).toEqual(mockInitialState.totalAmount);
  });

  it('getMoviesDataSelector', () => {
    const data = getMoviesDataSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        moviesData: mockInitialState.moviesData,
      },
    });

    expect(data).toEqual(mockInitialState.moviesData);
  });

  it('getMovieFormSelector', () => {
    const data = getMovieFormSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        movieForm: mockInitialState.movieForm,
      },
    });

    expect(data).toEqual(mockInitialState.movieForm);
  });

  it('getFilterValueSelector', () => {
    const data = getFilterValueSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        filter: mockInitialState.filter,
      },
    });

    expect(data).toEqual(mockInitialState.filter);
  });

  it('getSortValueSelector', () => {
    const data = getSortValueSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        sortBy: mockInitialState.sortBy,
      },
    });

    expect(data).toEqual(mockInitialState.sortBy);
  });

  it('sortDescValueSelector', () => {
    const data = sortDescValueSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        sortDescending: mockInitialState.sortDescending,
      },
    });

    expect(data).toEqual(mockInitialState.sortDescending);
  });

  it('searchValueSelector', () => {
    const data = searchValueSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        searchValue: mockInitialState.searchValue,
      },
    });

    expect(data).toEqual(mockInitialState.searchValue);
  });
  it('getMovieDataSelector', () => {
    const data = getMovieDataSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        movieData: mockInitialState.movieData,
      },
    });

    expect(data).toEqual(mockInitialState.movieData);
  });

  it('getMovieDataIdSelector', () => {
    const data = getMovieDataIdSelector({
      ...initialState,
      mainPage: {
        ...initialState.mainPage,
        movieData: mockInitialState.movieData,
      },
    });

    expect(data).toEqual(mockInitialState.movieData.id);
  });
});
