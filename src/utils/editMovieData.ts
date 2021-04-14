export const editFormData = [
  {
    title: 'Movie Id',
    id: 1,
    name: 'id',
    disabled: true,
  },
  {
    title: 'Title',
    id: 2,
    name: 'title',
  },
  {
    title: 'Release data',
    id: 3,
    type: 'date',
    name: 'release_date',
  },
  {
    title: 'Movie URL',
    id: 4,
    name: 'poster_path',
  },
  {
    title: 'Overview',
    id: 5,
    name: 'overview',
  },
  {
    title: 'Runtime',
    id: 6,
    name: 'runtime',
  },
];

export const editMovieSelectData = [
  {
    label: 'Select genre',
    value: '',
    id: 1,
    hidden: true,
    disabled: true,
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
    selected: true,
  },
  {
    label: 'Science',
    value: 'science',
    id: 5,
  },
];
