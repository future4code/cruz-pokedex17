import React, { useContext} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkDetalhes} from '../routes'
import Header from '../components/header'
import { Container, TituloPagina, ListaPokemons, InfosPokemon, BoxCard, BoxImagem, ImagemPokemon, BoxInfos, NomePokemon, CategoriaPokemon, BoxBotoes, BotaoCard} from "../components/estilosCompoentes";
import GlobalStateContext from '../global/GlobalStateContext'
import 'antd/dist/antd.css'
import { List, Card } from 'antd';
import '../components/antd.css'
import {corBase, corAux} from '../utils/functions'

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

function Pokedex() {
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
            }) //retorna a lista do Pok??dex ordenada crescente, de acordo com id
    
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
        <TituloPagina>Minha Poked??x</TituloPagina>

        {/* <DivInputs>
          <InputPesquisa
            type="text"
            placeholder="Pesquise um Pok??mon pelo nome"
          ></InputPesquisa>

          <SelectFiltro>
            <option>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option>{categoria}</option>
            ))}
          </SelectFiltro>
        </DivInputs> */}

        <ListaPokemons>
          <List
            pagination={{pageSize: 6}}
            grid={{ gutter: 100, column: 3 }}
            dataSource={pokedex}
            renderItem={(pokemon) => (
              <List.Item>
                <Card>
                  <BoxCard>
                    <BoxImagem $corFundo={corAux(pokemon.types.[0].type.name)}>
                      <ImagemPokemon src={pokemon.sprites.front_default} />
                    </BoxImagem>

                    <BoxInfos>
                      <InfosPokemon>
                        <NomePokemon>{pokemon.name}</NomePokemon>
                        <CategoriaPokemon $corCategoria={corBase(pokemon.types.[0].type.name)} $corBorda={corAux(pokemon.types.[0].type.name)} /*ser?? props*/>
                          {pokemon.types.[0].type.name}
                        </CategoriaPokemon>
                        <BoxBotoes>
                          <BotaoCard $padding='0px 10px 0px 10px' $width='47%' $height='55px' $scale='1.09' $boxShadow={corBase(pokemon.types.[0].type.name)} $backgroundColor={corAux(pokemon.types.[0].type.name)} $borderHover={corAux(pokemon.types.[0].type.name)} $colorHover={corAux(pokemon.types.[0].type.name)} onClick={pokedex ? () => removePokemons(pokemon) : ()=>addPokemonPokedex(pokemon)}>{pokedex ? 'REMOVER DA POKEDEX' : 'ADICIONAR ?? POKEDEX'}</BotaoCard>
                          <BotaoCard $padding='0px 10px 0px 10px' $width='47%' $height='55px' $scale='1.09' $boxShadow={corBase(pokemon.types.[0].type.name)} $backgroundColor='transparent' $border={corAux(pokemon.types.[0].type.name)} $color={corAux(pokemon.types.[0].type.name)} $backgroundHover={corAux(pokemon.types.[0].type.name)} onClick={()=>linkDetalhes(history, pokemon.name)}>MAIS INFORMA????ES</BotaoCard>
                        </BoxBotoes>
                      </InfosPokemon>
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
}

export default Pokedex;

// import { useHistory } from "react-router-dom";
// import styled from 'styled-components'
// import {linkDetalhes} from '../routes'

// function Pokedex() {

//   const history = useHistory()
//   return (
//           <button type="button" onClick={()=>linkDetalhes(history)}>
//               Detalhes
//             </button>
//     );
// }
// export default Pokedex;import React, { useContext } from 'react' 
// import { useHistory } from "react-router-dom";
// import styled from 'styled-components'
// import PokemonCard from "../components/PokemonCard";
// import GlobalStateContext from "../global/GlobalStateContext";
// import {linkDetalhes} from '../routes'
// import { Container, TituloPagina} from "../components/estilosCompoentes";
// import Header from '../components/header'


// const DivInputs = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 45px;
//   margin-top: 30px;
// `

// const InputPesquisa = styled.input`
//     width: 40%;
//     height: 100%;
//     border-radius: 10px;
//     padding: 0px;
//     padding-left: 10px;
//     outline: none;
//     font-size: 16px;
//     font-weight: 400;
//     color: #1A1A1A;
//     border: 1px solid #383838;
//     outline: none;
//     background-color: transparent;
//     opacity: 0.5;
//     ::placeholder {
//         color: #1A1A1A;
//     }
//     :focus {
//         opacity: .9;
//     }
// `

// const SelectFiltro = styled.select` 
//   font-size: 16px;
//   font-weight: 400;
//   color: #1A1A1A;
//   outline: none;
//   border: 1px solid #1A1A1A;
//   width: 20%;
//   height: 100%;
//   opacity: 0.5;
//   padding-left: 10px;
//   border-radius: 10px;
//   :focus {
//     border-radius: 10px 10px 0 0;;
//   }
//   ::placeholder {
//         color: #1A1A1A;
//     }
// `

// const BoxCard = styled.div`
// `

// const Imagem = styled.div`
// `

// function Pokedex() {
//   const { pokedex } = useContext(GlobalStateContext)
//   const history = useHistory()

//   const categorias = [
//     'Bug',
//     'Dark',
//     'Dragon',
//     'Electric',
//     'Fairy',
//     'Fighting',
//     'Fire',
//     'Flying',
//     'Ghost',
//     'Grass',
//     'Ground',
//     'Ice',
//     'Normal',
//     'Poison', 
//     'Psychic',
//     'Rock', 
//     'Steel', 
//     'Water',
// ]  
  
//   return (
//     <>
//       <Header />
//       <Container
//         $display="flex"
//         $alignItems="center"
//         $height="85vh"
//         $flexFlow="column"
//       >
//         <TituloPagina>Pok??mons in the wild</TituloPagina>

//         <DivInputs>
//           <InputPesquisa
//             type="text"
//             placeholder="Pesquise um Pok??mon pelo nome"
//           ></InputPesquisa>

//           <SelectFiltro>
//             <option>Selecione uma categoria</option>
//             {categorias.map((categoria) => (
//               <option /*value={categoria}*/>{categoria}</option>
//             ))}
//           </SelectFiltro>
//         </DivInputs>

//         <BoxCard>
//           <div>
//             {pokedex &&
//               pokedex.map((pokemon) => {
//                 return (
//                   <PokemonCard Pokedex key={pokemon.name} pokemon={pokemon} />
//                 );
//               })}
//           </div>
//         </BoxCard>
//       </Container>
//     </>
//   );
// }
// export default Pokedex;