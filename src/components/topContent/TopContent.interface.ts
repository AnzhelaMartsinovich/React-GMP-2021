import { Movie } from 'baseTypes/BaseTypes.interface';

export interface TopContentProps {
  movie: Movie;
  getMovieDataRequest: any;
  slug?: number;
}
