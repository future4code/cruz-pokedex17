import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
    Home,
    Pokedex,
    Detalhes
} from './pages'
import GlobalState from './global/GlobalState';

function App() {
  return (
    <GlobalState>
    <Router>
      <Switch>
        <Route exact path='/' exact component={Home}/>
        <Route path='/pokedex' exact component={Pokedex}/>
        <Route path='/detalhes/:name' exact component={Detalhes}/>
      </Switch>
    </Router>
    </GlobalState>
  );
}

export default App;
