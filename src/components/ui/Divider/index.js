import styled from 'styled-components';
import { compose, width, space } from 'styled-system';

const Divider = styled.hr(({ theme: { colors } }) =>
  ({
    border: 'none',
    height: 1,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: colors.gray,
  }),
  compose(width, space)
);

export default Divider;
