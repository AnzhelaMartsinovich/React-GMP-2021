import { theme, styled } from 'theme';
import { TitleH2 } from 'components/common/title/Title.style';

export const NoMovie = styled.div`
  background-color: ${theme.colors.black};
  padding: 25px 60px 30px 60px;
`;

export const Content = styled.div`
  position: relative;
  min-height: 500px;
`;

export const NoMovieTitle = styled(TitleH2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
