import './App.css';
import { Header } from './components/header';
import { Games } from './features/games/Games';

function App() {
  return (
    <div className='App'>
      <Header />
      <Games />
    </div>
  );
}

export default App;
