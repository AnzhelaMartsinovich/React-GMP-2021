export interface NavigationProps {
  navGenreData: { text: string; id: number }[];
  navSortData: { text: string; id: number }[];
}

export interface NavItemProps {
  active?: boolean;
  id: any;
}
