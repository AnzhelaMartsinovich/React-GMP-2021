import { Movie } from 'baseTypes/BaseTypes.interface';

export interface EditMovieProps {
  setModalIsOpen?: () => void;
  movieData: any;
  resetMovieForm: any;
  putMovieRequest: any;
}

export interface EditMovieInputsProps {
  movieData: Movie;
  setFormTitle: (title: string) => void;
  setFormDate: (date: string) => void;
  setFormUrl: (title: string) => void;
  setFormOverview: (overview: string) => void;
  setFormRuntime: (runtime: number) => void;
}
