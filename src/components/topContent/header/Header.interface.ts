export interface HeaderProps {
  postMovieDataRequest: (movieData: any) => Promise<void>;
  resetMovieData: any;
  slug?: number;
}
