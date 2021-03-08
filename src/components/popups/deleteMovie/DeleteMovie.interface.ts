export interface DeleteMovieProps {
  open: boolean;
  onClick?: () => void;
  setModalIsOpen?: () => void;
}

export interface DeleteMovieContainerProps {
  open: boolean;
}

export interface CrossItemProps {
  onClick?: any;
  setModalIsOpenToFalse?: () => void;
}
