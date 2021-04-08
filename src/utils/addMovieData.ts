import {
  onChangeTitleHandler,
  onChangeDateHandler,
  onChangeUrlHandler,
} from 'components/popups/addMovie/addMovieInputs/utils/AddMovieInputsUtils';
export const addFormPlaceholderData = [
  {
    title: 'Title',
    placeholder: 'Title',
    id: 1,
    // actionEvent: (e: any, setFormDate: any) =>
    //   onChangeTitleHandler(e, setFormDate),
  },
  {
    title: 'Release data',
    placeholder: 'Select Date',
    id: 2,
    type: 'date',
  },
  {
    title: 'Movie URL',
    placeholder: 'Movie URL here',
    id: 3,
  },
  {
    title: 'Overview',
    placeholder: 'Overview here',
    id: 4,
  },
  {
    title: 'Runtime',
    placeholder: 'Runtime here',
    id: 5,
  },
];

export const addMovieSelectData = [
  {
    label: 'Select genre',
    value: '',
    id: 1,
    hidden: true,
    disabled: true,
    selected: true,
  },
  {
    label: 'Horror',
    value: 'horror',
    id: 2,
  },
  {
    label: 'Drama',
    value: 'drama',
    id: 3,
  },
  {
    label: 'Comedy',
    value: 'comedy',
    id: 4,
  },
  {
    label: 'Science',
    value: 'science',
    id: 5,
  },
];
