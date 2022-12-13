import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function ContentSeat({ seats,setIngressos,setComprador}) {
  let name = ""
  let cpf=""
  const ids = []
  const assentos = []
  const navigate = useNavigate()

  function enviarDados(event) {
    event.preventDefault(); // impede o redirecionamento
    console.log(ids,name,cpf)
  
    const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
      ids: ids,
      name: name,
      cpf: cpf
    })
    
    setIngressos(assentos)
    setComprador([name,cpf])
    requisicao.then(() => navigate("/sucesso")) 
  }

  function SeatButton({ id, name, isAvailable }) {
    const [statusColor, setStatusColor] = useState('#C3CFD9');
    const [borderColor, setBorderColor] = useState('#808F9D');
    const [seatStatus, setSeatStatus] = useState('available');

    function chooseSeat() {
      if (isAvailable === false) {
        alert("Esse assento não está disponível")
      } else {
        if (seatStatus === 'available') {
          setSeatStatus('selected')
          setStatusColor('#1AAE9E')
          setBorderColor('#0E7D71')
          ids.push(id)
          assentos.push(name)

        } else if (seatStatus === 'selected') {
          setSeatStatus('available')
          setStatusColor('#C3CFD9')
          setBorderColor('#808F9D')
          ids.splice(ids.indexOf(id), 1)
        }
        console.log(ids)
        console.log(assentos)
      }
    }

    return (
      <Seat onClick={() => { chooseSeat() }} borderColor={isAvailable ? borderColor : '#F7C52B'} color={isAvailable ? statusColor : '#FBE192'}>
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
            <SeatButton key={elem.id} id={elem.id} name={elem.name} isAvailable={elem.isAvailable} />
          ))}
        </SeatsContainer>

        <Legenda>
          <ItemLegenda>
            <Seat borderColor={'#0E7D71'} color={'#1AAE9E'}></Seat>
            <p>Selecionado</p>
          </ItemLegenda>
          <ItemLegenda>
            <Seat borderColor={'#808F9D'} color={'#C3CFD9'}></Seat>
            <p>Disponível</p>
          </ItemLegenda>
          <ItemLegenda>
            <Seat borderColor={'#F7C52B'} color={'#FBE192'}></Seat>
            <p>Indisponível</p>
          </ItemLegenda>
        </Legenda>

        <InputContainer>
          <form onSubmit={enviarDados} >
            <label htmlFor="name">Nome do comprador:</label>
            <input id="name" required type="text" placeholder="Digite seu nome"  onChange={e => name = e.target.value} >
            </input>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input id="cpf" required type="text" placeholder="Digite seu CPF" onChange={e => cpf = e.target.value} >
            </input>
            <ButtonContainer>
              <button>Reservar assento(s)</button>
            </ButtonContainer>
          </form>
        </InputContainer>

      </Wrapper>
    </Content>
  );
}

const ButtonContainer = styled.div`
display: flex;
margin-top: 60px;
justify-content: center;
align-items: center;
button{
  width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
color: white;
border:none

}
`;


const InputContainer = styled.div`
width: 327px;
font-size: 18px;
input {
  height: 51px;
  border: 1px solid #D5D5D5;
  border-radius: 3px;
  width: 310px;
  font-size: 18px;
  padding-left: 18px;
  margin-bottom: 10px;
  margin-top: 5px;
  ::placeholder{
    font-style: italic;
  }
}
`;


const Content = styled.div`
  width: 100%;
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
  width: 365px;
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
  border: 1px solid ${props => props.borderColor};
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
  margin-bottom: 41px;
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
