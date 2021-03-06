
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.h1`
  font-size: ${style('fontSize.h1')};
  font-family: ${style('headerFontFamily')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.h1')};
  color: ${style('color.headerFont')};
  margin-bottom: ${style('marginDouble')}
`;
