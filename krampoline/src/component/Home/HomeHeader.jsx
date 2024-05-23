import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Ichome } from '../../assets';

const HomeHeader = () => {
  const navigate = useNavigate();
  const handleClikcHomeBtn = () => {
    navigate('/');
  };
  return (
    <HeaderWrapper>
      <Ichome onClick={handleClikcHomeBtn} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  padding-top: 1.8rem;
  padding-left: 0.6rem;
`;

export default HomeHeader;
