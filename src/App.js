import GlobalStyle from "./style/globalStyles";
import HomePage from "./components/HomePage/HomePage";
import SessionPage from "./components/SessionPage/SessionPage";
import SeatPage from "./components/SeatPage/SeatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {
  const [filme, setFilme] = useState('');
  const [sessao, setSessao] = useState('');
  const [ingressos, setIngressos] = useState('');
  let [comprador, setComprador] = useState([]);


  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScreenContainer>
        <Header>CINEFLEX</Header>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/sessoes/:idFilme"
            element={<SessionPage />}
          />
          <Route
            path="/assentos/:idSessao"
            element={
              <SeatPage
                setFilme={setFilme}
                setSessao={setSessao}
                setIngressos={setIngressos}
                setComprador={setComprador}

              />}
          />
          <Route
            path="/sucesso"
            element={
              <SuccessPage
                filme={filme}
                sessao={sessao}
                ingressos={ingressos}
                comprador={comprador}
              />}
          />
        </Routes>
      </ScreenContainer >
    </BrowserRouter>


  );
}

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
  left: 0px;
  background-color: #C3CFD9;
  font-family: 'Roboto', sans-serif;
`;

const ScreenContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  font-family: 'Roboto', sans-serif;
`;



export default App;
