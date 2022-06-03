import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import EscrowGenerator from '../EscrowGenerator/EscrowGenerator';
import EscrowDetails from '../EscrowGenerator/EscrowDetails';
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
      >
        <Route 
          path='draft'
          element={ <EscrowGenerator /> } 
        />
        <Route 
          path='details/:id'
          element={ <EscrowDetails />}
        />
      </Route>
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
