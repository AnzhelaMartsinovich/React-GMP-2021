import { Movie } from 'baseTypes/BaseTypes.interface';

export interface TopContentProps {
  movie: Movie;
  getMovieDataRequest: any;
  slug?: number;
  setSearchValue: (value: string) => void;
  searchValue: string;
}

export interface SearchPartProps {
  setSearchValue: (value: string) => void;
  searchValue: string;
}
