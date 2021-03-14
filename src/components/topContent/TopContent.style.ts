import { styled } from 'theme';
import moviesHeader from 'img/movies-header.jpg';

export const TopContentContainer = styled.div`
  margin-bottom: 10px;
  padding: 30px 60px;
  position: relative;
  height: 550px;
  background: linear-gradient(rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.8) 100%),
    url(${moviesHeader});
`;
