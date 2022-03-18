
import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Welcome from './Pages/Welcome';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/portfolio'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
       <Route path='/' element={<Welcome/>} />
  <Route path='/aboutme'  element={<AboutMe/>}/>
  <Route path='/portfolio'  element={<Portfolio/>}/>
</Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
