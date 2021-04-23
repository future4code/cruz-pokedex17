import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/URL'

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonByName()
    },[])

    useEffect(() => {
        const newListPokemon = []
        pokemonNames.forEach((item) => {  //para cada nome de pokemon, ordene a lista de pokemons até 20 deles
            axios.get(`${BASE_URL}/pokemon/${item.name}`)
            .then((res) => {
                newListPokemon.push(res.data)
                if (newListPokemon.length === 900) {
                    const orderList = newListPokemon.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderList)
                } 
            }) 
            .catch((err) => {
                console.log(err.message)
            })
        })
    },[pokemonNames])

    const getPokemonByName = () => {
        axios.get(`${BASE_URL}/pokemon?limit=900&offset=0`)
        .then((res) => {
            setPokemonNames(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState