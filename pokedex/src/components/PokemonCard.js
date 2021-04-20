import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../global/GlobalStateContext'
import { linkDetalhes } from '../routes';

const PokemonCard = (props) => {
    const history = useHistory();
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)


    return(
        <div>
            <div>
                <img 
                src={props.pokemon && props.pokemon.sprites.front_default}
                alt={props.pokemon.name}
                />
                <h3>{props.pokemon.name}</h3>
                <p>{props.pokemon.types.[0].type.name}</p>
            </div>
        </div>
    )
}

export default PokemonCard