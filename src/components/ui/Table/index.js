import styled from 'styled-components';
import { compose, typography, border, space } from 'styled-system';

export const Table = styled.table(
  { borderCollapse: 'collapse' },
  space
);

export const TableRow = styled.tr({});

export const TableBody = styled.tbody({});

export const TableCell = styled.td(({ theme: { colors } }) =>
  ({
    border: '1px solid',
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderColor: colors.lightGray
  }),
  compose(border, typography, space)
);

export default Table;
