import { css, DefaultTheme } from 'styled-components';

const colors = {
  // 아래 형식으로 정의
  white: '#FFFFFF',
  gray050: '#F8F9FA',
  gray100: '#F3F5F7',
  gray200: '#ECEEF0',
  gray300: '#E2E5E8',
  gray400: '#D4D8DC',
  gray500: '#B5B9BD',
  gray600: '#8E9398',
  gray700: '#505458',
  gray800: '#3A3D40',
  gray900: '#252729',
  prime: '#3CC2FF',
  sub: '#FFB800',
  skyblue: '#E0F5FF',
  quiz: '#FFCA44',
};

const fonts = {
  // 아래 형식으로 정의
  h1: css`
    font-family: 'Pretendard';
    font-size: 3.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.7rem;
    letter-spacing: -0.04rem;
  `,
  h2: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 4.8rem;
    letter-spacing: -0.04rem;
  `,
  h3: css`
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.6rem;
    letter-spacing: -0.03rem;
  `,
  h4: css`
    font-family: 'Pretendard';
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: -0.02rem;
  `,
  h5: css`
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.7rem;
    letter-spacing: -0.01rem;
  `,
  h6: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: -0.01rem;
  `,
  subtitle_1: css`
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: -0.01rem;
  `,
  subtitle_2: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0rem;
  `,
  paragraph_lg: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: -0.01rem;
  `,
  paragraph: css`
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: -0.01rem;
  `,
  paragraph_sm: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.01rem;
  `,
  caption: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.04rem;
  `,
  h6_Semibold: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    letter-spacing: -0.01rem;
  `,
  hint: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.01rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
