import React, { useContext} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkDetalhes, linkPokedex} from '../routes'
import Header from '../components/header'
import imagemPokemon from  '../imgs/lista-pokemons/pikachu.png'
import { Botao, Container, TituloPagina} from "../components/estilosCompoentes";
import GlobalStateContext from '../global/GlobalStateContext'
import PokemonCard from '../components/PokemonCard';
import 'antd/dist/antd.css'
import { List, Card } from 'antd';
import '../components/antd.css'
import {coresBotoes} from '../utils/functions'


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
  margin-top: 30px;
  width: 100%;
`

const BoxCard = styled.div`
  width: 100%;
`

const BoxImagem = styled.div` 
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.$corBotao};  /*será alterado para props quando puxarmos a api*/
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 3px 3px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

const ImagemPokemon = styled.img`
  height: 60%;
  object-fit: contain;
  margin-bottom: 15%  
`

const BoxInfos = styled.div` 
  width: 100%;
  height: 30vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 30px;
  position: absolute;
  bottom: -15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const NomePokemon = styled.div`
  font-family: 'Acme';
  font-size: 25px;
  text-transform: capitalize;
`

const CategoriaPokemon = styled.p` 
  border: 4px solid pink;/* será props */ 
  background-color: red;/* será props */ 
  padding: 5px 18px 5px 18px;
  border-radius: 100px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 40px;
`

const BoxBotoes = styled.div` 
  width: 90%;
  display: flex;
  justify-content: space-between;
`

function Home() {
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)
    const history = useHistory()
    const categorias = [
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison', 
      'psychic',
      'rock', 
      'steel', 
      'water',
  ]  

  const addPokemonPokedex = (pokemon) => {
            const pokemonIndex = pokemons.findIndex((item) => 
            item.name === pokemon.name) 
            //retorna o primeiro index da lista cujo valor do item seja o mesmo da props
    
            const newPokeList = [...pokemons]
            newPokeList.splice(pokemonIndex, 1) //adiciona na array um item
            const orderedList = newPokeList.sort((a, b) => {
                return a.id - b.id
                //retorna a lista ordenada em crescente, de acordo com o id
            })
    
            const newPokedexList = [...pokedex, pokemon]
            const orderedPokedex = newPokedexList.sort((a, b) => {
                return a.id - b.id
            }) //retorna a lista do Pokédex ordenada crescente, de acordo com id
    
            setPokemons(orderedList)
            setPokedex(orderedPokedex)
        }
    
        const removePokemons = (pokemon) => {
            const pokemonIndex = pokedex.findIndex((item) => 
            item.name === pokemon.name)
            
            const newPokedexList = [...pokedex]
            newPokedexList.splice(pokedex, 1)
            const orderPokedex = newPokedexList.sort((a, b) => {
                return a.id - b.id
            })
    
            const newPokemonList = [...pokemons, pokemon]
            const orderPokemon = newPokemonList.sort((a, b) => {
                return a.id - b.id
            })   
            setPokedex(orderPokedex)
            setPokemons(orderPokemon)
        }
  
  return (
    <div>
      <Header />
      <Container
        $display="flex"
        $alignItems="center"
        $minHeight="85vh"
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

        <ListaPokemons>
          <List
            pagination={{pageSize: 6}}
            grid={{ gutter: 100, column: 3 }}
            dataSource={pokemons}
            renderItem={(pokemon) => (
              <List.Item>
                <Card>
                  <BoxCard>
                    <BoxImagem $corBotao={coresBotoes(pokemon.types.[0].type.name)}>
                      <ImagemPokemon src={pokemon.sprites.front_default} />
                    </BoxImagem>

                    <BoxInfos>
                      <NomePokemon>{pokemon.name}</NomePokemon>
                      <CategoriaPokemon /*será props*/>
                        {pokemon.types.[0].type.name}
                      </CategoriaPokemon>
                      <BoxBotoes>
                        <Botao $padding='0px 10px 0px 10px' $width='45%' $height='55px' onClick={pokedex ? () => removePokemons(pokemon) : ()=>addPokemonPokedex(pokemon)}>{pokedex ? 'REMOVER DA POKEDEX' : 'ADICIONAR À POKEDEX'}</Botao>
                        <Botao $padding='0px 10px 0px 10px' $width='45%' $height='55px' onClick={()=>linkDetalhes(history, pokemon.name)}>MAIS INFORMAÇÕES</Botao>
                      </BoxBotoes>
                    </BoxInfos>
                  </BoxCard>
                </Card>
              </List.Item>
            )}
          />
          ,
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