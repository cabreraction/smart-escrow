import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import EscrowGenerator from '../EscrowGenerator/EscrowGenerator';
import EscrowsHistory from '../EscrowsHistory/EscrowsHistory';
import UniqueEscrowView from '../UniqueEscrowView/UniqueEscrowView';

function App() {
  return (
    <Routes>
      <Route 
        path='/' 
        element={ <Signup /> } 
      />
      <Route 
        path='login' 
        element={ <Login /> } 
      />
      <Route 
        path='escrow-generation' 
        element={ <EscrowGenerator /> } 
      />
      <Route 
        path='escrows-history' 
        element={ <EscrowsHistory /> } 
      />
      <Route
        path='escrow/:id'
        element={ <UniqueEscrowView />}
      />
    </Routes>
  );
}

export default App;
