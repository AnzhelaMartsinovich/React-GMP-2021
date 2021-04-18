import { Movie } from 'baseTypes/BaseTypes.interface';

export interface NoMovieProps {
  saveSortValue: (value: string) => void;
  saveFilterValue: (value: string) => void;
  movies: Movie[];
  totalAmount: number;
}
