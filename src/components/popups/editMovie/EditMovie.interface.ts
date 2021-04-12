import { Movie } from 'baseTypes/BaseTypes.interface';

export interface EditMovieProps {
  setModalIsOpen?: () => void;
  movieData: Movie;
  resetMovieForm: () => void;
  putMovieRequest: () => Promise<void>;
}

export interface EditMovieInputsProps {
  movieData: Movie;
  setFormTitle: (title: string) => void;
  setFormDate: (date: string) => void;
  setFormUrl: (title: string) => void;
  setFormOverview: (overview: string) => void;
  setFormRuntime: (runtime: number) => void;
}
