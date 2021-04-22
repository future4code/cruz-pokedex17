// import React, { useContext, useState, useEffect } from 'react'
// import { useHistory, useParams } from 'react-router-dom'
// import axios from 'axios'
// import { BASE_URL } from '../constants/URL'
// import styled from 'styled-components'
// import {linkHome} from '../routes'
// import Header from '../components/header'
// import GlobalStateContext from "../global/GlobalStateContext"


// function Detalhes() {
//     const { pokemons, pokedex } = useContext(GlobalStateContext)
//     const history = useHistory()
//     const { name, pokedexScreen } = useParams()
//     const [selectedPokemons, setSelectedPokemons] = useState({})

//     useEffect(() => {

//       let currentPokemon = []

//       if(pokedexScreen) {
//         currentPokemon = pokedex.find((item) => {
//           return item.name === name
//         })
//       } else {
//         currentPokemon = pokemons.find((item) => {
//           return item.name === name
//         })
//       }

//       if(!currentPokemon) {
//         axios
//         .get(`${BASE_URL}/pokemon/${name}`)
//         .then((res) => setSelectedPokemons(res.data))
//         .catch((err) => console.log(err))
//       } else {
//         setSelectedPokemons(currentPokemon)
//       }
//     }, [])


//     return(
//       <>
//           <Header>
//             <button type="button" onClick={()=>linkHome(history)}>
//               Home
//             </button>
//           </Header>
//           <div>
//             <div>
//               <img src={selectedPokemons.sprites.front_default}/>
//               <img src={selectedPokemons.sprites.back_default}/>
//             </div>
//             <div>
//                 {selectedPokemons && selectedPokemons.types.map((type) => {
//                   return <p key={type.type.name}>{type.type.name}</p>
//                 })}
//               </div>
//             <div>
//               <h3>Stats</h3>
//               {selectedPokemons && selectedPokemons.stats.map((stat) => {
//                 return ( <p 
//                 key={stat.stat.name}><b>{stat.stat.name}: </b> 
//                 {stat.base_stat}</p>)
//               })}
//             </div>
//             <div>
//               <div>
//                 <h2>Movs</h2>
//                 {selectedPokemons && selectedPokemons.moves.map((move, index) => {
//                   return (index < 6 && <p key={move.move.name}>{move.move.name}</p>)
//                 })}
//               </div>
//             </div>
//           </div>
//         </>
//     )
// }

// export default Detalhes;