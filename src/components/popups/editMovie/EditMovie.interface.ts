import { Movie } from 'baseTypes/BaseTypes.interface';

export interface EditMovieProps {
  setModalIsOpen?: () => void;
  movieData: Movie;
  putMovieRequest: (movieForm: any) => Promise<void>;
}

export interface EditMovieInputsProps {
  // movieData: Movie;
  movieData: any;
}
