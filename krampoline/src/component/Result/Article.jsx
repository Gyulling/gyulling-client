import styled from 'styled-components';

const Article = ({ children }) => {
  return <ArticleWrapper>{children}</ArticleWrapper>;
};

const ArticleWrapper = styled.article`
  ${({ theme }) => theme.fonts.h2};
  color: white;
  padding: 0.5rem 1rem;
  margin-right: 24.9rem;
  /* border-radius: 1rem; */
`;

export default Article;
