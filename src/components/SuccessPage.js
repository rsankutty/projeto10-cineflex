import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function SuccessPage(
  { filme,
    sessao,
    ingressos,
    comprador }) {
  const navigate = useNavigate();

  if (ingressos.length === 0) {
    return (
      <Content>
        <Cabecalho>Faça um pedido primeiro!</Cabecalho>
        <RetornoButton onClick={() => navigate('/')}>Voltar pra Home</RetornoButton>
      </Content>
    )
  }


  return (
    <Content>
      <Cabecalho>Pedido feito com sucesso!</Cabecalho>
      <ResumoContainer>
        <ItemResumo data-test="movie-info" >
          <h1>Filme e Sessão</h1>
          <p>{filme}</p>
          <p>{sessao}</p>
        </ItemResumo>
        <ItemResumo  data-test="seats-info">
          <h1>Ingressos</h1>
          {ingressos.map(item => <p key={item}>Assento {item}</p>)}
          {/* <p>Assento 15</p>
          <p>Assento 16</p> */}
        </ItemResumo>
        <ItemResumo data-test="client-info">
          <h1>Comprador</h1>
          <p>Nome: {comprador[0]}</p>
          <p>CPF: {comprador[1]}</p>
        </ItemResumo>
      </ResumoContainer>
      <RetornoButton data-test="go-home-btn" onClick={() => navigate('/')}>Voltar pra Home</RetornoButton>
    </Content>
  )
}



const Cabecalho = styled.div`
  width: 170px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
  margin-top: 50px;
  margin-bottom: 50px;
  color: #247A6B;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

const ResumoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ItemResumo = styled.div`
margin-bottom: 25px;
color: #293845;
  h1{
    margin-bottom: 10px;
  }
  p{
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 5px;
    
  }
`;

const RetornoButton = styled.button`
width: 225px;
height: 42px;
border: none;
border-radius: 3px;
background-color: #E8833A;
color: white;
font-weight: 400;
font-size: 18px;
margin-top: 65px;
`;