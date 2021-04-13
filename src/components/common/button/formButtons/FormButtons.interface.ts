export interface FormButtonsProps {
  resetBtnText: string;
  submitBtnText: string;
  onOkEvent?: () => void;
  onCancelEvent?: () => void;
  setModalIsOpen?: () => void;
}
