import React, { FC } from 'react';

import { FormButtonsProps } from './FormButtons.interface';

import { ButtonsContainer, ButtonLeft, ButtonRight } from './FormButtons.style';

export const FormButtons: FC<FormButtonsProps> = ({
  leftBtnText,
  rightBtnText,
  onOkEvent,
  onCancelEvent,
  setModalIsOpen,
}) => {
  const onOkHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onOkEvent && onOkEvent();
    setModalIsOpen && setModalIsOpen();
  };
  const onCancelHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onCancelEvent && onCancelEvent();
    setModalIsOpen && setModalIsOpen();
  };

  return (
    <ButtonsContainer>
      <ButtonLeft onClick={onCancelHandleClick}>{leftBtnText}</ButtonLeft>
      <ButtonRight onClick={onOkHandleClick}>{rightBtnText}</ButtonRight>
    </ButtonsContainer>
  );
};
