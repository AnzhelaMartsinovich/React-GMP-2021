import { Movie } from 'baseTypes/BaseTypes.interface';

export interface EditMovieProps {
  setModalIsOpen?: () => void;
  movieData: Movie;
  putMovieRequest: (movieForm: any) => Promise<void>;
}
