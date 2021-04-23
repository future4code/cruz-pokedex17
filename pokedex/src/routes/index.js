export const linkHome = (history) => {
    history.push('/')
}

export const linkPokedex = (history) => {
    history.push('/pokedex')
}

export const linkDetalhes = (history, nome) =>  {
    history.push('/detalhes/'+nome)
}