import React from 'react';

import styled from 'styled-components';
import { Box, FlexBox } from '@components/ui/Box';
import { compose, space, color, width } from 'styled-system';

export const Card = styled.div(
  ({ theme: { colors } }) => ({
    borderRadius: '4px',
    border: `1px solid ${colors.lightGray}`,
    backgroundColor: colors.white,
    overflow: 'hidden',
    color: colors.black,
    boxShadow: '0 2px 12px 0 rgba(0,0,0,.5)',
    boxSize: 'border-box',
    flexGrow: '1',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '8px 15px 15px 0 rgba(0,0,0,.8)',
      cursor: 'pointer'
    }
  }),
  compose(space, color, width)
)

export const CardContent = ({ children, ...props }) =>
  <Box paddingY={3} paddingX={4} {...props}>
    {children}
  </Box>

export const CardHeader = ({ children, ...props }) =>
  <FlexBox
    paddingX={4}
    paddingTop={3}
    fontSize="larger"
    fontWeight="bold"
    display='flex'
    textTransform="capitalize"
    justifyContent='space-between'

    {...props}
  >
    {children}
  </FlexBox>

export default Card;
