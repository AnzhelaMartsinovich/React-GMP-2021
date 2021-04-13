export interface AddMovieProps {
  setModalIsOpen?: () => void;
  postMovieDataRequest: (movieData: any) => Promise<void>;
  resetMovieForm?: () => void;
}

export interface Values {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
}
