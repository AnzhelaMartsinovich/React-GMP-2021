import { ChangeEvent } from 'react';

export const onChangeTitleHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormTitle: (valueStr: string) => void
) => {
  setFormTitle(e.target.value);
};

export const onChangeDateHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFormDate: (valueStr: string) => void
) => {
  console.log(typeof e.target.value);
  setFormDate(e.target.value);
};

export const onChangeUrlHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFormUrl: (valueStr: string) => void
) => {
  setFormUrl(e.target.value);
};

export const onChangeOverviewHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFormOverview: (valueStr: string) => void
) => {
  setFormOverview(e.target.value);
};

export const onChangeRuntimeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFormRuntime: (valueStr: number) => void
) => {
  const numberValue = Number(e.target.value);
  setFormRuntime(numberValue);
};

export const onChangeGenresHandler = (
  e: ChangeEvent<HTMLSelectElement>,
  setFormGenres: (valueStr: string[]) => void
) => {
  setFormGenres([e.target.value]);
};
