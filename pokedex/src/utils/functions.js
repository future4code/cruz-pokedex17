export const coresBotoes = (categoria) => {
    console.log(categoria)
    switch(categoria) {
        case 'bug':
            return 'green'
            break
        case 'fire':
            return 'red'
            break



        default: 
            return 'pink';
    }
    
}