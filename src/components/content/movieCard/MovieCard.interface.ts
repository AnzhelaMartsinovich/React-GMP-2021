export interface MovieCardProps {
  getMovieDataRequest: (id: number) => void;
}

export interface MovieItemProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
}
