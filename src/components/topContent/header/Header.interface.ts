import { Movie } from 'baseTypes/BaseTypes.interface';
import { MouseEventHandler } from 'react';

export interface HeaderProps {
  data:
    | {
        id: number;
        title: string;
        tagline: string;
        vote_average: number;
        vote_count: number;
        release_date: string;
        poster_path: string;
        overview: string;
        budget: number;
        revenue: number;
        genres: string[];
        runtime: number;
      }
    | any;
  postMovieDataRequest: () => Promise<void>;
  resetMovieData: any;
  resetMovieForm: () => void;
}
