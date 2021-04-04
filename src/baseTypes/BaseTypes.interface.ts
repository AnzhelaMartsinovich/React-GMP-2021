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
  runtime?: number;
}
export interface MainPageState {
  moviesLoading: boolean;
  moviesError: string;
  moviesData: Movie[];
}
export interface AppState {
  mainPage: MainPageState;
}

export interface MoviesDataProps {
  moviesData: Movie[];
}

// Old interfaces
export interface PlaceholderData {
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
}

export interface MovieSelectData {
  addMovieSelectData: {
    label: string;
    value: string;
    id: number;
    hidden?: boolean;
    disabled?: boolean;
    selected?: boolean;
  }[];
}
