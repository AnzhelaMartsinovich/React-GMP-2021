export interface MovieCardItemProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
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
}
