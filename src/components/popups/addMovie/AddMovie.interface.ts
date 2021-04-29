export interface AddMovieProps {
  setModalIsOpen?: () => void;
  postMovieDataRequest: () => Promise<void>;
  resetMovieForm?: () => void;
}

export interface AddMovieSelectProps {
  setFormGenres: (genres: string[]) => void;
}
