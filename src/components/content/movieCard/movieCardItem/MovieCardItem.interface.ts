export interface MovieCardItemProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
  getMovieDataRequest: (id: number) => void;
  setFlagForPreviewPhotoTrue: any;
  setFlagForPreviewPhotoFalse: any;
}
