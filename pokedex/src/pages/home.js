import React, { useContext} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkPokedex} from '../routes'
import GlobalStateContext from '../global/GlobalStateContext'
import PokemonCard from '../components/PokemonCard';

function Home() {
    const { pokemons } = useContext(GlobalStateContext)
    const history = useHistory()
    console.log(pokemons)

    return (
      <>
          <header>
            <button type="button" onClick={()=>linkPokedex(history)}>
              Pokedex
            </button>
          </header>
          <div>
            {pokemons && pokemons.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
            })}
          </div>
      </>
    );
}
export default Home;