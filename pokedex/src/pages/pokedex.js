import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkDetalhes} from '../routes'

function Pokedex() {

  const history = useHistory()
  return (
          <button type="button" onClick={()=>linkDetalhes(history)}>
              Detalhes
            </button>
    );
}
export default Pokedex;