import styled from "styled-components";
import ContentSession from "./ContentSession";


export default function SessionPage() {

    return (
        <ScreenContainer>
            <Header>
                CINEFLEX
            </Header>
            <ContentSession />
            <Footer>
                <SessionSumary>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg" alt="" />
                </SessionSumary>
                <p>Enola Holmes</p>
            </Footer>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-width: 375px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const Header = styled.div`
  width: 100%;
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

const Footer = styled.div`
  width: 100%;
  height: 117px;
  margin: 0px;
  display: flex;
  gap: 15px;
  align-items: center;
  color: #E8833A;
  font-size: 34px;
  position: fixed;
  bottom: 0px;
  background-color: #DFE6ED;
  border: 1px solid #9EADBA;
  p{
        font-size: 26px;
        color: #293845;
    }
`;

const SessionSumary = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 89px;
    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 10px;
    img{
    width: 48px;
    height: 72px;
    }
  
`;
