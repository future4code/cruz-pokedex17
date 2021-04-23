import React, { useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components'
import Home from '../pages/home'
import GlobalStateContext from "../global/GlobalStateContext";
import {linkDetalhes} from '../routes'
import { Container, TituloPagina} from "../components/estilosCompoentes";
import Header from '../components/header'


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

function Pokedex() {
  const { pokedex } = useContext(GlobalStateContext)
  const { name } = useParams()
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
    <>
      <Header />
      <Container
        $display="flex"
        $alignItems="center"
        $height="85vh"
        $flexFlow="column"
      > 
        <TituloPagina>Pokémons in the wild</TituloPagina>

        <DivInputs>
          <InputPesquisa
            type="text"
            placeholder="Pesquise um Pokémon pelo nome"
          ></InputPesquisa>

          <SelectFiltro>
            <option>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option /*value={categoria}*/>{categoria}</option>
            ))}
          </SelectFiltro>
        </DivInputs>

        <BoxCard>
          <div>
            {pokedex &&
              pokedex.map((pokemon) => {
                return (
                  <Home Pokedex key={pokemon.name} pokemon={pokemon} />
                );
              })}
          </div>
        </BoxCard>
      </Container>
    </>
  );
}
export default Pokedex;