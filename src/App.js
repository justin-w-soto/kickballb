import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TeamList } from './views/teamList/TeamList'
import { TeamDetail } from './views/teamDetail/TeamDetail'
import { PlayerList } from './views/playerList/PlayerList'
import { PlayerDetail } from './views/playerDetail/PlayerDetail'
import { Home } from './views/home/Home'
import { Nav } from './views/navbar/Nav'
import './App.css';


function App() {
  return (
    <Router>
      <main className="App">
      <header>
      <Nav className="Navbar"/>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teamlist" exact component={TeamList} />
        <Route path="/teams/:id" exact component={TeamDetail} />
        <Route path="/playerlist" exact component={PlayerList} />
        <Route path="/players/:id" exact component={PlayerDetail} />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
