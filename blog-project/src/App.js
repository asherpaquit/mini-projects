import Navbar from './Navbar';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="content">
        <Homepage />
        </div>
      </header>
    </div>
  );
}

export default App;
