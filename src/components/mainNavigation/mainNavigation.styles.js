import styled from '@emotion/styled';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 10%;
  justify-content: flex-start;
  align-items: center;
  background-color: #008080;
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 25px;
`;

//
export const BackArrowIcon = styled(ArrowBackIosIcon)`
    color: black;
`;