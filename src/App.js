import GlobalStyle from "./style/globalStyles";
import HomePage from "./components/HomePage/HomePage";
import SessionPage from "./components/SessionPage/SessionPage";
import SeatPage from "./components/SeatPage/SeatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
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
          element={<SeatPage />}
        />
      </Routes>
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
  background-color: #C3CFD9;
  font-family: 'Roboto', sans-serif;
`;


export default App;
