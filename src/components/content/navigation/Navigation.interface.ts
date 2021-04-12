export interface NavigationProps {
  saveSortValue: (value: string) => void;
  saveFilterValue: any;
}

export interface NavItemProps {
  active?: boolean;
  id: any;
}
