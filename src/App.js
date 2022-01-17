import './App.css';
import Rankings from './components/rankings';

function App() {
  return (
    <div className="App">
      <header className="Main-page">
        <div className="Page-header">
          <h1>rumble figers leader bwords</h1>
        </div>
        <div className="Stats-container">
          <div className="Player-ign" id="Column">IGN</div>
          <div className="Player-wins" id="Column">Wins</div>
          <div className="Player-losses" id="Column">Losses</div>
          <Rankings />
        </div>
      </header>
      
    </div>
  );
}

export default App;
