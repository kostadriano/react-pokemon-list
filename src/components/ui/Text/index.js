import styled from 'styled-components';
import { typography, color, compose } from 'styled-system';

const Text = styled.span(compose(typography, color));

export default Text;
