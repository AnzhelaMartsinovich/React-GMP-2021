import { MainPageState } from 'baseTypes/BaseTypes.interface';

export const prepareParamsObject = (mainPageState: MainPageState) => {
  const { filter, sortBy, sortDescending } = mainPageState;

  return {
    filter: filter === 'all' ? '' : filter,
    sortBy: defineSortByValue(sortBy),
    sortOrder: sortDescending ? 'desc' : 'asc',
  };
};

const defineSortByValue = (sortBy: string): string => {
  switch (sortBy) {
    case 'rating':
      return 'vote_average';
    default:
      return 'release_date';
  }
};
