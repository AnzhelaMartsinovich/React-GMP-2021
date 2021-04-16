import { theme, styled } from 'theme';
import { Link } from 'react-router-dom';

export const NotFound = styled.div`
  border: 3px solid ${theme.colors.gray};

  h1 {
    text-align: center;
  }
`;

export const Header = styled.div`
  height: 100px;

  div {
    margin-left: 50px;
  }
`;

export const NotFoundImage = styled.img`
  display: block;
  max-width: 55%;
  margin: 0 auto 100px auto;
  border-radius: 15px;
`;

export const NotFoundLink = styled(Link)`
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: transparent;
  outline: none;
  color: ${theme.colors.pink};
  border: 3px solid ${theme.colors.pink};
  font-size: 28px;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.grayBg};
  }
`;

export const Content = styled.div``;

export const NotFoundImageWrap = styled.div`
  position: relative;
  min-height: 510px;
`;
