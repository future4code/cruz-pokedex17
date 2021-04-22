// import { useContext } from 'react'
// import { useHistory } from 'react-router-dom'
// import GlobalStateContext from '../global/GlobalStateContext'
// import { linkDetalhes } from '../routes';

// const PokemonCard = (props) => {
//     const history = useHistory();
//     const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

//     const addPokemonPokedex = () => {
//         const pokemonIndex = pokemons.findIndex((item) => 
//         item.name === props.pokemon.name) 
//         //retorna o primeiro index da lista cujo valor do item seja o mesmo da props

//         const newPokeList = [...pokemons]
//         newPokeList.splice(pokemonIndex, 1) //adiciona na array um item
//         const orderedList = newPokeList.sort((a, b) => {
//             return a.id - b.id
//             //retorna a lista ordenada em crescente, de acordo com o id
//         })

//         const newPokedexList = [...pokedex, props.pokemon]
//         const orderedPokedex = newPokedexList.sort((a, b) => {
//             return a.id - b.id
//         }) //retorna a lista do Pokédex ordenada crescente, de acordo com id

//         setPokemons(orderedList)
//         setPokedex(orderedPokedex)
//     }

//     const removePokemons = () => {
//         const pokemonIndex = pokedex.findIndex((item) => 
//         item.name === props.pokemon.name)
        
//         const newPokedexList = [...pokedex]
//         newPokedexList.splice(pokedex, 1)
//         const orderPokedex = newPokedexList.sort((a, b) => {
//             return a.id - b.id
//         })

//         const newPokemonList = [...pokemons, props.pokemon]
//         const orderPokemon = newPokemonList.sort((a, b) => {
//             return a.id - b.id
//         })   
//         setPokedex(orderPokedex)
//         setPokemons(orderPokemon)
//     }

//     return(
//         <div>
//             <div>
//                 <img 
//                 src={props.pokemon && props.pokemon.sprites.front_default}
//                 alt={props.pokemon.name}
//                 />
//                 <h3>{props.pokemon.name}</h3>
//                 <p>{props.pokemon.types.[0].type.name}</p>
//             </div>
//             <div>
//                 <button onClick={props.Pokedex ? removePokemons : addPokemonPokedex}>
//                     {props.Pokedex ? "Remover da Pokedex" : "Adicionar a Pokedex"}</button>
//                 <button onClick={() => linkDetalhes(history, props.pokemon.name)}>Mais Informações</button>
//             </div>
//         </div>
//     )
// }

// export default PokemonCard