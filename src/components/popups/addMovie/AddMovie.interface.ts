export interface AddMovieProps {
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
  open: boolean;
  onClick?: () => void;
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

export interface AddMovieContainerProps {
  open: boolean;
}
