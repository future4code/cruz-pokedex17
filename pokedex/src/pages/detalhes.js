import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/URL'
import styled from 'styled-components'
import {linkHome} from '../routes'
import Header from '../components/header'
import { Container, TituloPagina} from "../components/estilosCompoentes";
import GlobalStateContext from '../global/GlobalStateContext'
import {corBase, corAux} from '../utils/functions'
import 'antd/dist/antd.css'
import { Slider } from 'antd';
import '../components/antd.css'

const DivDetalhes = styled.div` 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 20px;
` 

const DivFotosPokemons = styled.div` 
  display: flex;
  justify-content: space-between;
  height: 25vh;
  width: 55vh; /*coloquei vh de propoósito*/
` 

const CirculoFoto = styled.div` 
  height: 25vh; 
  width: 25vh; /*coloquei vh de propoósito*/
  border-radius: 25vh;
  background-color: ${(props) => props.$backgroundColor};;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const FotoPokemom = styled.img` 
  height: 65%;
` 

const Flex = styled.div`
  display: flex;
  width: 100%;
  .ant-slider{
    flex: 5;
  }
`

const NomeStat = styled.label`
  color: green;
  flex: 2;
  text-transform: capitalize;
`

const NumeroStat = styled.label`
  color: green;
  flex: 1;
`

const DivGrafico = styled.div`
  background: #f9f9f9;
`


function Detalhes() {
    const { pokemons, pokedex } = useContext(GlobalStateContext)
    const history = useHistory()
    const { name, pokedexScreen } = useParams()
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const [carregando, setCarregando] = useState(false)
    const [active, setActive] = useState(true)

    const changeActive = (type) => {
      if(type == 'stats'){
        setActive(true)
      } else {
        setActive(false)
      }
    }

    useEffect(() => {

      let currentPokemon = []

      if(pokedexScreen) {
        currentPokemon = pokedex.find((item) => {
          return item.name === name
        })
      } else {
        currentPokemon = pokemons.find((item) => {
          return item.name === name
        })
      }

      if(!currentPokemon) {
        setCarregando(true)
        axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then((res) => { 
          setSelectedPokemons(res.data)
          setCarregando(false)
        })
        .catch((err) => console.log(err))
      } else {
        setCarregando(true)
        setSelectedPokemons(currentPokemon)
        setCarregando(false)
      }
    }, [])

    return(
      <>
          <Header/>

          <Container $display='flex' $alignItems="center" $flexFlow="column"> 

          <TituloPagina $textTransform='capitalize'>{selectedPokemons.name}</TituloPagina>

            {carregando ? 'Carregando seu pokemon' : 
            Object.keys(selectedPokemons).length > 0 ?
      
              
            <DivDetalhes>
                <DivFotosPokemons>
                    <CirculoFoto $backgroundColor={corBase(selectedPokemons.types.[0].type.name)}><FotoPokemom src={selectedPokemons.sprites.front_default}/></CirculoFoto>
                    <CirculoFoto $backgroundColor={corBase(selectedPokemons.types.[0].type.name)}><FotoPokemom src={selectedPokemons.sprites.back_default}/></CirculoFoto>
                </DivFotosPokemons>
                <DivGrafico>
                  <Flex>
                    <button onClick={() => changeActive('stats')}>STATS</button>
                    <button onClick={() => changeActive('moves')}>MOVES</button>
                  </Flex>
                    {active ? 
                    selectedPokemons.stats.map((stat) => 
                      <Flex>
                        <NomeStat>{stat.stat.name}</NomeStat>
                        <NumeroStat>{stat.base_stat}</NumeroStat>
                        <Slider defaultValue={stat.base_stat}  disabled={true} />
                      </Flex>
                    ) : 
                    selectedPokemons.moves.map((move) => 
                      <Flex>
                        <NomeStat>{move.move.name}</NomeStat>
                      </Flex>
                    )
                    }
                </DivGrafico>
            </DivDetalhes> : 'Houve um erro ao carregar'
            }
            
          </Container>
          
          
        </>
    )
}

export default Detalhes;

