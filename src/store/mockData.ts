import { MainPageState } from 'baseTypes/BaseTypes.interface';

export const movieData = {
  id: 1,
  title: 'title',
  tagline: 'tagline',
  vote_average: 1,
  vote_count: 1,
  release_date: 'release_date',
  poster_path: 'poster_path',
  overview: 'overview',
  budget: 1,
  revenue: 1,
  genres: ['genres'],
  runtime: 1,
};

export const moviesData = {
  totalAmount: 1,
  offset: 1,
  limit: 1,
  data: [movieData],
};

export const mainPageState: MainPageState = {
  moviesError: 'Ooop. Something was wrong.',
  moviesData: [movieData],
  movieData: movieData,
  movieError: 'Ooop. Something was wrong.',
  movieForm: {},
  totalAmount: 10,
  filter: 'all',
  sortBy: 'release date',
  sortDescending: true,
  searchValue: 'searchValue',
};
