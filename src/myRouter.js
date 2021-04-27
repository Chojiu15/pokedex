import './App.css';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Pokemons from './components/Pokemons'
import Pokemon from './components/Pokemon'


import NavBar from './components/NavBar';



function MyRouter() {
  return (
    <div className="App">

      <Router>
      <NavBar />

      <Switch>
            
          <Route exact path='/pokemons' component={Pokemons} />
          <Route exact path='/pokemon/:id' component={Pokemon} />



      </Switch>
      </Router>
    </div>
  );
}

export default MyRouter;
