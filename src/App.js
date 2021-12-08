import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TeamList } from './views/teamList/TeamList'
import { TeamDetail } from './views/teamDetail/TeamDetail'
import { PlayerList } from './views/playerList/PlayerList'
import { PlayerDetail } from './views/playerDetail/PlayerDetail'
import { Nav } from './views/navbar/Nav'
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <main className="App">
      
      </main>
    </Router>
  );
}

export default App;
