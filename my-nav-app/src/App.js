
import './App.css';
import About from './Componenets/About/About';
import Home from './Componenets/Home/Home';
import Nav from './Componenets/NavBar/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <div>
      <Router>
        <div className='row container mt-5 ms-5'>
          <div className='col-4'>
            <Nav />
          </div>

          <div className='col-8'>
            <Routes>
              <Route path='/home' Component={Home} exact></Route>
              <Route path='/about' Component={About} exact></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
