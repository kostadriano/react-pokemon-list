import React from 'react';
import { typography, space, color, layout, flexbox, system, border } from 'styled-system'
import styled from 'styled-components'

export const Box = styled.div(
  system({
    textTransform: true
  }),
  border,
  typography,
  space,
  color,
  layout,
  flexbox
)

export const FlexBox = ({ children, ...props }) =>
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  >
    {children}
  </Box>

export default Box;
