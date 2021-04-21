import React from 'react'
import { useHistory } from 'react-router'
import { linkPokedex } from '../routes'

const Header = ({ leftButton, title, rightButton}) => {

    const history = useHistory()

    const headerButton = () => {
        switch (titleButton) {
            case "Lista":
                return "Pokedex"
            case "Pokedex":
                return "Lista"
            default:
                return "Voltar"
        }
    }

    return(
        <div>
            <button onClick={leftButton}>{headerButton()}</button>
            <h1>{title}</h1>
            {rightButton && <button onClick={() => linkPokedex(history)}>Minha Pokédex</button>}
        </div>
    )
}

export default Header