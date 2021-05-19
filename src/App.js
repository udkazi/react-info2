import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import {useDispatch } from 'react-redux';
import {createPost} from './actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">      
      <Navbar />
      <a onClick={() => dispatch(createPost())}>Create Post</a>
      <Table />
    </div>
  );
}

export default App;
