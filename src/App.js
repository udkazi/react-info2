import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';

import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement,fetchPosts} from './actions';
import {FETCH_POSTS} from './actions/postActions';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  
  console.log(counter,"counter")


  return (
    <div className="App">
      
      <Navbar />
      <button onClick={() => dispatch(fetchPosts())}>+</button>
      <Table />
      
    </div>
  );
}

export default App;
