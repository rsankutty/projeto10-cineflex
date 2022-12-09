import styled from "styled-components";
import ContentSession from "./ContentSession";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SessionPage() {
  const [movieSession, setMovieSession] = useState([]);
  const [movieInfo, setMovieInfo] = useState("");

  const { idFilme } = useParams();

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );

    requisicao.then((resposta) => {
      setMovieInfo(resposta.data);
      setMovieSession(resposta.data.days);
      console.log(resposta.data);
    });
  }, [idFilme]);

  if (movieSession.length === 0) {
    return <ContentLoading>Carregando Dados...</ContentLoading>;
  }

  return (
    <ScreenContainer>
      <ContentSession movieSession={movieSession} setMovieSession={setMovieSession}/>
      <Footer>
        <SessionSumary>
          <img
            src={movieInfo.posterURL}
            alt=""
          />
        </SessionSumary>
        <p>{movieInfo.title}</p>
      </Footer>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-width: 375px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 200px;
`;

const ContentLoading = styled.div`
  width: 100%;
  margin-top: 67px;
  /* background-color: orange; */
`;

const Footer = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  gap: 15px;
  align-items: center;
  color: #e8833a;
  font-size: 34px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  p {
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
  img {
    width: 48px;
    height: 72px;
  }
`;
