import logo from './logo.svg';
import './App.css';
import List from './components/list';
import { ThingsContext } from './context-api/ThingsContextApi';

function App() {
  return (
    <ThingsContext>
      <div className="App">
        <List />
      </div>
    </ThingsContext>
  );
}

export default App;
