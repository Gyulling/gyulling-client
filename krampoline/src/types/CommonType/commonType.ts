import React from 'react';

// Article.tsx, RetryButton.tsx
export interface ChildrenProps {
  children: React.ReactNode;
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
  textArr: Array<string>;
}
