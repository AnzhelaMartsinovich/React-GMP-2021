export interface FormButtonsProps {
  leftBtnText: string;
  rightBtnText: string;
  onOkEvent?: () => void;
  onCancelEvent?: () => void;
  setModalIsOpen?: () => void;
}
