import './App.css'
import 'animate.css';
import Home from './Home'
import About from './About'
import Calculator from './Calculator';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='app-bar'>
      <nav className="nav-bar">
      <Link to='/' className='link'>Home</Link>
      <Link to='/about-me' className='link'>About</Link>
      <Link to='/calculator' className='link'>Calculate</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />}/>
        <Route path='/calculator' element={<Calculator />}/>
      </Routes>
      {/* <Calculator /> */}
    </div>
  )
}

export default App
