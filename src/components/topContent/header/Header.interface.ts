export interface HeaderProps {
  addFormPlaceholderData: {
    id: number;
    title: string;
    placeholder: string;
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
