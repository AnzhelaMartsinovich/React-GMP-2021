export interface AddMovieProps {
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
  setModalIsOpen?: () => void;
  addMovieSelectData: {
    label: string;
    value: string;
    id: number;
    hidden?: boolean;
    disabled?: boolean;
    selected?: boolean;
  }[];
}
