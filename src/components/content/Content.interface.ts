import { Movie } from 'baseTypes/BaseTypes.interface';
export interface ContentProps {
  navGenreData: { text: string; id: number }[];
  navSortData: { text: string; id: number }[];
  onClickMovie: (id: number) => void;
  getMoviesDataRequest: () => void;
  movies: Movie[];
}
