import styled from 'styled-components'

export const Container = styled.div`
    width: ${(props) => props.$width || '80%'};  
    height:  ${(props) => props.$height || '100vh'};
    min-height:  ${(props) => props.$minHeight};
    display: ${(props) => props.$display || 'block'};
    justify-content: ${(props) => props.$justifyContent || 'flex-start'};
    align-items: ${(props) => props.$alignItems || 'flex-start'};
    flex-flow: ${(props) => props.$flexFlow || 'row'};
    margin: auto;
` 

export const Botao = styled.button` 
    width: ${(props) => props.$width || 'auto'};
    height:  ${(props) => props.$height || '50px'};
    padding: ${(props) => props.$padding || 'auto'};
    border: ${(props) => props.$border || 'none'};
    border-radius: 100px;
    background-color: ${(props) => props.$backgroundColor || '#FFCB05'};
    color: ${(props) => props.$color || 'white'};
    font-size: ${(props) => props.$fontSize || '16px'};
    font-family: ${(props) => props.$fontFamily || 'Poppins'};
    display: flex;
    align-items: center;
    font-weight: 500;
    :hover{
        background-color: ${(props) => props.$corBackground || '#FFCB05'};
        color: black; 
        transform: scale(${(props) => props.$scale || '1.1'});
        font-weight: 600;
        cursor: pointer;
        border: ${(props) => props.$borderHover || 'none'};
    }
`

export const TituloPagina = styled.h1`
    font-family: 'Acme';
    font-size: 55px;
    color: #3267B2;
    margin-top: 80px;  
`
