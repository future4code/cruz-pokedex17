import React, { useContext} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkPokedex} from '../routes'
import Header from '../components/header'
import imagemPokemon from  '../imgs/lista-pokemons/pikachu.png'
import { Botao, Container, TituloPagina} from "../components/estilosCompoentes";
import GlobalStateContext from '../global/GlobalStateContext'
import PokemonCard from '../components/PokemonCard';
import 'antd/dist/antd.css'
import { List, Card } from 'antd';
import '../components/antd.css'


const DivInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`

const InputPesquisa = styled.input`
    width: 40%;
    height: 45px;
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
  height: 45px;
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

const ListaPokemons = styled.div`
  margin-top: 50px;
`

const BoxCard = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`

const BoxImagem = styled.div` 
  width: 100%;
  height: 30vh;
  background-color: red;  /*será alterado para props quando puxarmos a api*/
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 3px 3px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

const ImagemPokemon = styled.img`
  width: 50%;
  object-fit: contain;  
`

const BoxInfos = styled.div` 
  width: 100%;
  height: 30vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 30px;
  position: absolute;
  bottom: -20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const NomePokemon = styled.div`
  font-family: 'Acme';
  font-size: 25px;
`

const CategoriaPokemon = styled.p` 
  border: 4px solid pink;/* será props */ 
  background-color: red;/* será props */ 
  padding: 7px 30px 7px 30px;
  border-radius: 100px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`

const BoxBotoes = styled.div` 
  width: 90%;
  display: flex;
  justify-content: space-between;
`

function Home() {
    const { pokemons } = useContext(GlobalStateContext)
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

  const data = [ /* NÃO APAGAR, UTILIZAREMOS ESTA PARTE ASSIM QUE PUXARMOS OS DADOS DA API*/ 
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  
  return (
      <div>
        <Header/>
        <Container $display='flex' $alignItems='center' $minHeight='85vh' $flexFlow='column'>
          
          <TituloPagina>Pokémons in the wild</TituloPagina>

          <DivInputs>
            <InputPesquisa type="text" placeholder="Pesquise um Pokémon pelo nome"></InputPesquisa>

            <SelectFiltro> 
              <option>Selecione uma categoria</option>
              {categorias.map((categoria) => 
              <option /*value={categoria}*/ >{categoria}</option>
              )}
            </SelectFiltro>
          </DivInputs>

          <ListaPokemons> 
            <List
                grid={{ gutter: 100, column: 3 }}
                dataSource={data}
                renderItem={item => (
            <List.Item>

            <Card>
              <BoxCard>
                <BoxImagem>
                  <ImagemPokemon src={imagemPokemon}/>
                </BoxImagem>

                <BoxInfos>
                  <NomePokemon>Pikachú</NomePokemon>
                  <CategoriaPokemon /*será props*/ >Eletric </CategoriaPokemon> 

                  <BoxBotoes>
                    <Botao>ADICIONAR À POKEDEX</Botao>
                    <Botao>DETALHES</Botao>

                  </BoxBotoes>

                </BoxInfos>

              </BoxCard>
              
            
            </Card>

            </List.Item>
            )}
            />,
          </ListaPokemons>

        </Container>
      </div>
    );

    // console.log(pokemons)

    // return (
    //   <>
    //       <header>
    //         <button type="button" onClick={()=>linkPokedex(history)}>
    //           Pokedex
    //         </button>
    //       </header>
    //       <div>
    //         {pokemons && pokemons.map((pokemon) => {
    //           return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
    //         })}
    //       </div>
    //   </>
}
export default Home;