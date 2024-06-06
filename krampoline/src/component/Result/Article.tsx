import styled from 'styled-components';
import { ChildrenProps } from '../../types/CommonType/commonType';

const Article = ({ children }: ChildrenProps) => {
  return (
    <ArticleWrapper>
      <Contents>{children}</Contents>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  width: 100%;
  text-align: left;
`;

const Contents = styled.p`
  margin-top: 2.4rem;
  margin-left: 3rem;
  font-family: 'Pretendard';
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default Article;
