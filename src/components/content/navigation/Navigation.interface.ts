export interface NavigationProps {
  saveSortValue: (value: string) => void;
  saveFilterValue: (value: string) => void;
}

export interface NavItemProps {
  active?: boolean;
  id: any;
}
