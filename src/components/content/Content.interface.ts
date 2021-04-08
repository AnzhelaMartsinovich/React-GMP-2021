import { Movie } from 'baseTypes/BaseTypes.interface';
export interface ContentProps {
  getMoviesDataRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
  getMovieDataRequest: (id: number) => void;
  movies: Movie[];
}
