import React, { FC } from 'react';

import { FormButtonsProps } from './FormButtons.interface';

import { ButtonsContainer, ButtonLeft, ButtonRight } from './FormButtons.style';

export const FormButtons: FC<FormButtonsProps> = ({
  resetBtnText,
  submitBtnText,
  onCancelEvent,
}) => {
  const onCancelHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onCancelEvent && onCancelEvent();
  };

  return (
    <ButtonsContainer>
      <ButtonLeft onClick={onCancelHandleClick}>{resetBtnText}</ButtonLeft>
      <ButtonRight type='submit'>{submitBtnText}</ButtonRight>
    </ButtonsContainer>
  );
};
