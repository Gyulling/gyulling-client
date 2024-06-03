export interface SelectAnswerProps {
  correctIc: boolean;
  failIc: boolean;
  handleClickCorrectBtn: () => void;
  handleClickFailBtn: () => void;
}

export interface SelectTagProps {
  selectedCategory: Array<string>;
  handleClickCategory: (desc: string) => void;
}
