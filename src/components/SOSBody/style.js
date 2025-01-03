import styled from "styled-components";

export const Page = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Write = styled.p`
  font-size: ${(props) => props.fontSize || "10px"};
  text-align: center;
  font-family: "Nanum Gothic Coding", serif;
  font-weight: 900;
`

export const Form = styled(Box) `
  width: 420px;
  height: auto;
  padding: 80px;
  background-color: rgb(246, 241, 206);
  border-radius: 30px;
  flex-direction: column;
`

export const Title = styled(Write) `
  color: #000;
  margin: 0;
`

export const Content = styled(Write) `
  color: rgb(129, 129, 129);
  line-height: 1.2;
  font-weight: 500;
`

export const Buttons = styled(Box) `
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  gap: 50px;
  margin-top: 30px;
`

export const Yes = styled(Button) `
  font-family: "Nanum Gothic Coding", serif;
  width: 50%;
  height: 100%;
  background-color: red;
  color: white;
  font-size: 25px;
`

export const No = styled(Button) `
  font-family: "Nanum Gothic Coding", serif;
  width: 50%;
  height: 100%;
  background-color: rgb(255, 130, 53);
  color: white;
  font-size: 25px;
`

