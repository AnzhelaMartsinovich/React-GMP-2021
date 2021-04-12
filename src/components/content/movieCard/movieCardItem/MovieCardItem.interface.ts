export interface MovieCardItemProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
  onClickMovie: (id: number) => void;
}
