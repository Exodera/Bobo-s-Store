
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Food from './pages/Food';
import CallUs from './pages/CallUs';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Router>
 
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/food' element = {<Food/>}/>
          <Route path='/drinks' element = {<Drinks/>}/>
          <Route path='/callUs' element = {<CallUs/>}/>
        </Routes>
      </Router>
      <Body/>
      
    </div>
  );
}

export default App;
