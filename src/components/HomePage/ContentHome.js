import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContentHome() {
  const [moviesInfo, setMoviesInfo] = useState([]);


  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setMoviesInfo(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  if (moviesInfo.length === 0) {
    return <ContentLoading>Carregando Dados...</ContentLoading>;
  }

  return (
    <Content>
      <Instruction>Selecione um filme</Instruction>
      <MoviesContainer>
        {moviesInfo.map((elem) => (
          <Link key={elem.id} to={`/sessoes/${elem.id}`}>
            <Movie >
              <img src={elem.posterURL} alt="" />
            </Movie>
          </Link>
        ))}
        {/* <Movie>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg" alt="" />
                </Movie> */}
      </MoviesContainer>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  /* background-color: orange; */
`;

const ContentLoading = styled.div`
  width: 100%;
  margin-top: 67px;
  /* background-color: orange; */
`;

const Instruction = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 30px;
  row-gap: 11px;
  /* background-color: yellow; */
`;

const Movie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 209px;
  background-color: white;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  img {
    width: 129px;
    height: 193px;
  }
`;
