export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface MainPageState {
  moviesLoading: boolean;
  moviesError: string;
  moviesData: Movie[];
  movieData: {};
  movieError: string;
  movieForm: {};
  totalAmount: number;
  previewFlag: boolean;
  filter: string;
  sortBy: string;
  sortDescending: boolean;
}
export interface AppState {
  mainPage: MainPageState;
}

export interface MoviesDataProps {
  moviesData: Movie[];
}
