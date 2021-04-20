import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkHome} from '../routes'
import Header from '../components/header'

function Detalhes() {
    const history = useHistory()

    return (
          <Header>
            <button type="button" onClick={()=>linkHome(history)}>
              Home
            </button>
          </Header>
    );
}
export default Detalhes;