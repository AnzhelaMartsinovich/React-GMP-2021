import React, { FC } from 'react';
import { connect } from 'react-redux';

import { TopContent } from 'components/topContent/TopContent';
import { Footer } from 'components/footer/Footer';
import { Navigation } from 'components/content/navigation/Navigation';
import { saveSortValue, saveFilterValue } from 'store/actions/actions';
import { NoMovieProps } from './noMovieFound.interface';

import { NoMovie, Content, NoMovieTitle } from './NoMovieFound.style';

export const NoMovieFoundComponent: FC<NoMovieProps> = ({
  saveSortValue,
  saveFilterValue,
}) => (
  <>
    <TopContent />
    <NoMovie>
      <Navigation
        saveSortValue={saveSortValue}
        saveFilterValue={saveFilterValue}
      />
      <Content>
        <NoMovieTitle>No movie found</NoMovieTitle>
      </Content>
    </NoMovie>
    <Footer />
  </>
);

export const NoMovieFound = connect(
  //   (state: AppState) => ({
  //     movies: getMoviesDataSelector(state),
  //     totalAmount: getTotalAmount(state),
  //     filterValue: getFilterValueSelector(state),
  //     sortValue: getSortValueSelector(state),
  //   }),
  null,
  { saveSortValue, saveFilterValue }
)(NoMovieFoundComponent);
