import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { Container, Botao} from '../components/estilosCompoentes'

import logo from  '../imgs/header/logo.png'
import {linkHome, linkPokedex} from '../routes'

const BoxHeader = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
`

const LogoBotao = styled.a` 
    cursor: pointer;
`

const Logo = styled.img` 
    height: 12vh;
`

function Header() {

    const history = useHistory()

    return(
        <BoxHeader>
            <Container $display='flex' $justifyContent='space-between' $alignItems='center' $height='15vh'>

                <LogoBotao onClick={()=>linkHome(history)}><Logo src={logo}></Logo></LogoBotao>
                
                <Botao onClick={()=>linkPokedex(history)} $fontFamily='Acme' $fontSize='20px' $fontSize='25px' $padding='25px 40px 25px 40px'>Minha Pokedéx</Botao>

            </Container>
        </BoxHeader>
    )
}

export default Header

