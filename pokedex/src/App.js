import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
    Home,
    Pokedex,
    Detalhes
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' exact component={Home}/>
        <Route path='/pokedex' exact component={Pokedex}/>
        <Route path='/detalhes' exact component={Detalhes}/>
      </Switch>
    </Router>
  );
}

export default App;
