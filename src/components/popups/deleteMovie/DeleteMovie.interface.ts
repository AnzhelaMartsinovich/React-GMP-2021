export interface DeleteMovieProps {
  setModalIsOpen?: () => void;
  movieId: number;
  deleteMovieRequest: (id: number) => Promise<void>;
}
