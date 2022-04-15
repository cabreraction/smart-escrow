import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import EscrowGenerator from '../EscrowGenerator/EscrowGenerator';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='escrow-generation' element={<EscrowGenerator />} />
    </Routes>
  );
}

export default App;
