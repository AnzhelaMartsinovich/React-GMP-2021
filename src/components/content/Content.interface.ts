import { Movie } from 'baseTypes/BaseTypes.interface';
export interface ContentProps {
  getMoviesDataRequest: () => void;
  getMovieDataRequest: (id: number) => void;
  movies: Movie[];
}
