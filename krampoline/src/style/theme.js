import { css } from 'styled-components';

const colors = {
  // 아래 형식으로 정의
  white: '#FFFFFF',
};

const fonts = {
  // 아래 형식으로 정의
  title_semibold_24: css`
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.024rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
