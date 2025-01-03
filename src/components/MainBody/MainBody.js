import React from "react";
import * as S from './style';

const MainBody = () => {
  return (
    <>
      <S.Page>
        <S.MainContainer>
          <S.MainBox>
            <S.Title fontSize="95px">삶을 더 편안하게, 마음을 더 <br/>따뜻하게</S.Title>
            <S.Buttons>
              <S.StartButton>지금 바로 시작하기</S.StartButton>
              <S.LikeButton>👍</S.LikeButton>
            </S.Buttons>
          </S.MainBox>
        </S.MainContainer>
      </S.Page>
      <S.Page>
        
      </S.Page>
    </>
  )
}

export default MainBody;