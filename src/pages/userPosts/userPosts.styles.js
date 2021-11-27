import styled from '@emotion/styled';

import {Box, Container} from '@material-ui/core';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGrid = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background-color: white;
  border-radius: 4px;
`;

export const StyledBoxButton = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
