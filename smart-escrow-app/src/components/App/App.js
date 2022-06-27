import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import EscrowGenerator from '../EscrowGenerator/Draft/EscrowGenerator';
import EscrowDetails from '../EscrowGenerator/Details/EscrowDetails';
import EscrowsHistory from '../EscrowsHistory/EscrowsHistory';
import UniqueEscrowView from '../UniqueEscrowView/UniqueEscrowView';
import ServiceValidation from '../EscrowGenerator/Validators/ServiceValidation';
import FindEscrow from '../FindEscrow/FindEscrow';

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
        <Route
          path='validations/:id'
          element={ <ServiceValidation />}
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
      <Route
        path='find'
        element={ <FindEscrow /> }
      />
    </Routes>
  );
}

export default App;
