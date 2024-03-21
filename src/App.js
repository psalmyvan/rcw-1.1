import './App.css';
import Home from './Home';
import Login from './Profile';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>


    </div>
    </Router>
  );
}



export default App;
