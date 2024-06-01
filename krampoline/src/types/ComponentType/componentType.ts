import React from 'react';

export interface SelectAnswerProps {
  correctIc: boolean;
  failIc: boolean;
  handleClickCorrectBtn: () => void;
  handleClickFailBtn: () => void;
}

// Article.tsx, RetryButton.tsx
export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SelectTagProps {
  selectedCategory: Array<string>;
  handleClickCategory: (desc: string) => void;
}
