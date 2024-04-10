
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Login} from './components/Login';
import { Signup} from './components/Signup';
import { Home} from './components/Home';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
