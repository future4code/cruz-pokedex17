import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkHome} from '../routes'

function Detalhes() {
    const history = useHistory()

    return (
            <button type="button" onClick={()=>linkHome(history)}>
              Home
            </button>
    );
}
export default Detalhes;