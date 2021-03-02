import { styled } from '../../theme';
import moviesHeader from '../../img/movies-header.jpg';

export const HeaderWrap = styled.div`
  margin-bottom: 10px;
  padding: 30px 60px;
  position: relative;
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.8) 100%),
    url(${moviesHeader});
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBottom = styled.div`
  width: 90%;
  margin: 0 auto;
`;
