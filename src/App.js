import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Nav from './components/nav';
import Details from './components/details';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
       <Nav />
   
      <Switch>
       
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" component={Contact} />
       
        <Route path="/about/:id" component={Details} />
        
      </Switch>
   
    </Router>
    </div>
  );
}

export default App;
