
import data from './components/data';
import CardList from './components/CardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardList {...data} />
    </div>
  );
}

export default App;
