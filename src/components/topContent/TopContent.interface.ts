import { Movie } from 'baseTypes/BaseTypes.interface';

export interface TopContentProps {
  movieId: number | undefined;
  hideMovie: () => void;
  movies: Movie[];
}
