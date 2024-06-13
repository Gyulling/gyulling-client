export interface SelectAnswerProps {
  correctIc: boolean;
  failIc: boolean;
  handleClickCorrectBtn: () => void;
  handleClickFailBtn: () => void;
}

export interface SelectTagProps {
  selectedCategory: string[];
  handleClickCategory: (desc: string) => void;
}
