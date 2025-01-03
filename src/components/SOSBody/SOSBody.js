import React from "react";
import * as S from './style';

const SOSBody = () => {
  return(
    <>
      <S.Page>
        <S.Form>
          <S.Title fontSize="30px">지금 위급한 상황이십니까?</S.Title>
          <S.Content fontSize="20px">"네"를 누를 시 지역경찰, 가족, <br/>의료팀에 연락이 갑니다.</S.Content>
          <S.Buttons>
            <S.Yes>네</S.Yes>
            <S.No>아니오</S.No>
          </S.Buttons>
        </S.Form>
      </S.Page>
    </>
  )
}

export default SOSBody;