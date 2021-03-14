import { styled, theme } from 'theme';
import {
  MovieCardImg,
  MovieCardTitle,
  MovieRating,
  MovieTagline,
  MovieData,
  MovieDescr,
} from 'components/common/movie/MovieComponents.style';

export const AboutMovieItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${theme.colors.white + theme.transparency['50']};
  font-weight: 400;
`;

export const AboutMovieItemRightPart = styled.div`
  max-width: 770px;
`;

export const AboutMovieImg = styled(MovieCardImg)`
  max-width: 285px;
`;

export const AboutMovieGroup = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 3px;
`;

export const AboutMovieTitle = styled(MovieCardTitle)`
  margin: 40px 25px 20px 0;
  max-width: 85%;
  font-size: 60px;
  font-weight: 300;
`;

export const AboutMovieRating = styled(MovieRating)`
  width: 65px;
  font-size: 26px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.white + theme.transparency['50']};
  color: ${theme.colors.green};
  line-height: 65px;
  text-align: center;
`;

export const AboutMovieTagline = styled(MovieTagline)`
  margin-bottom: 30px;
  font-size: 16px;
`;

export const AboutMovieGroupTwo = styled(AboutMovieGroup)`
  color: ${theme.colors.pink};
  font-size: 28px;
  letter-spacing: 1px;
  margin-bottom: 25px;
`;

export const AboutMovieData = styled(MovieData)`
  margin-right: 40px;
`;

export const AboutMovieDescr = styled(MovieDescr)`
  font-size: 18px;
  line-height: 25px;
`;
