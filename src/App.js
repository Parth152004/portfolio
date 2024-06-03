import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import Skill from './Component/Skill';
import Contect from './Component/Contect';
import About from './Component/About';
import Navbar from './Sidecomponent/Navbar';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Skill' element={<Skill/>}></Route>
        <Route path='/Contect' element= {<Contect/>}></Route>
        <Route path='/About' element= {<About/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
