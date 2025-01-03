import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  position: fixed;
`

export const Box = styled.div `
  width: ${(props) => props.width || "0"};
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Write = styled.p `
  font-size: ${(props) => props.fontSize || "10px"};
  text-align: center;
`

export const LogoBox = styled(Box) `
  justify-content: center;
`

export const MenuBox = styled(Box) `
  justify-content: center;
  gap: 15px;
`

export const SOSBox = styled(Box) `
  justify-content: center;
`

export const Logo = styled(Write) `
  font-family: "Do Hyeon", serif;
  font-weight: 900;
  transition: 0.3s;

  &:hover{
    scale: 1.04;
  }
`

export const Menu = styled(Box) `
  font-family: "Nanum Gothic Coding", serif;
  height: 50%;
  background-color: white;
  border: 2.4px solid black;
  border-radius: 60px;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  transition: 0.4s;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const SOS = styled(Box) `
  font-family: "Nunito", serif;
  height: 50%;
  background-color: red;
  color: white;
  justify-content: center;
  font-size: 25px;
  border-radius: 60px;
  border: 2.4px solid red;
  transition: 0.3s;

  &:hover{
    color: red;
    background-color: white;
  }
`