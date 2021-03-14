export interface MovieCardProps {
  moviesData: {
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
  }[];
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
  addMovieSelectData: {
    label: string;
    value: string;
    id: number;
    hidden?: boolean;
    disabled?: boolean;
    selected?: boolean;
  }[];
  onClickMovie: (id: number) => void;
}

export interface MovieItemProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
}
