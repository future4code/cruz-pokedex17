export const linkHome = (history) => {
    history.push('/')
}

export const linkPokedex = (history) => {
    history.push('/pokedex')
}

// export const linkDetalhes = (history) =>  {
//     history.push('/detalhes')
// }

export const linkDetalhes = (history, name, Pokedex) => {
    Pokedex
        ? history.push(`/pokemon/${name}/pokedexScreen`)
        : history.push(`/pokemon/${name}`);
}

// export const linkDetalhes = (history, name) => {
//     history.push(`/pokemon/${name}`)
// }