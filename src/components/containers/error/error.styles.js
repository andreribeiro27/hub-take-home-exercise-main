import styled from '@emotion/styled';
import {Box} from '@material-ui/core';

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
`;
