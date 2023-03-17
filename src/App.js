import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sighnup from './components/Sighnup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
     <Route path={'/login'} element={<Login/>}></Route>
     <Route path={'/signup'} element={<Sighnup/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
