import { styled, theme } from 'theme';
import { popupStyles } from 'commonCode/CommonStyles.style';

export const EditMovieContainer = styled.div`
  ${popupStyles}
`;

export const EditMovieForm = styled.form`
  position: relative;
  max-width: 580px;
  height: 80vh;
  margin: 3vh auto 0 auto;
  padding: 50px 60px;
  border-radius: 6px;
  background-color: ${theme.colors.black};
  overflow-y: scroll;
  border: 3px solid ${theme.colors.pink};
`;
