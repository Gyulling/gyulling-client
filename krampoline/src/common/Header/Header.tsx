import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowBack } from '../../assets';

const Header = () => {
  const navigate = useNavigate();
  const handleClickBackBtn = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <IcArrowBack onClick={handleClickBackBtn} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  padding-top: 1.8rem;
  padding-left: 1.7rem;
`;
