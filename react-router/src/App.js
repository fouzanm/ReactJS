import './App.css';
import Profile from './container/Profile';
import About from './container/About';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
      {/* <Link to='/about'>About</Link>
      <Link to='/profile'>Profile</Link> */}
      <button onClick={()=> navigate('/about')}>About</button>
      <button onClick={()=> navigate('/profile')}>Profile</button>
      <Routes>
        <Route element={<About/>} path='/about'/>
        <Route element={<Profile/>} path='/profile'/>
      </Routes>
    </div>
  );
}

export default App;
