import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favorite from './components/Favorite';
import DetailsAnime from './components/DetailsAnime';

function App() {
    return(
      <Router>
        <div className="Apsp">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/favorite">
                <Favorite />
              </Route>
              <Route path="/details/:id">
                <DetailsAnime />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
