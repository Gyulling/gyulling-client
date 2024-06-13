export interface ChildrenProps {
  children: React.ReactNode;
}

export interface RetryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface OnButtonProps {
  children: React.ReactNode;
  isQuiz: boolean;
  disabled: boolean;
  handleFn: () => void;
}

export interface ModalProps {
  onClose: () => void;
}

export interface QuestionProps {
  mainQuestion: string;
  subQuestion: string;
  isQuiz: boolean;
}

export interface ContentsProps {
  textArr: string[];
}
