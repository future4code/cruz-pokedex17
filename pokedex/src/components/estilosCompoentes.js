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

export const ListaPokemons = styled.div`
  margin-top: 30px;
  width: 100%;
`

export const BoxCard = styled.div`
  width: 100%;
`

export const BoxImagem = styled.div` 
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.$corFundo};  /*será alterado para props quando puxarmos a api*/
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 3px 3px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

export const ImagemPokemon = styled.img`
  height: 50%;
  object-fit: contain;
  margin-bottom: 15vh;
`

export const BoxInfos = styled.div` 
  width: 100%;
  height: 35vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 30px;
  position: absolute;
  bottom: -15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

export const InfosPokemon = styled.div` 
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;

`

export const NomePokemon = styled.div`
  font-family: 'Acme';
  font-size: 25px;
  text-transform: capitalize;
`

export const CategoriaPokemon = styled.p` 
  border: 4px solid ${(props) => props.$corBorda};/* será props */ 
  background-color: ${(props) => props.$corCategoria};
  padding: 3px 18px 3px 18px;
  border-radius: 100px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 10px;
`

export const BoxBotoes = styled.div` 
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const BotaoCard = styled.button` 
    width: ${(props) => props.$width || 'auto'};
    height:  ${(props) => props.$height || '50px'};
    padding: ${(props) => props.$padding || 'auto'};
    border: 1px solid ${(props) => props.$border || 'transparent'};
    box-shadow: 0px 0px 5px ${(props) => props.$boxShadow || 'none'};
    border-radius: 10px;
    background-color: ${(props) => props.$backgroundColor || '#FFCB05'};
    color: ${(props) => props.$color || 'white'};
    font-size: ${(props) => props.$fontSize || '16px'};
    font-family: ${(props) => props.$fontFamily || 'Poppins'};
    display: flex;
    align-items: center;
    font-weight: 500;
    :hover{
        background-color: ${(props) => props.$backgroundHover || 'white'};
        transform:'1.1';
        font-weight: 600;
        cursor: pointer;
        transform: scale(${(props) => props.$scale || '1.1'});
        color: ${(props) => props.$colorHover || 'white'};
        border: 1px solid ${(props) => props.$borderHover || 'transparent'};
    }
`