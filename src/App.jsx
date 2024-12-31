import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signin from './page/signin';
import Login from './page/login';
import Home from './page/to-do_list';
import welcome from './page/welcome';
import WelcomePage from './page/welcome';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
