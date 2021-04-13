import React, { FC } from 'react';

import { FormButtonsProps } from './FormButtons.interface';

import { ButtonsContainer, ButtonLeft, ButtonRight } from './FormButtons.style';

export const FormButtons: FC<FormButtonsProps> = ({
  resetBtnText,
  submitBtnText,
  onOkEvent,
  onCancelEvent,
  setModalIsOpen,
}) => {
  const onCancelHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onCancelEvent && onCancelEvent();
    setModalIsOpen && setModalIsOpen();
  };

  return (
    <ButtonsContainer>
      <ButtonLeft onClick={onCancelHandleClick}>{resetBtnText}</ButtonLeft>
      <ButtonRight type='submit'>{submitBtnText}</ButtonRight>
    </ButtonsContainer>
  );
};
