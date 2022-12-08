import styled from "styled-components";
import ContentHome from "./ContentHome";

export default function HomePage() {

    return (
        <ScreenContainer>
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

