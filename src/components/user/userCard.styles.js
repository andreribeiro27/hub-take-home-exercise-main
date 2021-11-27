import styled from '@emotion/styled';

import {Card, CardActions, CardContent, SvgIcon} from '@material-ui/core';


export const StyledCard = styled(Card)`
    flex: 1 0 300px;
    box-sizing: border-box;
    margin: 10px 5px;
    background-color: azure;
    max-width: 300px;
`;

export const StyledCardContent = styled(CardContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledSvgIcon = styled(SvgIcon)`
  width: 40px;
  height: 40px;
`;

export const StyledCardActions = styled(CardActions)`
    padding-left: 0;
`;
