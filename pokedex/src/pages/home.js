import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {linkPokedex} from '../routes'

function Home() {
    const history = useHistory()

    return (
            <button type="button" onClick={()=>linkPokedex(history)}>
              Pokedex
            </button>
    );
}
export default Home;