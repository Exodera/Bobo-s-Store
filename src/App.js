
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Food from './pages/Food';
import CallUs from './pages/CallUs';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/food' element = {<Food/>}/>
          <Route path='/drinks' element = {<Drinks/>}/>
          <Route path='/call-us' element = {<CallUs/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
