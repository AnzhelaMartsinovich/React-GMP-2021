export interface MovieHoverProps {
  showIcon: boolean;
  showPanel: boolean;
  onClickHandler: () => void;
  addFormPlaceholderData: {
    title: string;
    placeholder: string;
    id: number;
    type?: string;
  }[];
  addMovieSelectData: {
    label: string;
    value: string;
    id: number;
    hidden?: boolean;
    disabled?: boolean;
    selected?: boolean;
  }[];
  closePanel: () => void;
}

export interface MovieHoverPanelProps {
  showIcon: boolean;
}

export interface MovieHoverItemsProps {
  showPanel: boolean;
}
