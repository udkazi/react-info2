import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Nav from './components/nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
       <Nav />
   
      <Switch>
       
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
   
    </Router>
    </div>
  );
}

export default App;
