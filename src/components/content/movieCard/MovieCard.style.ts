import { styled } from '../../../theme';

export const MovieCardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: space-between;
  grid-auto-rows: 1fr;
`;
