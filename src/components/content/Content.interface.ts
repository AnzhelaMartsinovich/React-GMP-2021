import { Movie } from 'baseTypes/BaseTypes.interface';

export interface ContentProps {
  getMoviesDataRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
  getMovieDataRequest: any;
  movies: Movie[];
  totalAmount: number;
  saveSortValue: (value: string) => void;
  saveFilterValue: (value: string) => void;
  filterValue: string;
  sortValue: string;
  searchValue: string;
}
