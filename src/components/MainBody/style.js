import styled from "styled-components";

export const Page = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Write = styled.p`
  font-size: ${(props) => props.fontSize || "10px"};
  text-align: center;
`

export const Box = styled.div `
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  display: flex;
  align-items: center;
`

export const Button = styled.div `
  height: 100%;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    scale: 1.05;
  }
`

export const MainContainer = styled(Box) `
  width: 85%;
  height: 55%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(246, 241, 206);
  border-radius: 30px;
  padding: 80px;
  margin-top: 50px;
`

export const MainBox = styled(Box) `
  width: 50%;
  height: 100%;
  margin-left: 50px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const Title = styled(Write) `
  font-family: "Do Hyeon", serif;
  text-align: left;
  line-height: 1;
  margin: 0;
`

export const Buttons = styled(Box) `
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const StartButton = styled(Button) `
  font-family: "Nanum Gothic Coding", serif;
  width: 200px;
  background-color: rgb(255, 130, 47);
  color: white;
  font-weight: 700;
`

export const LikeButton = styled(Button) `
  width: 60px;
  background-color: white;
  font-size: 27px;
`