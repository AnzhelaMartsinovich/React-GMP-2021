export interface ContentProps {
  navGenreData: { text: string; id: number }[];
  navSortData: { text: string; id: number }[];
  onClickMovie: (id: number) => void;
}
