import React from "react";
import * as S from './style';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.LogoBox width="30%">
        <S.Logo fontSize="55px" onClick={() => handleNavigation('/')}>하루의 시작</S.Logo>
      </S.LogoBox>
      <S.MenuBox width="40%">
        <S.Menu width="25%">상담</S.Menu>
        <S.Menu width="25%">컨텐츠</S.Menu>
        <S.Menu width="25%">일기</S.Menu>
        <S.Menu width="25%">FAQ</S.Menu>
      </S.MenuBox>
      <S.SOSBox width="30%">
        <S.SOS width="50%" onClick={() => handleNavigation('/sos')}>SOS</S.SOS>
      </S.SOSBox>
    </S.Container>
  )
}

export default Header;