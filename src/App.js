
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Users from './Pages/Users';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App" >
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/*' element={<ErrorPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile/:id' element={<Profile />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
