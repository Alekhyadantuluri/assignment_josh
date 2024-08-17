import './App.css';
import Test from './pages/test';
import Skills from './pages/skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Footer from "./pages/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
