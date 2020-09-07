import styled from 'styled-components';
import { typography, color, compose, width, system } from 'styled-system';

const Text = styled.div(
  system({
    textTransform: true,
    cursor: true
  }),
  compose(typography, color, width)
);

export default Text;
