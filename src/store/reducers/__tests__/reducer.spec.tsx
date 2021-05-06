import * as actions from '../../actions/actions';
import { mainPageReducer, mainPageInitialState } from '../reducer';
import { mainPageState, movieData, moviesData } from '../../mockData';

describe('reducer', () => {
  it('should return movies error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestMoviesError(mainPageState.moviesError)
    );

    expect(state.moviesError).toEqual(mainPageState.moviesError);
  });

  it('should return total amount movies', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.setTotalAmountToStore(mainPageState.totalAmount)
    );

    expect(state.totalAmount).toEqual(mainPageState.totalAmount);
  });

  it('should record movies to the store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordMoviesDataToStore(moviesData)
    );

    expect(state.moviesData).toEqual(mainPageState.moviesData);
  });

  it('should record movie to the store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordMovieDataToStore(movieData)
    );
    expect(state.movieData).toEqual(mainPageState.movieData);
  });

  it('should reset store to initial', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.resetMovieData(movieData)
    );

    expect(state.movieData).toEqual(mainPageInitialState.movieData);
  });

  it('should return movie error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestMovieError(mainPageState.movieError)
    );

    expect(state.movieError).toEqual(mainPageState.movieError);
  });

  it('should save filter value', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.saveFilterValue(mainPageState.filter)
    );

    expect(state.filter).toEqual(mainPageState.filter);
  });

  it('should save sort value', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.saveSortValue(mainPageState.sortBy)
    );

    expect(state.sortBy).toEqual(mainPageState.sortBy);
  });

  it('should save search value', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.setSearchValue(mainPageState.searchValue)
    );

    expect(state.searchValue).toEqual(mainPageState.searchValue);
  });

  it('should return the initial state', () => {
    const state = mainPageReducer(undefined);
    expect(state).toEqual(mainPageInitialState);
  });
});
