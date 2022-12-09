import styled from "styled-components";
import { useState } from "react";

export default function ContentSeat({ seats }) {


  function SeatButton({ name,isAvailable }) {
    const [statusColor, setStatusColor] = useState('#C3CFD9');

    function chooseSeat() {
      setStatusColor('#1AAE9E')
    }

    return (
      <Seat onClick={() => { chooseSeat() }} color={ isAvailable?statusColor:'#FBE192'}>
        {name}
      </Seat>
    )

  }

  return (
    <Content>
      <Instruction>Selecione o(s) assento(s)</Instruction>
      <Wrapper>
        <SeatsContainer>
          {seats.map((elem) => (
            <SeatButton key={elem.id} name={elem.name} isAvailable={elem.isAvailable}/>
          ))}
        </SeatsContainer>
        <Legenda>
          <ItemLegenda>
            <Seat color={'#1AAE9E'}></Seat>
            <p>Selecionado</p>
          </ItemLegenda>
          <ItemLegenda>
            <Seat color={'#C3CFD9'}></Seat>
            <p>Disponível</p>
          </ItemLegenda>
          <ItemLegenda>
            <Seat color={'#FBE192'}></Seat>
            <p>Indisponível</p>
          </ItemLegenda>
        </Legenda>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
`;

const SeatsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  /* background-color: yellow; */
`;

const Seat = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #808F9D;
  border-radius: 12px;
  background-color: ${props => props.color};
`;

const Legenda = styled.div`
  width: 375px;
  height: 90px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: green; */
`;

const ItemLegenda = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 13px;
  gap: 10px;
  /* background-color: green; */
`;
