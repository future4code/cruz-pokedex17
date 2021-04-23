import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {linkHome} from '../routes'
import Header from '../components/header'
import GlobalStateContext from "../global/GlobalStateContext"


const Detalhes = () => {
    const { pokemons, pokedex } = useContext(GlobalStateContext)
    const history = useHistory()
    const { name, pokedexScreen } = useParams()
    const [selectedPokemons, setSelectedPokemons] = useState({})

    useEffect(() => {
      let current = []

      if(pokedexScreen) {
        current = pokedex.find((item) => {
          return item.name === name
        })
      } else {
        current = pokemons.find((item) => {
          return item.name === name
        })
      }

      if(!current) {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => setSelectedPokemons(res.data))
        .catch((err) => console.log(err.response))
      } else {
        setSelectedPokemons(current)
        console.log(selectedPokemons)
      }
    }, [])


    return(
      <>
      <Header />
          {/* <Header>
            <button type="button" onClick={()=>linkHome(history)}>
              Home
            </button>
          </Header> */}
          {selectedPokemons && selectedPokemons.sprites && (
                <div>
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                      <img src={selectedPokemons.sprites.front_default} alt=""/>
                      <img src={selectedPokemons.sprites.back_default} alt=""/>
                    </div>
                    <div>
                        {selectedPokemons && selectedPokemons.types.map((type) => {
                          return <p key={type.type.name}>{type.type.name}</p>
                        })}
                      </div>
                    <div>
                      <h3>Stats</h3>
                      {selectedPokemons && selectedPokemons.stats.map((stat) => {
                        return ( <p 
                        key={stat.stat.name}><b>{stat.stat.name}: </b> 
                        {stat.base_stat}</p>)
                      })}
                    </div>
                    <div>
                      <div>
                        <h2>Movs</h2>
                        {selectedPokemons && selectedPokemons.moves.map((move, index) => {
                          return (index < 5 && <p key={move.move.name}>{move.move.name}</p>)
                        })}
                      </div>
                    </div>
                </div>
          )}
        </>
    )
}

export default Detalhes;