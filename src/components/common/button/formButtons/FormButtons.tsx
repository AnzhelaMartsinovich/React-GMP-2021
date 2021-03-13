import React, { FC } from 'react';

import { FormButtonsProps } from './FormButtons.interface';

import { ButtonsContainer, ButtonLeft, ButtonRight } from './FormButtons.style';

export const FormButtons: FC<FormButtonsProps> = ({
  leftBtnText,
  rightBtnText,
}) => {
  const onHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <ButtonsContainer>
      <ButtonLeft onClick={onHandleClick}>{leftBtnText}</ButtonLeft>
      <ButtonRight onClick={onHandleClick}>{rightBtnText}</ButtonRight>
    </ButtonsContainer>
  );
};
