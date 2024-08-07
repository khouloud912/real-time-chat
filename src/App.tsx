import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
