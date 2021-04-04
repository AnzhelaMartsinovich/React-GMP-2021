import { Movie } from 'baseTypes/BaseTypes.interface';
export interface ContentProps {
  onClickMovie: (id: number) => void;
  getMoviesDataRequest: () => void;
  movies: Movie[];
}
