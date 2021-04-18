import { Movie } from 'baseTypes/BaseTypes.interface';

export interface TopContentProps {
  movie: Movie;
  getMoviesDataRequest: any;
  getMovieDataRequest: any;
  slug?: number;
}
