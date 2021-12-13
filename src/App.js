import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TeamList } from './views/teamList/TeamList'
import { TeamDetail } from './views/teamDetail/TeamDetail'
import { PlayerList } from './views/playerList/PlayerList'
import { PlayerDetail } from './views/playerDetail/PlayerDetail'
import { CreateTeam } from './views/teamList/CreateTeam'
import { UpdateTeam } from './views/teamList/UpdateTeam'
import { CreatePlayer } from './views/playerList/CreatePlayer'
import { UpdatePlayer } from './views/playerList/UpdatePlayer'
import { Footer } from './views/footer/Footer'
import { Home } from './views/home/Home'
import { Nav } from './views/navbar/Nav'
import './styles/style.css'


function App() {
  return (
    <Router>
      <header>
      <Nav className="Navbar"/>
      </header>
      <main>
      <Switch>
        <Route path="/teams/new" exact component={CreateTeam} />
        <Route path="/teams/:id/update" exact component={UpdateTeam} />
        <Route path="/players/new" exact component={CreatePlayer} />
        <Route path="/players/:id/update" exact component={UpdatePlayer}/>
        <Route path="/" exact component={Home} />
        <Route path="/teamlist" exact component={TeamList} />
        <Route path="/teams/:id" exact component={TeamDetail} />
        <Route path="/playerlist" exact component={PlayerList} />
        <Route path="/players/:id" exact component={PlayerDetail} />
      </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
