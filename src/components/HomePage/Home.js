import styled from "styled-components";
import ContentHome from "./ContentHome";

export default function Home() {

    return (
        <ScreenContainer>
            <Header>
                CINEFLEX
            </Header>
            <ContentHome />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const Header = styled.div`
  width: 100vw;
  height: 67px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E8833A;
  font-size: 34px;
  position: fixed;
  background-color: #C3CFD9;
`;
