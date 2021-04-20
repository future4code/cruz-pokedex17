import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkPokedex} from '../routes'
import Header from '../components/header'
import { Container, TituloPagina} from "../components/estilosCompoentes";

const DivInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 30px;
`

const InputPesquisa = styled.input`
    width: 40%;
    height: 100%;
    border-radius: 10px;
    padding: 0px;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: #1A1A1A;
    border: 1px solid #383838;
    outline: none;
    background-color: transparent;
    opacity: 0.5;
    ::placeholder {
        color: #1A1A1A;
    }
    :focus {
        opacity: .9;
    }
`

const SelectFiltro = styled.select` 
  font-size: 16px;
  font-weight: 400;
  color: #1A1A1A;
  outline: none;
  border: 1px solid #1A1A1A;
  width: 20%;
  height: 100%;
  opacity: 0.5;
  padding-left: 10px;
  border-radius: 10px;
  :focus {
    border-radius: 10px 10px 0 0;;
  }
  ::placeholder {
        color: #1A1A1A;
    }
`

const BoxCard = styled.div`
`

const Imagem = styled.div`
`

function Home() {
    const history = useHistory()
    
    const categorias = [
      'Bug',
      'Dark',
      'Dragon',
      'Electric',
      'Fairy',
      'Fighting',
      'Fire',
      'Flying',
      'Ghost',
      'Grass',
      'Ground',
      'Ice',
      'Normal',
      'Poison', 
      'Psychic',
      'Rock', 
      'Steel', 
      'Water',
  ]  

    return (
      <div>
        <Header/>
        <Container $display='flex' $alignItems='center' $height='85vh' $flexFlow='column'>
          
          <TituloPagina>Pokémons in the wild</TituloPagina>

          <DivInputs>
            <InputPesquisa type="text" placeholder="Pesquise um Pokémon pelo nome"></InputPesquisa>
          {/* <option selected>Selecione</option>
                <option value={"CRESCENTE"}>Crescente</option>
                <option value={"DECRESCENTE"}>Decrescente</option> */}

            <SelectFiltro> 
              <option>Selecione uma categoria</option>
              {categorias.map((categoria) => 
              <option /*value={categoria}*/ >{categoria}</option>
              )}
            </SelectFiltro>
          </DivInputs>

          <BoxCard>
            

          </BoxCard>

        </Container>
      </div>
    );
}
export default Home;