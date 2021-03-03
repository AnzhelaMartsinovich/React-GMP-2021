export interface AddMovieProps {
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
  open: boolean;
  onClick?: () => void;
  setModalIsOpenToFalse?: () => void;
}

export interface AddMovieContainerProps {
  open: boolean;
}

export interface CrossItemProps {
  onClick?: any;
  setModalIsOpenToFalse?: () => void;
}
