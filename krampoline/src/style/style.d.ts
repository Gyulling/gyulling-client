import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray050: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      prime: string;
      sub: string;
      skyblue: string;
      quiz: string;
    };

    fonts: {
      h1: SerializedStyles;
      h2: SerializedStyles;
      h3: SerializedStyles;
      h4: SerializedStyles;
      h5: SerializedStyles;
      h6: SerializedStyles;
      subtitle_1: SerializedStyles;
      subtitle_2: SerializedStyles;
      paragraph_lg: SerializedStyles;
      paragraph: SerializedStyles;
      paragraph_sm: SerializedStyles;
      caption: SerializedStyles;
      h6_Semibold: SerializedStyles;
      hint: SerializedStyles;
    };
  }
}
