import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ContentSession({ movieSession, setMovieSession }) {

  return (
    <Content>
      <Instruction>Selecione um horário</Instruction>
      <SessionContainer>
        {movieSession.map((elem) => (
          <Session key={elem.id} data-test="movie-day" >
            <p>
              {elem.weekday} - {elem.date}
            </p>
            <ButtonContainer>
              {elem.showtimes.map((item) => (
                <Link key={item.id} to={`/assentos/${item.id}`}>
                  <button data-test="showtime" key={item.id}>{item.name}</button>
                </Link>
              ))}
            </ButtonContainer>
          </Session>
        ))}
        {/* <Session>
          <p>Quinta-feira - 24/06/2021</p>
          <ButtonContainer>
            <button>15:00</button>
            <button>15:00</button>
          </ButtonContainer>
        </Session> */}
      </SessionContainer>
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



const Instruction = styled.div`
  width: 100%;
  height: 110px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;

const SessionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  /* background-color: yellow; */
`;

const Session = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 90px;
  /* background-color: red; */
  p {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 8px;
  button {
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    border-radius: 3px;
    border: none;
    color: white;
  }
`;
