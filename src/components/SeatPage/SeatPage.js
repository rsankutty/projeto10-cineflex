import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentSeat from "./ContentSeat";


export default function SeatPage({ 
  setFilme,
  setSessao,
  setIngressos,
  setComprador }) 
  {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [seats, setSeats] = useState([]);

  const { idSessao } = useParams();

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );

    requisicao.then((resposta) => {
      setMoviesInfo(resposta.data)
      setSeats(resposta.data.seats);
      setFilme(resposta.data.movie.title)
      setSessao(`${resposta.data.day.date} ${resposta.data.name}`)
    });
  }, [idSessao,setFilme,setSessao]);

  if (seats.length === 0) {
    return <ContentLoading>Carregando Dados...</ContentLoading>;
  }

  return (
    <ScreenContainer>
      <ContentSeat seats={seats} setIngressos={setIngressos} setComprador={setComprador}/>
      <Footer>
        <SessionSumary>
          <img
            src={moviesInfo.movie.posterURL}
            alt=""
          />
        </SessionSumary>
        <PContainer>
          <p>{moviesInfo.movie.title}</p>
          <p>{`${moviesInfo.day.weekday} - ${moviesInfo.name}`}</p>
        </PContainer>
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
  margin: 0px;
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

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
