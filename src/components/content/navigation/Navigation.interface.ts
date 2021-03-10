export interface NavigationProps {
  navGenreData: { text: string; id: number }[];
  navSortData: { text: string; id: number }[];
}

export interface NavItemProps {
  active?: any;
  id: any;
}
